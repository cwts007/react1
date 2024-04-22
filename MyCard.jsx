import React from 'react';
import Tags from './Tags';

function MyCard({ image, name, description }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <Tags text="texto_del_tag" color="color_del_tag" />
    </div>
  );
}

export default MyCard;
