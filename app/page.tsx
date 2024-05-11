import { SkillBadge } from './components';
import { getSkillBadges } from './data';

export default async function Home() {
    const skills = await getSkillBadges();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="flex items-center justify-between">
                <div>
                    <p className={`font-quickSand`}>
                        Hey, I&apos;m{' '}
                        <span className="text-4xl font-thin tracking-widest text-gray-500">
                            KIRAN NAMAWAR
                        </span>
                    </p>
                    <p className="font-quickSand text-7xl font-thin text-blue-300">
                        Web Developer
                    </p>
                </div>
                <div className="m-5 grid grid-cols-4 gap-5">
                    {skills &&
                        skills.map((skill) => (
                            <SkillBadge key={skill._id} skill={skill} />
                        ))}
                </div>
            </section>
        </main>
    );
}
