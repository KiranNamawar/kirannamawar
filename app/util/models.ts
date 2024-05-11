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

export class SkillNameAndLogo {
    constructor(
        public _id: string,
        public name: string,
        public logo: string,
    ) {}
}

export interface ShortSkill {
    skillName: string;
    skillId: string;
    subSkills: string[];
    resources: { name: string; url: string }[];
}

export class RecentSkill {
    constructor(
        public _id: number,
        public skills: ShortSkill[],
    ) {}
}

export class RecentSubSkills {
    constructor(
        public _id: string,
        public date: number,
        public subSkills: string[],
        public resources: { name: string; url: string }[],
    ) {}
}
