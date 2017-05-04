import React from 'react';
import './menu.scss';

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
                <li className="nav-item"><a onClick={this.setActive('summary')} className={this.getLinkClasses('summary')} href="#summary">Summary</a></li>
                <li className="nav-item"><a onClick={this.setActive('skills')} className={this.getLinkClasses('skills')} href="#skills">Skills</a></li>
                <li className="nav-item"><a onClick={this.setActive('education')} className={this.getLinkClasses('education')} href="#education">Education</a></li>
                <li className="nav-item"><a onClick={this.setActive('experience')} className={this.getLinkClasses('experience')} href="#experience">Experience</a></li>
                <li className="nav-item"><a onClick={this.setActive('picture')} className={this.getLinkClasses('picture')} href="#picture">Picture</a></li>
                <li className="nav-item"><a onClick={this.setActive('contact')} className={this.getLinkClasses('contact')} href="#contact">Contact</a></li>
                <li className="nav-item"><a onClick={this.setActive('follow-me')} className={this.getLinkClasses('follow-me')} href="#follow-me">Follow Me</a></li>
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