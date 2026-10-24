
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignupPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      console.error("Signup failed:", error);
      alert(error.message);
      return;
    }

    console.log("Signup response:", data);

    // Navigate after successful signup
    window.location.assign("/");
  } catch (err) {
    console.error("Signup request failed:", err);
    alert("Signup failed. Check the browser console.");
  }
};;

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">সাইন আপ</h1>

      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </legend>

          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="আপনার নাম"
            required
          />

          <label className="label">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <label className="label">পাসওয়ার্ড আবার দিন</label>
          <input
            type="password"
            name="confirmPassword"
            className="input"
            placeholder="Confirm Password"
            required
          />

          <button
            className="btn btn-neutral mt-4"
            type="submit"
          >
            সাইন আপ
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignupPage;
