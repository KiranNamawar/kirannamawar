import Image from 'next/image';
import { getSkillLogo } from './data';

async function SkillCard({ skill }: { skill: any }) {
    const logo = await getSkillLogo(skill.skillName);

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

export async function DateCard({ date }: { date: any }) {
    return (
        <div className='p-5 border-2'>
            <h2>{date._id}</h2>
            {
                date.skills.map((skill: { skillId: any })=>(
                    <SkillCard key={skill.skillId} skill={skill} />
                ))
            }
        </div>
    );
}