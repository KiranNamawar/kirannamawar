import { SkillBadge } from './components/skill-badge';
import { getSkillBadges } from './data';
import { jetbrainsMono } from './util/fonts';


export default async function Home() {
    const skills = await getSkillBadges()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className={`text-center text-2xl font-bold ${jetbrainsMono.className}`}>
                    Welcome to My Portfolio! I&apos;m Kiran Namawar, a
                    self-taught web developer.
                </p>
            </section>

            <section>
                <h2>Skills:</h2>
                <div className='grid grid-cols-6 gap-5 m-5'>
                {skills &&
                    skills.map((skill) => (
                        <SkillBadge
                            key={skill._id}
                            skill={skill}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
