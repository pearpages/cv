import React from 'react'
import MobileMenu from './mobile-menu';
import DesktopMenu from './desktop-menu';
import jump from 'jump.js';
import GoBottom from './go-bottom';
import {getNextAnchorElement} from '../../utils';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchors: this.props.anchors,
            collapse: true,
            active: 'summary'
        };

        this.handleClick = this.handleClick.bind(this);
        this.setActive = this.setActive.bind(this);
        this.updateScrollPosition = this.updateScrollPosition.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.updateScrollPosition);
        const hash = window.location.hash.substr(1);
        if(hash !== this.state.active) {
            this.setState({active: hash});
        }
    }

    componentWillUnmount() {
        window.addRemoveListener("scroll", this.updateScrollPosition);
    }

    updateScrollPosition(event) {
        const anchors = this.props.anchors[this.props.size];
        let res = 99999999;
        let id = '';
        anchors.forEach( anchor => {
            const el = document.getElementById(anchor.id);
            const pos = el.getBoundingClientRect();
            if(pos.top <= 20 && pos.bottom > 0 && pos.top < res) {
                res = pos;
                id = anchor.id;
            }
        });
        if(this.state.active !== id && id !== '') {
            this.setState({active: id});
        }
    }

    handleClick(event) {
        this.setState({ collapse: !this.state.collapse });
    }

    setActive() {
        return (anchor) => {
            return (event) => {
                event.preventDefault();
                this.setState({ active: anchor, collapse: true });
                jump('#' + anchor);
                window.location.hash = anchor;
            };
        };
    }

    handleOnClick () {
        jump(getNextAnchorElement());
    }

    render() {
        return (
            <div>
                {(this.props.size === 'mobile') ?
                <MobileMenu
                    anchors={this.state.anchors.mobile}
                    active={this.state.active}
                    collapse={this.state.collapse}
                    setActive={this.setActive()}
                    handleClick={this.handleClick}
                />
                :
                <DesktopMenu
                    name={this.props.name}
                    anchors={this.state.anchors.desktop}
                    setActive={this.setActive()}
                    active={this.state.active}
                />
                }
                <GoBottom handleOnClick={this.handleOnClick}/>
            </div>
        );
    }
}