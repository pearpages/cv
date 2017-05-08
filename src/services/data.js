import data from '../data.json';
import ExperienceMapper from './experience-mapper';

export default class Data {

    getSummary() {
        return data.summary;
    }

    getSkills() {
        return data.skills;
    }

    getEducation() {
        return data.education;
    }

    getCommunity() {
        return data.community;
    }

    getContact() {
        return data.contact;
    }

    getExperience() {
        return ExperienceMapper.getPeriods();
    }
}