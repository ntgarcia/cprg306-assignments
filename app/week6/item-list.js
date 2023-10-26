"use client";

// setup item list component
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  // Create a copy of the items prop to avoid mutations
  const copiedItems = [...items];

  // initialize state variable
  const [sortBy, setSortBy] = useState("name");

  // sort the items (using the copiedItems)
  if (sortBy === "name") {
    copiedItems.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sortBy === "category") {
    copiedItems.sort((a, b) => {
      return a.category.localeCompare(b.category);
    });
  }

  return (
    // create sort button
    <div>
      <div className="flex items-center gap-4">
        {" "}
        <h1 className="text-xl">Sort by:</h1>
        <button
          onClick={() => setSortBy("name")}
          className={`p-5 rounded-3xl m-2 w-36 text-center ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-slate-300 dark:bg-neutral-900"
          }
        `}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-5 rounded-3xl m-2 w-36 text-center ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-slate-300 dark:bg-neutral-900"
          }
        `}
        >
          Category
        </button>
      </div>

      <ul className="grid grid-cols-1 w-80">
        {copiedItems.map((data) => (
          <Item
            key={data.id}
            name={data.name}
            category={data.category}
            quantity={data.quantity}
          />
        ))}
      </ul>
    </div>
  );
}
