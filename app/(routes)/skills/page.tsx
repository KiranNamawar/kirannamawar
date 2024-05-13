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
            {/* <h2>Skills</h2> */}
            <div>
                {recentSkills?.map((recentSkill) => (
                    <div
                        key={recentSkill._id}
                        className="m-2 grid  grid-cols-8 "
                    >
                        <h3 className=" col-span-1 m-2 justify-self-center text-xl font-light">
                            {formatedDate(recentSkill._id)}
                        </h3>
                        <div className="col-span-7">
                            {recentSkill.skills.map((skill) => (
                                <SkillCard key={skill.skillId} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
