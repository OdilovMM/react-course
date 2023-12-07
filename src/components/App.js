import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// parent component of all other components
export default function App() {
  // parent component

  //   setting
  const [items, setItems] = useState([]);

  //   adding an item
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  //    deleting item
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //   toggling
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure? You want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      {/* passing functions as props to child components  */}
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




