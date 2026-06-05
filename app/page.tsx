import Sidebar from "@/components/sidebar";
import HeroTile from "@/components/heroTile";
import CourseCard from "@/components/courseCard";
import ActivityTile from "@/components/activityTile";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <div className="text-red-500 p-6">
        {error.message}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <HeroTile />

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              icon_name={course.icon_name}
            />
          ))}

          <ActivityTile />
        </div>
      </section>
      </main>
  );
}