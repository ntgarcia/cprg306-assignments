import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm grid gap-2">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <div className="flex">
          {" "}
          <Link
            href="week2"
            className="p-5 bg-slate-300 dark:bg-neutral-900 rounded-3xl m-2 w-40 text-center"
          >
            Week 2
          </Link>
          <br />
          <Link
            href="week3"
            className="p-5 bg-slate-300 dark:bg-neutral-900 rounded-3xl m-2 w-40 text-center"
          >
            Week 3
          </Link>
          <br />
          <Link
            href="week4"
            className="p-5 bg-slate-300 dark:bg-neutral-900 rounded-3xl m-2 w-40 text-center"
          >
            Week 4
          </Link>
          <br />
          <Link
            href="week5"
            className="p-5 bg-slate-300 dark:bg-neutral-900 rounded-3xl m-2 w-40 text-center"
          >
            Week 5
          </Link>
          <br />
          <Link
            href="week6"
            className="p-5 bg-slate-300 dark:bg-neutral-900 rounded-3xl m-2 w-40 text-center"
          >
            Week 6
          </Link>
        </div>
      </div>
    </main>
  );
}
