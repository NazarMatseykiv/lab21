import { useState } from 'react';

function Task3() {
  const [items, setItems] = useState([
    "Перший елемент",
    "Другий елемент",
    "Третій елемент",
    "Четвертий елемент",
    "П'ятий елемент"
  ]);
  const [showItems, setShowItems] = useState(Array(items.length).fill(true));
  
  const toggleShowItem = (index) => {
    const newShowItems = [...showItems];
    newShowItems[index] = !newShowItems[index];
    setShowItems(newShowItems);
  };
  
  const totalShownItems = showItems.filter(showItem => showItem).length;
  const totalItems = items.length;
  
  return (
    <div>
      <p>Загальна кількість елементів: {totalItems}</p>
      <p>Кількість елементів, що показуються: {totalShownItems}</p>
      {items.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={showItems[index]}
            onChange={() => toggleShowItem(index)}
          />
          {showItems[index] && <p>{item}</p>}
        </div>
      ))}
    </div>
  );
}

export default Task3;
