import { getSubSkills } from './data';
import { getSkill } from './data';

export default async function Page({ params }: { params: any }) {
    const skillId = params.skill;
    const skill = await getSkill(skillId);
    const subSkills = await getSubSkills(skillId);
    return (
        <>
            {skill && (
                <>
                    <h1>{skill.name}</h1>
                    <h2>Sub Skills</h2>
                    <ul>
                        {subSkills &&
                            subSkills.map((subSkill: any) => (
                                <li key={subSkill._id} className="m-5">
                                    {subSkill.subSkills.map((s: string) => (
                                        <p key={s}>{s}</p>
                                    ))}
                                </li>
                            ))}
                    </ul>
                </>
            )}
        </>
    );
}
