import { SignIn } from '@clerk/nextjs'

export default function Page() {
   return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-0 rounded-lg shadow-lg">
        <SignIn />
      </div>
    </div>
  );
}