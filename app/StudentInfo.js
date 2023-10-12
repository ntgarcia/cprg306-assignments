import Link from "next/link";

export default function StudentInfo() {
  return (
    <main className="flex space-x-4 mx-1 my-5 gap-4">
      <h1>Nathan Garcia</h1>
      <h2>CPRG 306 A</h2>
      <Link
        href="https://github.com/ntgarcia/cprg306-assignments"
        className="no-underline hover:underline"
      >
        GitHub Repository
      </Link>
    </main>
  );
}
