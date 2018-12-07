// @flow

import React from 'react';

function getColor(index) {
  switch (index) {
    case 0:
      return 'green';
    case 1:
      return 'purple';
    case 2:
      return 'blue';
    default:
      return 'green';
  }
}

type Album = {
  albumId: string,
  photos: [],
  index: number,
};

const Album = ({ albumId, photos, index }: Album) => {
  return (
    <div
      style={{
        border: `1px solid ${getColor(index)}`
      }}
      className="album"
    >
      <span>
        Album {albumId}
      </span>
    </div>
  )
};

export default Album;