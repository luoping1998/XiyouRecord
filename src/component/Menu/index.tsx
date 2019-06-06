import React, { useEffect, Fragment } from 'react';
import './index.less';

interface MenuItem {
  name: number;
  text?: string;
  component: () => JSX.Element;
  render?: () => Element;
}

interface MenuProps {
  options: MenuItem[];
  activeName: number;
  activeClassName?: string;
  onChangeActive: (val) => void
}

export default function Menu(props: MenuProps) {
  const { options, activeName, activeClassName, onChangeActive } = props;

  const route = options.map(item => item.name === activeName ? item.component() : null);

  const links = options.map(item => {
    const { text, name, render } = item;
    const node = render ? render() : text;
    let cla = "xiyou-record-menu-tab "
    if(activeName === name) {
      cla += activeClassName
    }
    return (
      <div key={name} className={cla} onClick={() => onChangeActive(name)}>{node}</div>
    );
  });
  return (
    <div className="xiyou-record-menu">
      <div className="xiyou-record-menu-tabs">{links}</div>
      <Fragment>{route}</Fragment>
    </div>
  )
}