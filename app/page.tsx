import { SkillBadges } from './util/components';

export default async function Home() {
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
                <SkillBadges />
            </section>
        </main>
    );
}
