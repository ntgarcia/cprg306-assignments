import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main class="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 class="text-4xl">
          CPRG 306: Web Development 2 - Assignments
        </h1>

        <StudentInfo />

        <Link href="week2">Week 2</Link>
      </div>
    </main>
  );
}
