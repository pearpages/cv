import json from '../data.json';
import RecommendationsMapper from './recommendations-mapper';
const data = json.experience;

let periods;

export default class ExperienceMapper { }

ExperienceMapper.getPeriods = function () {

    if(periods === undefined){
        periods = _mapPeriods();
    }

    return periods;
};

function _mapPeriods() {
    return data.periods.map((period) => {
        period.employers = period.employers.map((id) => {
            return _makeEmployerObject(period.title, data.employers.find((employer) => employer.id === id), 'terminal');
        });

        if (period.recommendations) {
            period.recommendations = _mapRecomendations(period.recommendations);
        }
        return period;
    });
}

function _mapRecomendations(recommendations) {
    return recommendations.map((id) => {
        return RecommendationsMapper.getRecommendation(id);
    });
}

function _makeEmployerObject(title, employer, icon) {
    return {
        id: employer.id,
        icon: icon,
        imageFile: employer.image,
        line1: title,
        line2: employer.name,
        url: (employer.url) ? employer.url : null
    };
}