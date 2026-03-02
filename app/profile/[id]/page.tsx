export default async function UserProfile({ params }: any) {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <hr />
      <p>This is the profile page for user ID: </p>
      <span className="font-bold bg-amber-600 rounded p-2">{id}</span>
    </div>
  );
}
