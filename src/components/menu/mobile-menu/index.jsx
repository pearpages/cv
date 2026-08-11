import React from 'react';
import Burguer from './burguer'
import PageNavigation from './page-navigation'

export default function MobileMenu(props) {

    return (
            <div>
                <Burguer collapse={props.collapse} onClick={props.handleBurguerClick}/>
                {(props.collapse !== true) ?
                    <PageNavigation active={props.active} anchors={props.anchors} setActive={props.setActive} />
                :
                    null}
            </div>
        );
}