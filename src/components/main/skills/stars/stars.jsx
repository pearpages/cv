import React from 'react';
const maxStars = 5;

export default function Stars(props) {

    return (
        <div>
            <div>{props.name}</div>
            <div>
                {Stars.renderFullStars(props.value)}
                {Stars.renderHalfStars(props.value)}
                {Stars.renderEmptyStars(props.value)}
            </div>
        </div>);
}

Stars.renderFullStars = function (stars) {
    let res = [];
    for (let i = 1; i <= stars; i++) {
        res.push((<span key={i} className="fa fa-star"></span>));
    }
    return res;
}

Stars.renderHalfStars = function (stars) {
    if (stars % 1 === 0.5) {
        return <span className="fa fa-star-half-o"></span>
    } else {
        return null;
    }

}

Stars.renderEmptyStars = function (stars) {
    const value = Math.floor(maxStars - stars);
    let res = [];
    for (let i = 1; i <= value; i++) {
        res.push((<span key={i} className="fa fa-star-o"></span>));
    }
    return res;
}