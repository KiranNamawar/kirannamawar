import { client } from './util/connection';

export function getSkillLogos() {
    try {
        client.connect();
        const collection = client.db('portfolio').collection('skills');
        return collection
            .find({}, { projection: { name: 1, logo_Url: 1 } })
            .toArray();
    } catch (error) {
        console.error(error);
    } finally {
        client.close();
    }
}

export function getRecentProjects() {
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
            .sort({ date: -1 })
            .limit(5)
            .toArray();
    } catch (error) {
        console.error(error);
    } finally {
        client.close();
    }
}
