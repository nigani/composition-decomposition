import React from 'react';

/**
 * Вывод строки с новостью
 *
 * @param {object} props - Список виджетов
 * @param {string} props.img - иконка агентства
 * @param {string} props.refNews - ссылка на новость
 * @param {string} props.textNews - текст новости
 */

export default function NewsBlockItem(props) {
  return (
    <label>
      <img src={props.icon} width='16' />
      <a href={props.refNews}>{props.textNews}</a>
      <br/>
    </label>
  );
}