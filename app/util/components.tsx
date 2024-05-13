// Importing External Dependencies
import Image from 'next/image';
import Link from 'next/link';

// Importing Internal Dependencies
import { getSkillList, getSkillLogo } from './data';
import { RecentSubSkills, ShortSkill } from './models';
import externalLinkIcon from '@/public/icon-external-link.png';
import { formatedDate } from './functions';

// Exporting the Components for Rendering

// Component to render Navigation Bar
export function Navbar() {
    return (
        <nav className="fixed left-0 right-0 top-0">
            <Image
                src="/icon.svg"
                alt="Application Icon"
                width={50}
                height={50}
                className="absolute left-5 top-5"
            />
            <div className="absolute right-5 top-5 flex gap-10 rounded-lg bg-gray-800 p-4 text-white">
                <Link href="/" className="cursor-pointer ">
                    Home
                </Link>
                <Link href="/skills" className="cursor-pointer ">
                    Skills
                </Link>
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
            {/* <h2>Skills</h2> */}
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
                <div className="flex">
                    <h4 className="ml-2 text-3xl font-bold">
                        {skill.skillName}
                    </h4>
                    <Link
                        href={`/skills/${skill.skillId}`}
                        className="ml-3.5 self-end text-yellow-500"
                    >
                        Read More
                    </Link>
                </div>
                <ul className="m-2 flex flex-wrap">
                    {skill.subSkills.map((subSkill) => (
                        <li key={subSkill} className="ml-2">
                            {subSkill}
                        </li>
                    ))}
                </ul>
                <ul className="m-2 flex flex-wrap">
                    {skill.resources.map((resource) => (
                        <li
                            key={resource.url}
                            className="m-1 shrink-0 rounded p-1 text-blue-400 underline hover:bg-gray-700"
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

// Component to render the sub skills on the Skill Pages
export async function SubSkillsCard({
    subSkills,
}: {
    subSkills: RecentSubSkills[];
}) {
    return (
        <>
            <div className="flex flex-col m-5">
                {subSkills.map((subSkill) => (
                    <div key={subSkill._id} className="grid grid-cols-8 gap-4 m-5">
                        <h3 className="col-span-1 text-xl font-light text-yellow-400">
                            {formatedDate(subSkill.date)}
                        </h3>
                        <br />
                        <div className="col-span-8">
                            <ul className="flex flex-wrap gap-4">
                                {subSkill.subSkills.map((subSkillItem) => (
                                    <li key={subSkillItem}>{subSkillItem}</li>
                                ))}
                            </ul>
                            <ul className="flex flex-wrap gap-2">
                                {subSkill.resources.map((resource) => (
                                    <li
                                        key={resource.url}
                                        className=" m-1 flex shrink-0 rounded p-1 text-blue-400 underline hover:bg-gray-700"
                                    >
                                        <a
                                            key={resource.name}
                                            href={resource.url}
                                        >
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
                    </div>
                ))}
            </div>
        </>
    );
}
