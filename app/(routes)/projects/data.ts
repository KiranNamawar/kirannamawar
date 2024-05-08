
import { client } from '@/app/util/connection';

export async function getProjects() {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('projects');
        return await collection
            .find(
                {},
                {
                    projection: {
                        name: 1,
                        date: 1,
                        links: 1,
                        summary: 1,
                        hero_img: 1,
                        skills: { name: 1, logo_url: 1}
                    },
                },
            )
            .toArray();
    } catch (error) {
        console.log(error);
    }
}
