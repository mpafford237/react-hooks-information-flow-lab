import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

//Create a `Header` component by refactoring the `<header>` element out of the
//`App` component. Clicking on the `<button>` inside of the `Header` component
//should still toggle dark mode on and off.

//You will need to pass a _callback function_ as a prop called `onDarkModeClick`
//to the `Header` component in order for the test to pass.

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
