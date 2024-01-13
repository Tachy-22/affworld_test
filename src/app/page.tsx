import resetPassword from "@/actions/resend/resetPassword";

export default async function Home() {
 // await resetPassword();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-600">
      <button>Send</button>
    </main>
  );
}
