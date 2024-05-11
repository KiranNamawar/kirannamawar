import Link from 'next/link';

export function SkillList({ skillList }: { skillList: any }) {
    return (
        <>
            <h2>Skills</h2>
            <div className="flex flex-col">
                {skillList.map((skill: any) => (
                    <Link
                        href={`/skills/${skill._id}`}
                        key={skill._id}
                        className="m-5"
                    >
                        {skill.name}
                    </Link>
                ))}
            </div>
        </>
    );
}
