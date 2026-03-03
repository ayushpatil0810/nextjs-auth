"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/forgotPassword", { email });
      setSubmitted(true);
      toast.success("Reset link sent if account exists!");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f] px-4">
      <Toaster />
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-1">Forgot Password</h1>
        <p className="text-gray-400 mb-8 text-sm">
          Enter your email and we&apos;ll send you a reset link.
        </p>

        {submitted ? (
          <div className="text-center">
            <p className="text-green-400 mb-6">
              If an account with that email exists, a password reset link has
              been sent.
            </p>
            <Link
              href="/login"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <button
              className="mt-2 w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold transition-colors"
              onClick={onSubmit}
              disabled={loading || !email}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <p className="text-center text-sm text-gray-500">
              Remembered your password?{" "}
              <Link
                href="/login"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
