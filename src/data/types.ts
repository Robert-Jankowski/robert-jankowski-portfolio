export interface Data {
    projects: Project[],
    skills: Skills,
    welcome: Welcome,
    about: string[]
}

export type Project = {
    name: string;
    technologies: string;
    url: string;
    image: string;
    categories: String[]
}

export type Projects = Project[]

export type Skill = {
    name: string;
    value: 1 | 2 | 3 | 4 | 5;
}

export type Skills = {
    programming: Skill[],
    language: Skill[],
    soft: Skill[]
}

export type Welcome = {
    textOne: string,
    name: string
    textTwo: string,
    image: string
}