export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-3 gap-6">
        
        <div className="col-span-2 h-40 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="h-40 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="h-40 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="col-span-2 h-56 rounded-3xl bg-zinc-900 animate-pulse" />
      </div>
    </main>
  );
}