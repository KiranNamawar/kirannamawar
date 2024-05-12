// Importing External Dependencies
import Image from 'next/image';
import Link from 'next/link';

// Importing Internal Dependencies
import { getSkillList, getSkillLogo } from './data';
import { ShortSkill } from './models';
import externalLinkIcon from '@/public/icon-external-link.png';

// Exporting the Components for Rendering

// Component to render Navigation Bar
export function Navbar() {
    return (
        <nav className="absolute right-5 top-5 rounded-lg bg-gray-800 p-4 text-white">
            <div className="flex gap-10">
                <Link href="/">Home</Link>
                <Link href="/skills">Skills</Link>
            </div>
        </nav>
    );
}

// Component to render the Skill Badges on the Home Page
export async function SkillBadges() {
    const skillList = await getSkillList();
    return (
        <div className="grid grid-cols-4 gap-6">
            {skillList?.map((skillItem) => (
                <div key={skillItem._id}>
                    <Link href={`/skills/${skillItem._id}`}>
                        <Image
                            src={skillItem.logo}
                            alt={skillItem.name}
                            width={50}
                            height={50}
                            className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}

// Component to render the Skill List on the Skill Pages for Navigation used in layout
export async function SkillList() {
    const skillList = (await getSkillList()) || [];
    return (
        <>
            <h2>Skills</h2>
            <div className="flex flex-col">
                {skillList.map((skill) => (
                    <Link
                        href={`/skills/${skill._id}`}
                        key={skill._id}
                        className="mx-2 flex gap-2 rounded p-3 hover:bg-gray-700"
                    >
                        <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={20}
                            height={20}
                        />
                        {skill.name}
                    </Link>
                ))}
            </div>
        </>
    );
}

// Component to render the Skill Card on the Skills Page
export async function SkillCard({ skill }: { skill: ShortSkill }) {
    const logo = (await getSkillLogo(skill.skillId)) || { logo: '' };
    return (
        <div key={skill.skillId} className="m-2 flex">
            <Image
                src={logo?.logo}
                alt={skill.skillName}
                width={25}
                height={25}
                className="m-2 self-start"
            />
            <div className="">
                <Link href={`/skills/${skill.skillId}`}>
                    <h4 className="ml-2 text-3xl font-bold">
                        {skill.skillName}
                    </h4>
                </Link>
                <ul className="m-2 flex flex-wrap">
                    {skill.subSkills.map((subSkill) => (
                        <li
                            key={subSkill}
                            className="m-1 shrink-0 rounded p-1 "
                        >
                            {subSkill}
                        </li>
                    ))}
                </ul>
                <ul className="m-2 flex flex-wrap">
                    {skill.resources.map((resource) => (
                        <li
                            key={resource.url}
                            className="m-1 shrink-0 rounded p-1 text-blue-700 underline hover:bg-gray-700"
                        >
                            <a href={resource.url} className="flex">
                                {resource.name}
                                <Image
                                    className="m-1"
                                    width={18}
                                    height={18}
                                    src={externalLinkIcon}
                                    alt=""
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// Component to render application icon
export function AppIcon() {
    return (
        <Image
            src="/icon.svg"
            alt="Application Icon"
            width={50}
            height={50}
            className="absolute left-5 top-5 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
        />
    );
}