import { getSkills } from './data';
import { Skill, SkillCard } from '@/app/components/skill-card';


export default async function Page() {
    const skills = await getSkills();
    return (
        <>
            <h2>Skills</h2>
            <div>
                {skills && skills.map((skill) => (
                    <SkillCard
                        key={skill._id}
                        skill={skill as Skill}
                    />
                ))}
            </div>
        </>
    );
}
