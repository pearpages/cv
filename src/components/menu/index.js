import React from 'react';
import './index.scss';

const links = [{
    name: 'Summary',
    id: 'summary'
},
{
    name: 'Skills',
    id: 'skills'
},
{
    name: 'Education',
    id: 'education'
},
{
    name: 'Experience',
    id: 'experience'
},
{
    name: 'Picture',
    id: 'picture'
},
{
    name: 'Contact',
    id: 'contact'
},
{
    name: 'Community',
    id: 'community'
}];

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
        return () => this.setState({active: anchor, collapse: true});
    }

    getMenuClasses() {
        let classes = 'navbar fixed-top navbar-toggleable-sm navbar-light bg-faded hidden-sm-up';
        return (!this.state.collapse) ? classes + ' nav-open' : classes;
    }

    menu() {
        return (<div className={this.state.collapse ? 'collapse navbar-collapse' : 'navbar-collapse'} id="navbarNav">
            <ul className="navbar-nav">
                {links.map( (v) => {
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