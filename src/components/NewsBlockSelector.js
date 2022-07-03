import React from 'react';

/**
 * Вывод меню блока новостей
 *
 */

 export default function NewsBlockSelector() {
  return (
    <div className="NewsBlockSelector">
      <a href="#">Сейчас в СМИ</a>
      <a href="#">в Германии</a>
      <a href="#">Рекомендуем</a>
      <div>31 июля, среда 02:32</div>
    </div>
  );
}