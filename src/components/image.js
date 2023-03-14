import React from 'react';

const HoshiHoshi = ({ href, hrefPreview }) => {
  const onImageClick = () => {
    window.open(`../screencaps/${href}` ,'new');
  }

  return (
    <a
      href={`../screencaps/${href}`}
      onClick={onImageClick}
      target="_blank"
    >
      <img src={`../screencaps/${hrefPreview}`} alt=""/>
    </a>
  )
}

export default HoshiHoshi;
