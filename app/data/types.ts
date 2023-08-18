import { data } from '~/data/portfolio';

export type About = typeof data.about;
export type Experience = typeof data.experience;
export type Education = typeof data.education;
export type Projects = typeof data.projects;
export type Project = Projects[number];
export type Technologies = typeof data.technologies;
export type Technology = Technologies[number];
export type Skill = typeof data.skills;
