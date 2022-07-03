import React from 'react';
import NewsBlockItem from './NewsBlockItem.js';

/**
 * Вывод списка новостей новостей
 *
 */

export default function NewsBlockList(props) {
  return (
    <div className="NewsBlockList">
      <NewsBlockItem icon="https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square" refNews="#" textNews="Новость 1" />
      <NewsBlockItem icon="https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square" refNews="#" textNews="Новость 2" />
      <NewsBlockItem icon="https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square" refNews="#" textNews="Новость 3" />
      <NewsBlockItem icon="https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square" refNews="#" textNews="Новость 4" />
      <NewsBlockItem icon="https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square" refNews="#" textNews="Новость 5" />
    </div>
  );
}