export default function Sidebar() {
  return (
    <aside className="border-r border-zinc-800 p-6">
      <h2 className="text-2xl font-bold mb-8">
        Meghix Learn
      </h2>

      <nav className="space-y-3">
        <div className="p-3 rounded-xl bg-zinc-800">
          Dashboard
        </div>

        <div className="p-3 rounded-xl">
          Courses
        </div>

        <div className="p-3 rounded-xl">
          Analytics
        </div>

        <div className="p-3 rounded-xl">
          Settings
        </div>
      </nav>
    </aside>
  );
}