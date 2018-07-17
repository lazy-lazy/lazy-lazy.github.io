import React from 'react';
import './Banner.less';
export default function Banner(props) {
  return (
    <section className="banner">
      <div className="banner-mask">
        <div className="banner-content">
          <h1>懒懒的菜园地</h1>
          <p>闲来无事，利用Git Pages搭建一个自己的小博客</p>
          <p>更新全看心情</p>
        </div>
      </div>
    </section>
  )
}