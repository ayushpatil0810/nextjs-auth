"use client";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = React.useState(null);

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get("/api/users/profile");
      setProfile(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch profile!");
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f] px-4">
      <Toaster />
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl text-center">
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
          U
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400 text-sm">This is the profile page.</p>

        <h2>
          {profile === null ? (
            "No profile data available"
          ) : (
            <Link href={`/profile/${profile._id}`}>{profile.username}</Link>
          )}
        </h2>

        <button
          onClick={fetchProfile}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Profile
        </button>

        <button
          onClick={logout}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
