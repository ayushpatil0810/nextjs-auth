"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      
      setLoading(true);

      const response = await axios.post("/api/users/signup", user);

      console.log("Signup response:", response.data);

      if (response.data.success) {
        toast.success("Signup successful! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        toast.error(response.data.message || "Signup failed. Please try again.");
      }
    }
    catch (error: any) {
      toast.error("Signup failed. Please try again.");
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{loading ? "Signing up..." : "Signup"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="border border-gray-300 rounded-md p-2 mb-4"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter your username"
      />

      <label htmlFor="email">Email</label>
      <input
        className="border border-gray-300 rounded-md p-2 mb-4"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter your email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="border border-gray-300 rounded-md p-2 mb-4"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter your password"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onSignup}
      >
        {buttonDisabled ? "Please fill all fields" : "Signup"}
      </button>
      <Link href="/login" className="mt-4 text-blue-500 hover:underline">
        Already have an account? Login
      </Link>
    </div>
  );
}
