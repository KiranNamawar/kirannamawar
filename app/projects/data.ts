import { client } from '../util/connection';

export function getProjects() {
    try {
        client.connect();
        const collection = client.db('portfolio').collection('projects');
        return collection
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
    } finally {
        client.close();
    }
}
