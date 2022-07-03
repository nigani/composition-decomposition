import React from "react";
import NewsBlock from "./components/NewsBlock.js";
import SearchBlock from "./components/SearchBlock.js";
import WidgetsBlock from "./components/WidgetsBlock.js";
import "./App.css";

/**
 * Вывод главной страницы
 *
 */

 export default function App() {
  return (
    <div className="App">
      <NewsBlock />
      <SearchBlock />
      <WidgetsBlock />
    </div>
  );
}
