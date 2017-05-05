import React from 'react';
import TitleWithImage from './title-with-image';

export default class Education extends React.Component {
    render() {
        return (
            <div>
                <ul className="no-decoration">
                    {this.props.data.map( (data,i) => {
                        return (
                            <li>
                                <TitleWithImage data={{
                                    icon: 'graduation-cap',
                                    imageFile: data.image,
                                    line1: data.description,
                                    line2: data.name
                                }} />
                            </li>
                        );
                    })}
                </ul>
            </div>);
    }
}