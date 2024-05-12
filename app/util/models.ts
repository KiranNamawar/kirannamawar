// This file contains all the models used in the application

// Skill Model
export class Skill {
    constructor(
        public _id: string,
        public name: string,
        public logo: string,
        public category: string,
        public tags: string[],
        public resources: { name: string; url: string }[],
    ) {}
}

// SubSkill Model
export class SubSkill {
    constructor(
        public _id: string,
        public date: number,
        public skillId: string,
        public skillName: string,
        public subSkills: string[],
        public resources: { name: string; url: string }[],
    ) {}
}

// SkillNameAndLogo Model
export class SkillNameAndLogo {
    constructor(
        public _id: string,
        public name: string,
        public logo: string,
    ) {}
}

// ShortSkill Model
export interface ShortSkill {
    skillName: string;
    skillId: string;
    subSkills: string[];
    resources: { name: string; url: string }[];
}

// RecentSkill Model
export class RecentSkill {
    constructor(
        public _id: number,
        public skills: ShortSkill[],
    ) {}
}

// RecentSubSkills Model
export class RecentSubSkills {
    constructor(
        public _id: string,
        public date: number,
        public subSkills: string[],
        public resources: { name: string; url: string }[],
    ) {}
}
