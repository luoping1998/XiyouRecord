import React, {Fragment} from 'react';
import './index.less';

interface DetailsProps {
  text?: string;
  imgs: string[];  
}

export default function Details(props: DetailsProps) {
  const { text, imgs } = props;
  const len = imgs.length;
  if(!text && !len) {
    return null;
  }

  let node = null;
  if(len === 1) {
    node = (
      <div className="xiyou-record-actitem-imgs">
        <img className="xiyou-record-actitem-img-only" src={imgs[0]} />
      </div>
    );
  }else {
    let res = toNarr(imgs, 3);
    node = res.map((urls, index) => {
      const arr = urls.map(url => <div key={url} className="xiyou-record-actitem-img" style={{backgroundImage: `url(${url})`}} />)
      return <div className="xiyou-record-actitem-imgs" key={index}>{arr}</div>
    });
  }

  return (
    <div className="xiyou-record-actitem-details">
      {
        text &&
        <div className="xiyou-record-actitem-rich">
          {text}
        </div>
      }
      {
        len && 
        <div className="xiyou-record-actirem-images">
          {node}
        </div>
      }
    </div>
  );
}

function toNarr(arr, n) {
  let res = [];
  while(arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
}