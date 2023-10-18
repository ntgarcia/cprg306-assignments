"use client";
import React, { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("Produce");
  const [item, setItem] = useState(null);

  const handleSubmit = (event) => {
    // Prevent the form's default submission behavior.
    event.preventDefault();

    // Create an item object with the current values of name, quantity, and category.
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    // Log the item object to the console.
    console.log(item);

    // Display an alert with the current state of name, quantity, and category.
    alert(
      "Item Added: \n Name: " +
        item.name +
        "\n Quantity: " +
        item.quantity +
        "\n Category: " +
        item.category
    );

    // Reset the state variables to their initial values.
    setName("");
    setQuantity("1");
    setCategory("Produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <section>
      <div></div>
      <div className="grid place-content-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row w-1/3 gap-3"
        >
          <input
            required
            onChange={handleNameChange}
            value={name}
            placeholder="Product Name"
            className="bg-slate-300 dark:bg-neutral-900 rounded-xl p-3 flex-auto"
          />
          <input
            required
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="99"
            onChange={handleQuantityChange}
            value={quantity}
            className="bg-slate-300 dark:bg-neutral-900 rounded-xl p-3 flex-auto"
          />
          <select
            required
            onChange={handleCategoryChange}
            value={category}
            className="bg-slate-300 dark:bg-neutral-900 rounded-xl p-3 w-40 flex-auto"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">
              Frozen Foods
            </option>
            <option value="Canned Goods">
              Canned Goods
            </option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="bg-slate-400 dark:bg-neutral-600 rounded-full p-3 w-10"
          >
            +
          </button>
        </form>
      </div>
    </section>
  );
}
