import type { data } from "~/data/portfolio";

export type About = typeof data.about;
export type Experience = typeof data.experience;
export type Education = typeof data.education;
export type Certifications = typeof data.certifications;
export type Certification = Certifications[number];
export type Project = {
	id: string;
	name: string;
	date: string; // ISO
	image: {
		src: string;
		type: "image/png" | "image/jpg" | "image/svg+xml" | "image/webp";
		height?: number;
		width?: number;
		classes?: string;
		class?: string;
	};
	sources?: string[];
	technologies: string[];
	hasArticle?: boolean;
	description: string;
	link?: string;
};
export type Projects = Project[];
export type Technologies = typeof data.technologies;
export type Technology = Technologies[number];
export type Skill = typeof data.skills;
