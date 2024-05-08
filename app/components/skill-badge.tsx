import Image from "next/image"
import Link from "next/link"

export function SkillBadge({ skill }: { skill: { name: string, logo_url: string } }) {
    const skillUrl = `/skills/${skill.name.toLowerCase().replace(/[.\s]/g, '')}`;
    console.log(skillUrl);
    return (
        <Link href={skillUrl} className="flex flex-col">
            <Image src={skill.logo_url} alt={skill.name} width={50} height={50} />
            <p>{skill.name}</p>
        </Link>
    )
}