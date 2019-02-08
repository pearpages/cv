import React from 'react';
import './index.scss';

export default function DesktopMenu(props) {

    const p = props;
    return (
        <div className="desktop-menu no-print">
            <div className="content">
                <div className="left name">{p.name}</div>
                <div className="right">
                    {p.anchors.map((item) => {
                        return <span
                            className={(p.active === item.id) ? 'active' : ''} key={item.id}
                            onClick={props.setActive(item.id)}
                            href={'#' + item.id}
                        >{item.name}</span>
                    })}
                </div>
            </div>
        </div>);

}