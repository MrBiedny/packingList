import ItemAdd from "../../types/ItemAdd";

interface StatsProps {
  items: ItemAdd[];
}

function Stats({ items }: StatsProps) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🛅</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything! You are ready to go! 🛫"
          : `📦 You have ${numItems} items on your list and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
