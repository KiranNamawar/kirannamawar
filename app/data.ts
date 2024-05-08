import { client } from './util/connection';

// Step 1: Create a cache object
// Step 1: Create a cache object
const cache = {
    skillBadges: null as any[] | null,
    recentProjects: null as any[] | null,
};

export async function getSkillBadges() {
    try {
        // Step 2: Check if the data is already in the cache
        if (cache.skillBadges) {
            console.log('Data is in the cache');
            // Step 3: If the data is in the cache, return it
            return cache.skillBadges;
        }

        await client.connect();

        const collection = client.db('portfolio').collection('skills');
        console.log('Data is not in the cache');
        // Step 4: If the data is not in the cache, make the request, store the result in the cache, and then return the result
        const result = await collection
            .find({}, { projection: { name: 1, logo_url: 1 } })
            .toArray();

        cache.skillBadges = result;

        return result;

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

export async function getRecentProjects() {
    try {
        if (cache.recentProjects) {
            return cache.recentProjects;
        }

        await client.connect();

        const collection = client.db('portfolio').collection('projects');

        const result = await collection
            .find(
                {},
                {
                    projection: {
                        name: 1,
                        date: 1,
                        links: 1,
                        summary: 1,
                        hero_img: 1,
                        skills: { name: 1, logo_url: 1 },
                    },
                },
            )
            .toArray();

        cache.recentProjects = result;

        return result;

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

