import React from 'react';
import ContainerWithTitle from '../../../shared/container-with-title';
import ExternalLink from '../../../shared/external-link'

import './index.scss'

export default function Projects(props) {

    return ((props.projects) ? <ContainerWithTitle hidden={true} size="h3" name="Projects" icon="code-fork" >{props.projects.map( (p,i) => {
        return (
            <div key={i} className="project">
                <h4 className="name">{p.name}</h4>
                <div className="description">{(p.description) ? p.description : null}</div>
                {(p.url) ? <ExternalLink url={p.url} >{p.url}</ExternalLink> : null}
            </div>
        )
    })}</ContainerWithTitle>: null);

}
