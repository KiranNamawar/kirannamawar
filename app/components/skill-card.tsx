import Image from 'next/image';
import Link from 'next/link';

type skill = {
    name: string;
    category: string;
    logo_url: string;
    tags: string[];
    sub_skills: string[];
    resources: { name: string; url: string; category: string }[];
};

export function SkillCard({ skill }: { skill: skill }) {
    const tutorialResources = skill.resources.filter(
        (resource) => resource.category === 'Tutorial',
    );
    const courseResources = skill.resources.filter(
        (resource) => resource.category === 'Course',
    );
    const documentationResources = skill.resources.filter(
        (resource) => resource.category === 'Documentation',
    );

    return (
        <div className="flex">
            <Image
                src={skill.logo_url}
                alt={skill.name}
                width={100}
                height={100}
            />
            <div>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
                <div className='flex'>
                    {skill.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
                <div className='flex'>
                    {skill.sub_skills.map((sub_skill) => (
                        <p key={sub_skill}>{sub_skill}</p>
                    ))}
                </div>
                <div>
                    {tutorialResources.length > 0 && (
                        <div>
                            <h4>Tutorial</h4>
                            {tutorialResources.map((resource) => (
                                <Link key={resource.url} href={resource.url}>
                                    {resource.name}
                                </Link>
                            ))}
                        </div>
                    )}
                    {courseResources.length > 0 && (
                        <div>
                            <h4>Course</h4>
                            {courseResources.map((resource) => (
                                <Link key={resource.url} href={resource.url}>
                                    {resource.name}
                                </Link>
                            ))}
                        </div>
                    )}
                    {documentationResources.length > 0 && (
                        <div>
                            <h4>Documentation</h4>
                            {documentationResources.map((resource) => (
                                <Link key={resource.url} href={resource.url}>
                                    {resource.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
