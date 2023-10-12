export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-neutral-950 rounded-xl p-8 m-5 space-y-3">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>quantity: {quantity}</p>
      <p>category: {category}</p>
    </div>
  );
}
