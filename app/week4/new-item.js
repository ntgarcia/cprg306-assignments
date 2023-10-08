"use client";
import React, { useState } from "react";

export default function NewItem() {
    const [name, setName]= useState("");
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
        setAlert(true);

        // Reset the state variables to their initial values.
        setName("");
        setQuantity("1");
        setCategory("Produce");
    };

    return {

    };
}