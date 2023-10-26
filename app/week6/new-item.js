import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(newItem);

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
      <div className="grid place-content-left m-7">
        <form onSubmit={handleSubmit} className="flex flex-row w-1/3 gap-3">
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
            {/* ... (other options) */}
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
