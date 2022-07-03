import React from 'react';
import NewsBlockSelector from './NewsBlockSelector.js';
import NewsBlockList from './NewsBlockList.js';
import NewsBlockAd from './NewsBlockAd.js';

/**
 * Вывод блока новостей
 *
 */

export default function NewsBlock(props) {
  return (
    <div className="NewsBlock">
      <div>
        <NewsBlockSelector />
        <NewsBlockList />
      </div>
      <div>
        <NewsBlockAd />
      </div>
    </div>
  );
}
