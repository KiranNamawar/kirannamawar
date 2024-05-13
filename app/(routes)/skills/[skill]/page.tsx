// Purpose: This file is used to render the page for a specific skill.

// Importing External Dependencies
import Image from 'next/image';

// Importing Internal Dependencies
import { getSkill, getSubSkills } from '@/app/util/data';
import { Skill } from '@/app/util/models';
import { SubSkillsCard } from '@/app/util/components';
import externalLinkIcon from '@/public/icon-external-link.png';

// Exporting the Skill Page
export default async function Page({ params }: { params: any }) {
    const skillId = params.skill;
    const skill = (await getSkill(skillId)) as Skill;
    const subSkills = (await getSubSkills(skillId)) || [];
    return (
        <div className='ml-7'>
            <div className="flex mb-5">
                <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={50}
                    height={50}
                />
                <h2 className="ml-2 text-3xl font-bold">{skill.name}</h2>
            </div>
            <div className="">
                <h3>Tags</h3>
                <div className="m-2 flex flex-wrap">
                    {skill.tags.map((tag) => (
                        <span className="ml-2" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <h3>Resources</h3>
                <ul className=" m-2 flex flex-wrap">
                    {skill.resources.map((resource) => (
                        <li
                            key={resource.url}
                            className="m-1 flex shrink-0 rounded p-1 text-blue-400 underline hover:bg-gray-700"
                        >
                            <a key={resource.name} href={resource.url}>
                                {resource.name}
                            </a>
                            <Image
                                className="m-1"
                                width={18}
                                height={18}
                                src={externalLinkIcon}
                                alt=""
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <h3>Sub-Skills</h3>
            <SubSkillsCard subSkills={subSkills} />
        </div>
    );
}
