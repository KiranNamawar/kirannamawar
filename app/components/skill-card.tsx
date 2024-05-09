import Image from 'next/image';
import Link from 'next/link';

export type Skill = {
    _id: string;
    name: string;
    category: string;
    logo: string;
    subSkillsByDate: {
        date: number;
        subSkills: string[];
    };
};


export function SkillCard({ skill } : { skill: Skill }) {
    console.log(skill);
    return (
        <div className="flex">
            <Image src={skill.logo} alt={skill.name} width={100} height={100} />
            <div>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
                <div className="flex">
                    {skill.subSkillsByDate.subSkills.map((subSkill) => (
                        <p key={subSkill}>{subSkill}</p>
                    ))}
                </div>
                <Link href={`/skills/${skill._id}`}>See Details</Link>
            </div>
        </div>
    );
}
