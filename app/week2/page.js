import StudentInfo from "../StudentInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-34">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl">My Shopping List</h1>

        <div>
          {" "}
          <StudentInfo />
        </div>
      </div>
    </main>
  );
}
