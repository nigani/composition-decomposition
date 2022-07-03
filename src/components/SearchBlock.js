import React from 'react';
import SearchBlockSelector from "./SearchBlockSelector.js";
import SearchBlockExecutor from "./SearchBlockExecutor.js";
import SearchBlockAd from "./SearchBlockAd.js";

/**
 * Вывод блока поиска
 *
 */

export default function SearchBlock(props) {
  return (
    <div className="SearchBlock">
      <SearchBlockSelector />
      <SearchBlockExecutor />
      <SearchBlockAd />
    </div>
  );
}
