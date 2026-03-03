"use client";

import axios from "axios";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [verefied, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const res = await axios.post(`/api/users/verifyEmail`, { token });
      setMessage(res.data.message);
      setVerified(true);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Verification failed");
      setError(true);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    if (urlToken) {
      setToken(urlToken);
    }
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    // improve the ui, suggest the code

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
        {message && (
          <p className={`mb-4 ${error ? "text-red-500" : "text-green-500"}`}>
            {message}
          </p>
        )}
        {verefied && (
          <Link href="/login" className="text-blue-500 hover:underline">
            Go to Login
          </Link>
        )}
        {error && (
          <Link href="/register" className="text-blue-500 hover:underline">
            Go to Register
          </Link>
        )}

        <p className="mt-4 text-sm text-gray-500">Token: {token}</p>
      </div>
    </div>
  );
}
