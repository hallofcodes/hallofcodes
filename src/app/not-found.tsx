import Link from "next/link";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <main className="bg-gray-950 text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col items-start justify-center gap-8 px-6 py-16">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Page Not Found
            <span className="block text-blue-400">404 Error.</span>
          </h1>

          <p className="max-w-2xl text-base text-gray-300 md:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved somewhere else.
          </p>

          <Link
            href="/"
            className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
