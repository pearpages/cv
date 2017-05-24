import React from 'react'
import MobileMenu from './mobile-menu';
import DesktopMenu from './desktop-menu';
import jump from 'jump.js';
import GoBottom from './go-bottom';
import {getNextAnchorElement,findActiveAnchor,isDocumentBottom} from '../../utils';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bottom: false,
            anchors: this.props.anchors,
            collapse: true,
            active: 'summary'
        };

        this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
        this.setActive = this.setActive.bind(this);
        this.updateActiveElmentByScrollPosition = this.updateActiveElmentByScrollPosition.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.updateActiveElmentByScrollPosition);
        const hash = window.location.hash.substr(1);
        if(hash !== this.state.active) {
            this.setState({active: hash});
        }
    }

    componentWillUnmount() {
        window.addRemoveListener("scroll", this.updateActiveElmentByScrollPosition);
    }

    updateActiveElmentByScrollPosition(event) {
        const anchors = this.props.anchors[this.props.size];
        let id = findActiveAnchor(anchors);
        if(this.state.active !== id && id !== '') {
            this.setState({active: id,bottom: isDocumentBottom(350)});
        } else {
             this.setState({bottom: isDocumentBottom(350)});
        }
    }

    handleMobileMenuClick(event) {
        this.setState({ collapse: !this.state.collapse });
    }

    setActive() {
        return (anchor) => {
            return (event) => {
                event.preventDefault();
                this.setState({ active: anchor, collapse: true });
                jump('#' + anchor,300);
                window.location.hash = anchor;
            };
        };
    }

    handleGoBottomClick () {
        jump(getNextAnchorElement(),{duration:300});
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
                    handleBurguerClick={this.handleMobileMenuClick}
                />
                :
                <DesktopMenu
                    name={this.props.name}
                    anchors={this.state.anchors.desktop}
                    setActive={this.setActive()}
                    active={this.state.active}
                />
                }
                <GoBottom bottom={this.state.bottom} handleOnClick={this.handleGoBottomClick}/>
            </div>
        );
    }
}