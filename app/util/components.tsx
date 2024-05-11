import Image from 'next/image';
import Link from 'next/link';
import { getSkillList, getSkillLogo } from './data';
import { ShortSkill, SkillNameAndLogo } from './models';

export async function SkillBadges() {
    const skillList = await getSkillList();
    return (
        <div>
            {skillList?.map((skillItem) => (
                <div key={skillItem._id}>
                    <Link href={`/skills/${skillItem._id}`}>
                        <Image
                            src={skillItem.logo}
                            alt={skillItem.name}
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export function SkillList({ skillList }: { skillList: SkillNameAndLogo[] }) {
    return (
        <>
            <h2>Skills</h2>
            <div className="flex flex-col">
                {skillList.map((skill) => (
                    <Link
                        href={`/skills/${skill._id}`}
                        key={skill._id}
                        className="m-5"
                    >
                        {skill.name}
                    </Link>
                ))}
            </div>
        </>
    );
}

export async function SkillCard({ skill }: { skill: ShortSkill }) {
    const logo = (await getSkillLogo(skill.skillId)) || { logo: '' };
    return (
        <div key={skill.skillId}>
            <Image
                src={logo?.logo}
                alt={skill.skillName}
                width={50}
                height={50}
            />
            <h4>{skill.skillName}</h4>
            <ul>
                {skill.subSkills.map((subSkill) => (
                    <li key={subSkill}>{subSkill}</li>
                ))}
            </ul>
            <ul>
                {skill.resources.map((resource) => (
                    <li key={resource.url}>
                        <Link href={resource.url}>{resource.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
