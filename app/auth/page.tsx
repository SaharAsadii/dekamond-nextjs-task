"use client";

import * as yup from "yup";
import styles from "./auth.module.scss";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { validatePhone } from "@/utils/validate-phone";
import { Button, Input } from "@/components";
import { useFormik } from "formik";
import { useState } from "react";
import { API_URL } from "@/constants";

const validationSchema = yup.object({
  phone: yup
    .string()
    .required("شماره موبایل الزامی است")
    .test("is-valid-phone", "شماره موبایل معتبر نیست", (value) =>
      validatePhone(value || "")
    ),
});

export default function AuthPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema,
    onSubmit: async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const userData = data.results[0];

        login({
          name: `${userData.name.first} ${userData.name.last}`,
          email: userData.email,
          picture: userData.picture.medium,
          phone: formik.values.phone,
        });
        router.push("/dashboard");
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const { phone } = formik.values;
  const { phone: phoneError } = formik.errors;
  const { phone: phoneTouched } = formik.touched;

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h1>ورود</h1>
      <Input
        type="tel"
        label="شماره موبایل"
        inputMode="numeric"
        value={phone}
        placeholder="09xxxxxxxxx"
        name="phone"
        id="phone"
        error={phoneTouched && phoneError ? phoneError : undefined}
        onChange={formik.handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            formik.handleSubmit();
          }
        }}
      />

      <Button
        type="submit"
        loading={isLoading}
        disabled={isLoading || !formik.isValid}
      >
        ورود
      </Button>
    </form>
  );
}
