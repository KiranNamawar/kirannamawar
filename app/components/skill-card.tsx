import Image from 'next/image';
import Link from 'next/link';
import { getSkillLogo } from '../(routes)/skills/data';

export async function SkillCard({ skill }: { skill: any }) {
    const logo = await getSkillLogo(skill.skillName);
    // console.log(logo);
    // console.log(skill);
    return (
        <div className="m-5 flex border-2">
            {logo && <Image src={logo.logo} alt={logo._id.toString()} width={100} height={100} />}

            <h2>{skill.skillName}</h2>
            {skill.subSkills.map((s: string) => (
                <h3 key={s}>{s}</h3>
            ))}
        </div>
    );
}
