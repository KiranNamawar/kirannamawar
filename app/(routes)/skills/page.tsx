// Purpose: Display the skills page.

// Importing External Dependencies

// Importing Internal Dependencies
import { getRecentSkills } from '@/app/util/data';
import { formatedDate } from '@/app/util/functions';
import { SkillCard } from '@/app/util/components';

// Exporting the Skills Page
export default async function Page() {
    const recentSkills = await getRecentSkills();
    return (
        <>
            {/* <h2 className="">Skills</h2> */}
            <ul className='m-5'>
                {recentSkills?.map((recentSkill) => (
                    <li
                        key={recentSkill._id}
                        className="my-10 border rounded-xl p-4 relative max-w-screen-xl mx-auto md:p-10"
                    >
                        <h3 id={recentSkill._id.toString()} className="text-white text-2xl font-light absolute -top-5 bg-blue-900 rounded-xl p-2">
                            {formatedDate(recentSkill._id)}
                        </h3>
                        <ul className="md:max-w-screen-lg md:mx-auto mt-8">
                            {recentSkill.skills.map((skill) => (
                                <li key={skill.skillId} className='border-b border-dashed mb-10 md:mb-20'>
                                    <SkillCard skill={skill} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}
