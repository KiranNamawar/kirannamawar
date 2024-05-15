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
        <div className="max-w-screen-xl mx-auto p-5 md:p-10">
            <div className="m-5 flex items-center justify-center gap-4 md:gap-8">
                <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={50}
                    height={50}
                />
                <h2 className=" text-5xl font-bold">{skill.name}</h2>
            </div>

            <div className="m-5">
                <h3 className='font-thin border-b border-dashed text-lg md:text-xl'>Resources</h3>
                <ul className=" m-2 flex flex-wrap md:m-4">
                    {skill.resources.map((resource) => (
                        <li
                            key={resource.url}
                            className="m-1 flex flex-wrap rounded p-1 text-blue-400 hover:underline"
                        >
                            <a key={resource.name} href={resource.url}>
                                {resource.name}
                            </a>
                            <Image
                                className="m-1 hidden md:inline-block"
                                width={18}
                                height={18}
                                src={externalLinkIcon}
                                alt=""
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='m-5 md:m-10'>
                <h3 className='font-thin border-b border-dashed text-lg md:text-xl'>Sub-Skills</h3>
                <SubSkillsCard subSkills={subSkills} />
            </div>
        </div>
    );
}
