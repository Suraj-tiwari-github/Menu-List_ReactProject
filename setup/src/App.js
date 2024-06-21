import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";


const allCategories = [
  "all",
  ...new Set(
    items.map(
      (item) =>
        //* here we are using set data structure to get only the unique values among the duplicates.
        //* also we need a category called 'all', we need to assign that in the category.
        item.category
    )
  ),
];


function App() {
  const [menuItems, setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    if(category==='all'){
      setMenuItems(items);
      return;
    }
    const newItems=items.filter((item)=>
      item.category===category
    );
    // console.log(newItems);
    setMenuItems(newItems)
  }
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
