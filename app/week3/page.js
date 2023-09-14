import ItemList from "./item-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl">My Shopping List</h1>
      </div>
      <br />
      <div className="items-left grid grid-cols-3">
        {" "}
        <ItemList />
      </div>
    </main>
  );
}
