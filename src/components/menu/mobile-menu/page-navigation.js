import React from 'react';
import './page-navigation.scss';

export default function PageNavigation(props) {

    function menu() {
        return (<nav>
            <ul className="navbar-nav">
                {props.anchors.map((v) => {
                    return (<li className="nav-item" key={v.id}>
                        <a
                            className={(props.active === v.id) ? 'active' : ''}
                            onClick={props.setActive(v.id)}
                            href={'#' + v.id}
                        >{v.name}</a>
                    </li>);
                })}
            </ul>
        </nav>);
    }

    return (menu());

}