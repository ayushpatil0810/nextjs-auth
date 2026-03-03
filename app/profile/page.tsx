export default function ProfilePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f] px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl text-center">
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
          U
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400 text-sm">This is the profile page.</p>
      </div>
    </div>
  );
}
