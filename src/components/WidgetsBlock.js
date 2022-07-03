import React from 'react';
import WidgetCards from "./WidgetCards.js";
import Widget from "./Widget.js";

/**
 * Вывод блока виджетов
 *
 */

export default function WidgetsBlock(props) {
  return (
    <WidgetCards>
      <Widget type="Погода"/>
      <Widget type="Посещаемое"/>
      <Widget type="Карта Германии"/>
      <Widget type="Телепрограмма"/>
      <Widget type="Эфир"/>
    </WidgetCards>
  );
}
