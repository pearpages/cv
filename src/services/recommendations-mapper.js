import data from '../data.json';
const colleaguesJson = data.experience.colleagues;
const recommendationsJson = data.experience.recommendations;

export default class RecommendationsMapper {}

let recommendations;

RecommendationsMapper.getRecommendation = function (id) {
    if(recommendations === undefined) {
        recommendations = _mapRecomendations(recommendationsJson,colleaguesJson);
    }
    return recommendations.find( (e) => e.id === id);
};

function _mapRecomendations(recommendations, colleagues) {
    return recommendations.map((re) => {
        re.colleague = colleagues.find((col) => col.id === re.colleague);
        return re;
    });
}