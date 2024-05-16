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
                src="/icon.png"
                alt="Application Icon"
                width={30}
                height={30}
                className="absolute left-5 top-5"
            />
            <ul className="absolute right-5 top-5 flex rounded-xl bg-button-primary-default p-2 text-white">
                <li>
                    <Link
                        href="/"
                        className="cursor-pointer rounded-xl p-2 hover:underline"
                    >
                        Home
                    </Link>
                </li>
                <div className="h-6 self-center border border-dashed"></div>
                <li>
                    <Link
                        href="/skills"
                        className="cursor-pointer rounded-xl p-2 hover:underline"
                    >
                        Skills
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

// Component to render the Skill Badges on the Home Page
export async function SkillBadges() {
    const skillList = await getSkillList();
    return (
        <ul className="grid grid-cols-4 gap-4 p-5 md:gap-10 ">
            {skillList?.map((skillItem) => (
                <li key={skillItem._id} className="flex justify-center">
                    <Link href={`/skills/${skillItem._id}`}>
                        <Image
                            src={skillItem.logo}
                            alt={skillItem.name}
                            width={50}
                            height={50}
                            className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

// Component to render the Skill List on the Skill Pages for Navigation used in layout
export async function SkillList() {
    const skillList = (await getSkillList()) || [];
    return (
        <>
            <div className="hidden md:block ">
                <ul className="">
                    {skillList.map((skill) => (
                        <li key={skill._id}>
                            <Link href={`/skills/${skill._id}`} className="flex gap-2 items-center">
                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    width={20}
                                    height={20}
                                />
                                {skill.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:hidden"></div>
        </>
    );
}

// Component to render the Skill Card on the Skills Page
export async function SkillCard({ skill }: { skill: ShortSkill }) {
    const logo = (await getSkillLogo(skill.skillId)) || { logo: '' };
    return (
        <div className="">
            <div className="my-4 flex flex-wrap items-center justify-between md:mb-8">
                <div className="flex gap-3 md:gap-6">
                    <Image
                        src={logo?.logo}
                        alt={skill.skillName}
                        width={25}
                        height={25}
                        className=""
                    />
                    <h4 className=" text-3xl font-bold">
                        <Link href={`/skills/${skill.skillId}`}>
                            {skill.skillName}
                        </Link>
                    </h4>
                </div>
                <Link
                    href={`/skills/${skill.skillId}`}
                    className=" mr-10 text-yellow-500 hover:underline"
                >
                    Read More
                </Link>
            </div>
            <div className="">
                <ul className="my-4 md:my-8 flex flex-wrap gap-x-4 md:gap-x-8 md:gap-y-4 gap-y-2">
                    {skill.subSkills.map((subSkill) => (
                        <li key={subSkill} className="border-b border-dotted">
                            {subSkill}
                            {/* <div className="border border-dotted"></div> */}
                        </li>
                    ))}
                </ul>
                <ul className="my-4 md:my-8 flex flex-wrap gap-x-4 md:gap-x-8 md:gap-y-4 gap-y-2">
                    {skill.resources.map((resource) => (
                        <li
                            key={resource.url}
                            className=" text-blue-400 hover:underline"
                        >
                            <a href={resource.url} className="flex">
                                {resource.name}
                                <Image
                                    className="m-1 hidden md:inline-block"
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
            <ul className="">
                {subSkills.map((subSkill) => (
                    <li
                        key={subSkill._id}
                        className="relative my-10 rounded-xl border p-4 md:my-20"
                    >
                        <h3 className="absolute -top-5 rounded-lg bg-blue-900 p-2 text-xl font-light text-white">
                            <Link href={`/skills/#${subSkill.date.toString()}`}>
                                {formatedDate(subSkill.date)}
                            </Link>
                        </h3>

                        <div className="mt-5 md:m-10">
                            <ul className="flex flex-wrap gap-x-4 md:gap-x-8">
                                {subSkill.subSkills.map((subSkillItem) => (
                                    <li
                                        key={subSkillItem}
                                        className="my-2 w-fit border-b border-dotted md:my-4"
                                    >
                                        {subSkillItem}
                                    </li>
                                ))}
                            </ul>
                            <ul className="my-6 flex flex-wrap gap-2 md:my-12">
                                {subSkill.resources.map((resource) => (
                                    <li
                                        key={resource.url}
                                        className="flex flex-wrap rounded text-blue-400 hover:underline"
                                    >
                                        <a
                                            key={resource.name}
                                            href={resource.url}
                                        >
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
                    </li>
                ))}
            </ul>
        </>
    );
}
