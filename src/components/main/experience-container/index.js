import React from 'react';
import './index.scss';
import ContainerWithTitle from '../../shared/container-with-title'

export default function ExperienceContainer(props) {

    return (
        <div id={props.id} className={"row anchor experience-container"+(props.visible ? ' ready' : '')}>
            <div className="col-md-12">
                <ContainerWithTitle hidden={false} size="h2" icon="chevron-circle-right" name={props.name}>
                    {props.children}
                </ContainerWithTitle>
            </div>
        </div>
    );
}