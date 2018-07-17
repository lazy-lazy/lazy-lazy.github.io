import React from 'react';
import './List.less';
export default function List(props) {
  const image = require('../../images/' + props.image);
  return (
    <li className="article_li">
      <img src={image} alt={props.title} />
      <div className="article_right">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </li>
  );
}