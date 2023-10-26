"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import React, { useState } from "react";
import itemsData from "./items.json";

export default function Home() {
  // Initialize a state variable (e.g., items) with the data from items.json.
  const [items, setItems] = useState(itemsData);

  // Create an event handler function (e.g., handleAddItem) that adds a new item to items.
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    // display both the NewItem and ItemList components
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl">My Shopping List</h1>
      </div>
      <br />
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
