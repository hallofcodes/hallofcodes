export const dynamic = "force-static";

export default function UpPage() {
  return (
    <main className="bg-gray-950 text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col items-start justify-center gap-8 px-6 py-16">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            System Status
            <span className="block text-emerald-400">Application Up.</span>
          </h1>

          <p className="max-w-2xl text-base text-gray-300 md:text-lg">
            Everything is running normally. All systems are operational.
          </p>

          <div className="grid w-full max-w-3xl grid-cols-1 gap-4 text-sm text-gray-300 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">Status</span>
              </div>

              <div className="text-emerald-400">UP</div>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
              <div className="mb-2 font-semibold text-white">Environment</div>

              <div className="text-gray-400">{process.env.NODE_ENV}</div>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
              <div className="mb-2 font-semibold text-white">Timestamp</div>

              <div className="font-mono text-gray-400">
                {new Date().toISOString()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
