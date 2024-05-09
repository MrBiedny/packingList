import ItemAdd from "../../types/ItemAdd";

interface ItemProps {
  item: ItemAdd;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} - {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
