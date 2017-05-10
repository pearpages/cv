import React from 'react';
import './index.scss';
import jump from 'jump.js';

export default class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
            collapse: true,
            active: 'home'
        };
        this.handleClick = this.handleClick.bind(this);
        this.setActive = this.setActive.bind(this);
    }

    handleClick(event) {
        this.setState({collapse: !this.state.collapse});
    }

    getLinkClasses(anchor) {
        return (this.state.active === anchor ) ? 'nav-link active' : 'nav-link';
    }

    setActive(anchor) {
        return (event) => {
            event.preventDefault();
            this.setState({active: anchor, collapse: true});
            jump('#'+anchor);
            window.location.hash=anchor;
        };
    }

    getMenuClasses() {
        let classes = 'navbar fixed-top navbar-toggleable-sm navbar-light bg-faded hidden-md-up';
        return (!this.state.collapse) ? classes + ' nav-open' : classes;
    }

    menu() {
        return (<div className={this.state.collapse ? 'collapse navbar-collapse' : 'navbar-collapse'} id="navbarNav">
            <ul className="navbar-nav">
                {this.props.data.anchors.map( (v) => {
                    return (<li className="nav-item" key={v.id}>
                        <a onClick={this.setActive(v.id)} className={this.getLinkClasses(v.id)} href={'#'+v.id}>{v.name}</a>
                        </li>);
                })}
            </ul>
        </div>);
    }

    render() {
        return (<nav className={this.getMenuClasses()}>
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                onClick={this.handleClick}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="javascript:void(0)">&nbsp;</a>
            {this.menu()}
        </nav>);
    }
}