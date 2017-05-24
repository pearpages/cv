import React from 'react';
import TitleWithImage from '../title-with-image';
import './index.scss';

export default function Education(props) {

    return (
        <div>
            <ul className="no-decoration">
                {props.data.map((data, i) => {
                    return (
                        <li key={i}>
                            <TitleWithImage data={{
                                icon: 'graduation-cap',
                                imageFile: data.image,
                                line1: data.description,
                                line2: data.name,
                                url: data.url
                            }} />
                        </li>
                    );
                })}
            </ul>
        </div>);

}