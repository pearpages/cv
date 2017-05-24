import React from 'react';

export default function Picture(props) {

    return (<div id="picture" className={"row profile " + (props.mobile ? "anchor" : '') + (props.visible ? " ready" : "")}  >
        <div className={"col-md-12 " + (props.mobile === true ? 'mobile-picture' : null)}>
            <img id="profile-picture" className="img-fluid center-block" src="media/pere-pages.jpg" alt="Pere Pages" />
        </div>
    </div>);

}