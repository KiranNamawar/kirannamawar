import { SkillCard } from '@/app/components/skill-card';
import { Key } from 'react';


export async function DateCard({ date }: { date: any }) {
    return (
        <div className='p-5 border-2'>
            <h2>{date._id}</h2>
            {
                date.skills.map((skill: { skillId: Key | null | undefined; })=>(
                    <SkillCard key={skill.skillId} skill={skill} />
                ))
            }
        </div>
    );
}