// Purpose: This file is used to render the page for a specific skill.

// Importing External Dependencies
import Image from 'next/image';

// Importing Internal Dependencies
import { getSkill, getSubSkills } from '@/app/util/data';
import { Skill } from '@/app/util/models';
import { SubSkills } from '@/app/util/components';

// Exporting the Skill Page
export default async function Page({ params }: { params: any }) {
    const skillId = params.skill;
    const skill = (await getSkill(skillId)) as Skill;
    const subSkills = (await getSubSkills(skillId)) || [];
    return (
        <>
            <div className="flex">
                <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={100}
                    height={100}
                />
                <h2>{skill.name}</h2>
            </div>
            <div className="flex">
                <h3>Tags</h3>
                <div>
                    {skill.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <div>
                <h3>Resources</h3>
                <div className='flex flex-wrap'>
                    {skill.resources.map((resource) => (
                        <a key={resource.name} href={resource.url}>
                            {resource.name}
                        </a>
                    ))}
                </div>
            </div>
            <h3>Sub-Skills</h3>
            <SubSkills subSkills={subSkills} />
        </>
    );
}
