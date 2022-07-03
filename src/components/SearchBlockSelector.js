import React from 'react';

/**
 * Вывод меню блока поиска
 *
 */

export default function SearchBlockSelector(props) {
  return (
    <div className="SearchBlockSelector">
      <a href="#">Видео</a>
      <a href="#">Картинки</a>
      <a href="#">Новости</a>
      <a href="#">Карты</a>
      <a href="#">Маркет</a>
      <a href="#">Переводчик</a>
      <a href="#">Эфир</a>
      <a href="#">Еще</a>
    </div>
  );
}
