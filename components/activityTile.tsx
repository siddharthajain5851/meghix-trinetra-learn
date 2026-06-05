export default function ActivityTile() {
  return (
    <section className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800">
      <h2 className="font-semibold mb-4">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {[...Array(21)].map((_, index) => (
          <div
            key={index}
            className="h-6 rounded bg-green-500/50"
          />
        ))}
      </div>
    </section>
  );
}