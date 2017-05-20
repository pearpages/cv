import React from 'react'
import './index.scss';

export default class GoBottom extends React.Component {

    render () {
        return (<div onClick={this.props.handleOnClick} id="go-bottom"><span className="fa fa-angle-down"></span></div>);
    }
}