import NewItem from "./new-item.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <br />
      <div>
        <NewItem />
      </div>
    </main>
  );
}
