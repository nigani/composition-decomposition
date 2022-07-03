import React from 'react';

/**
 * Вывод строки поиска
 *
 */

export default function SearchBlockExecutor(props) {
  return (
    <div className="SearchBlockExecutor">
      <div className="SearchBlockExecutorInput">
        <label>Яндекс</label>
        <input type="text" defaultValue="Строка поиска" />
        <button>Найти</button>
      </div>
      <label className ="SearchBlockExecutorSubtitle">Найдется все. Например, <a href="#">фаза луны сегодня</a></label>
      </div>
  );
}
