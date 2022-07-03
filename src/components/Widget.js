import React from 'react';

/**
 * Вывод виджета
 *
 * @param {object} props
 * @param {string} props.type - тип виджета, он же заголовок
 */

export default function Widget(props) {
  return (
    <div className="Widget">
      <b>{props.type}</b><br/>
      {props.type==="Погода"
      ? <>
          [Картинка] +17 Утром +17 Вечером +20
        </>
      : props.type==="Посещаемое"
      ? <>
          Недвижимость - о сталинках<br/>
          Маркет - люстры и светильники<br/>
          Авто.ру - привод 4х4 до 500 000
        </>
      : <>
          Содержание виджета строка 1<br/>
          Содержание виджета строка 2<br/>
          Содержание виджета строка 3
        </>
      }
    </div>
  );
}
