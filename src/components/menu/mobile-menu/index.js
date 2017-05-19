import React from 'react';
import './index.scss';

export default function MobileMenu(props) {

    function getLinkClasses(anchor) {
        return (props.active === anchor) ? 'nav-link active' : 'nav-link';
    }

    function getMenuClasses() {
        let classes = 'navbar fixed-top navbar-toggleable-sm navbar-light bg-faded hidden-md-up';
        return (!props.collapse) ? classes + ' nav-open' : classes;
    }

    function menu() {
        return (<div className={props.collapse ? 'collapse navbar-collapse' : 'navbar-collapse'} id="navbarNav">
            <ul className="navbar-nav">
                {props.anchors.map((v) => {
                    return (<li className="nav-item" key={v.id}>
                        <a
                            className={getLinkClasses(v.id)}
                            onClick={props.setActive(v.id)}
                            href={'#' + v.id}
                        >{v.name}</a>
                    </li>);
                })}
            </ul>
        </div>);
    }

    return (<nav className={getMenuClasses()}>
        <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={props.handleClick}
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="javascript:void(0)">&nbsp;</a>
        {menu()}
    </nav>);
}