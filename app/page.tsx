export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Vaanya!</h1>
      <p className="text-xl font-roboto-mono">
        Welcome to my portfolio built with Next.js, Tailwind CSS, and TypeScript.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Contact Me
      </button>
    </main>
  );
}
