import React from 'react';
import ContainerWithTitle from '../../../shared/container-with-title';
import Recommendation from '../recommendation'

export default function Recommendations(props) {

    let recommendations = Recommendations.mapRecommendations(props.data);
    return (recommendations) ?
        <ContainerWithTitle hidden={true} size="h3" name="Recommendations" icon="handshake-o">{recommendations}</ContainerWithTitle> : null

}

Recommendations.mapRecommendations = function (data) {
    const re = data.recommendations;
    if (re) {
        return re.map((re) => {
            return <Recommendation key={re.id} data={re} />
        });
    }
    return false;
}