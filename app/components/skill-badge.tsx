import Image from "next/image"
import Link from "next/link"


type Skill = {
    _id: string;
    name: string;
    logo: string;
}

export function SkillBadge({ skill }: { skill: Skill }) {
    const skillUrl = `/skills/${skill._id}`;
    return (
        <Link href={skillUrl} className="flex flex-col">
            <Image src={skill.logo} alt={skill.name} width={50} height={50} />
            <p>{skill.name}</p>
        </Link>
    )
}