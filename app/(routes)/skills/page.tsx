import { DateCard } from '@/app/components/date-card';
import { getSubSkills } from './data';


export default async function Page() {
    const skills = await getSubSkills();
    // console.log(skills);
    return (
        <>
            <h2>Skills</h2>
            <div>
                {skills?.map((date)=>(
                    <DateCard key={date._id} date={date} />
                ))}
            </div>
        </>
    );
}
