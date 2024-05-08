import { getSkills } from './data';
import { SkillCard } from '@/app/components/skill-card';

export default async function Page() {
    const skills = await getSkills();
    return (
        <>
            <h2>Skills</h2>
            <div>
                {skills && skills.map((skill) => (
                    <SkillCard
                        key={skill._id.toString()}
                        skill={{
                            name: skill.name,
                            category: skill.category,
                            logo_url: skill.logo_url,
                            tags: skill.tags,
                            sub_skills: skill.sub_skills,
                            resources: skill.resources
                        }}
                    />
                ))}
            </div>
        </>
    );
}
