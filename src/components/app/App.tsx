import { useState } from "react";
import Form from "../form/Form";
import Logo from "../logo/Logo";
import PackingList from "../packingList/PackingList";
import Stats from "../stats/Stats";
import ItemAdd from "../../types/ItemAdd";

function App() {
  const [items, setItems] = useState<ItemAdd[]>([]);

  function handleAddItems(item: ItemAdd) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want delete all itmes?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
