import React from 'react';

/**
 * Вывод всех карточек виджетов
 *
 * @param {object} props.children - Список виджетов
 */

export default function WidgetCards(props) {
  return (
    <div className="WidgetsBlock">
      {props.children}
    </div>
  );
}
