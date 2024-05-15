// Desc: Home page of the application

// Importing External Dependencies
import Link from 'next/link';

// Importing Internal Dependencies
import { SkillBadges } from './util/components';
import Image from 'next/image';

// Exporting the Home Page
export default async function Home() {
    return (
        <main className="">
            <section className="mx-auto max-w-screen-lg">
                <div className="flex flex-col items-center justify-center">
                    <p className={` font-nunito`}>
                        Hey, I&apos;m{' '}
                        <span className="text-2xl font-thin tracking-widest text-green-500 md:text-4xl">
                            KIRAN NAMAWAR
                        </span>
                    </p>
                    <p className="font-nunito text-4xl font-thin text-blue-300 md:text-7xl">
                        Web Developer
                    </p>
                    <p className="max-w-screen-sm p-2 text-center font-nunito mt-5 text-lg">
                        I&apos;m a passionate web developer with 1 years of
                        experience. I love crafting user-friendly interfaces and
                        bringing ideas to life through code. I&apos;m proficient
                        in HTML, CSS, Tailwind CSS, JavaScript, TypeScript,
                        React, Next.js, and MongoDB.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/in/kirannamawar/">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                                alt="linkedin"
                                width="50"
                                height="50"
                                className="hover:scale-110"
                            ></Image>
                        </Link>
                        <Link href="https://github.com/KiranNamawar">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt="github"
                                width="50"
                                height="50"
                                className="hover:scale-110"
                            />
                        </Link>
                    </div>
                </div>
                <div className="border rounded-xl m-10 md:mx-40">
                    <div className='flex justify-between mt-5 md:mt-10 items-baseline mb-5 md:mb-10 mx-10 md:mx-20 font-nunito'>
                        <h3 className='text-2xl md:text-4xl'>Skills:</h3>
                        <Link href="/skills" className="border p-2 rounded-lg text-blue-500 hover:underline md:text-2xl">
                            View All Skills
                        </Link>
                    </div>
                    <SkillBadges />
                </div>
            </section>
        </main>
    );
}
