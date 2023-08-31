import { data } from '~/data/portfolio';

export type About = typeof data.about;
export type Experience = typeof data.experience;
export type Education = typeof data.education;
export type Certifications = typeof data.certifications;
export type Certification = Certifications[number];
export type Projects = typeof data.projects;
export type Project = Projects[number];
export type Technologies = typeof data.technologies;
export type Technology = Technologies[number];
export type Skill = typeof data.skills;

export type ContextHack = { context: { [key: string]: any } };
