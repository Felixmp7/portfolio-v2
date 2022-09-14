import { StaticImageData } from 'next/image';
import htmlIcon from 'public/assets/skills/html.svg';
import reduxIcon from 'public/assets/skills/redux.svg';
import styledIcon from 'public/assets/skills/styled.svg';
import cssIcon from 'public/assets/skills/css.svg';
import axiosIcon from 'public/assets/skills/axios.svg';
import mySQLIcon from 'public/assets/skills/mysql.svg';
import nestIcon from 'public/assets/skills/nest.svg';
import javascriptIcon from 'public/assets/skills/javascript.svg';
import typescriptIcon from 'public/assets/skills/typescript.svg';
import tailwindIcon from 'public/assets/skills/tailwind.svg';
import responsiveIcon from 'public/assets/skills/responsive.svg';
import reactIcon from 'public/assets/skills/react.svg';
import reactNativeIcon from 'public/assets/skills/react-native.svg';
import expoIcon from 'public/assets/skills/expo.svg';
import nextIcon from 'public/assets/skills/next.svg';
import graphqlIcon from 'public/assets/skills/graphql.svg';
import apolloIcon from 'public/assets/skills/apollo.svg';
import reactTestingLibraryIcon from 'public/assets/skills/react-testing-library.png';
import cypressIcon from 'public/assets/skills/cypress.svg';
import nodeIcon from 'public/assets/skills/node.svg';
import expressIcon from 'public/assets/skills/express.svg';
import dockerIcon from 'public/assets/skills/docker.svg';
import mongoIcon from 'public/assets/skills/mongo.svg';
import mongooseIcon from 'public/assets/skills/mongoose.svg';
import firebaseIcon from 'public/assets/skills/firebase.svg';
import gitIcon from 'public/assets/skills/git.svg';
import azureIcon from 'public/assets/skills/azure.svg';
import i18nIcon from 'public/assets/skills/i18n.png';

export enum eSkillFilter {
    mainStack = 'mainStack',
    restOfSkills = 'restOfSkills',
    interestedToLearn = 'interestedToLearn',
}

export type Skill = {
    icon: StaticImageData,
    alt: string,
    filter: eSkillFilter
}

// eslint-disable-next-line import/prefer-default-export
export const skills: Skill[] = [
    { icon: reactIcon, alt: 'React', filter: eSkillFilter.mainStack },
    { icon: typescriptIcon, alt: 'Typescript', filter: eSkillFilter.mainStack },
    { icon: nextIcon, alt: 'Next', filter: eSkillFilter.mainStack },
    { icon: axiosIcon, alt: 'Axios', filter: eSkillFilter.mainStack },
    { icon: tailwindIcon, alt: 'Tailwind CSS', filter: eSkillFilter.mainStack },
    { icon: gitIcon, alt: 'Git', filter: eSkillFilter.mainStack },
    { icon: azureIcon, alt: 'Azure', filter: eSkillFilter.mainStack },
    { icon: reactNativeIcon, alt: 'React Native', filter: eSkillFilter.interestedToLearn },
    { icon: expoIcon, alt: 'Expo', filter: eSkillFilter.interestedToLearn },
    { icon: nodeIcon, alt: 'Node', filter: eSkillFilter.interestedToLearn },
    { icon: mySQLIcon, alt: 'MySQL', filter: eSkillFilter.interestedToLearn },
    { icon: nestIcon, alt: 'Nest', filter: eSkillFilter.interestedToLearn },
    { icon: expressIcon, alt: 'Express', filter: eSkillFilter.interestedToLearn },
    { icon: graphqlIcon, alt: 'GraphQl', filter: eSkillFilter.interestedToLearn },
    { icon: apolloIcon, alt: 'Apollo', filter: eSkillFilter.interestedToLearn },
    { icon: reactTestingLibraryIcon, alt: 'RTL', filter: eSkillFilter.interestedToLearn },
    { icon: cypressIcon, alt: 'Cypress', filter: eSkillFilter.interestedToLearn },
    { icon: dockerIcon, alt: 'Docker', filter: eSkillFilter.interestedToLearn },
    { icon: mongooseIcon, alt: 'Mongoose', filter: eSkillFilter.interestedToLearn },
    { icon: mongoIcon, alt: 'MongoDB', filter: eSkillFilter.interestedToLearn },
    { icon: htmlIcon, alt: 'HTML', filter: eSkillFilter.restOfSkills },
    { icon: cssIcon, alt: 'CSS', filter: eSkillFilter.restOfSkills },
    { icon: javascriptIcon, alt: 'Javascript', filter: eSkillFilter.restOfSkills },
    { icon: responsiveIcon, alt: 'Responsive Design', filter: eSkillFilter.restOfSkills },
    { icon: reduxIcon, alt: 'Redux', filter: eSkillFilter.restOfSkills },
    { icon: styledIcon, alt: 'Styled Components', filter: eSkillFilter.restOfSkills },
    { icon: firebaseIcon, alt: 'Firebase', filter: eSkillFilter.restOfSkills },
    { icon: i18nIcon, alt: 'i18n Translate', filter: eSkillFilter.restOfSkills },
];
