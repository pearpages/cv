import React from 'react';

export default class Stars extends React.Component {

    static maxStars() {
        return 5;
    }

    renderFullStars(stars) {
        let res = [];
        for(let i = 1; i <= stars; i++) {
            res.push((<span key={i} className="fa fa-star"></span>));
        }
        return res;
    }

    renderEmptyStars(stars) {
        const value = Stars.maxStars() - stars;
        let res = [];
        for(let i = 1; i <= value; i++) {
            res.push((<span key={i} className="fa fa-star-o"></span>));
        }
        return res;
    }

    render() {
        const data = this.props.data;
        return (<div className={data.class}>
            <div>{data.name}</div>
            <div>
                {this.renderFullStars(data.stars)}
                {this.renderEmptyStars(data.stars)}
            </div>
        </div>);
    }
}