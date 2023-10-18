import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <Header />
      <Input setItemsState={setItems} />
      <List itemsState={items} setItemsState={setItems} />
    </div>
  );
}

function Header() {
  return <h3>What do you need for your trip?</h3>;
}

function Input({ setItemsState }) {
  const [newItem, setNewItem] = useState("");

  function handleAddItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItemsState((oldList) => [...oldList, item]);
    setNewItem("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

function List({ itemsState, setItemsState }) {
  function handleDeleteItem(id) {
    const newArray = itemsState.filter((item) => item.id !== id);

    setItemsState(newArray);
  }

  return (
    <ul>
      {itemsState.map((item) => (
        <li key={item.id}>
          {item.value}
          <button onClick={() => handleDeleteItem(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
