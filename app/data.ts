import { client } from './util/connection';

export async function getSkillBadges() {
    try {
        await client.connect();

        const collection = client.db('portfolio').collection('skills');
        const result = await collection
            .find({}, { projection: { name: 1, logo: 1 } })
            .toArray();

        return result;
    } catch (error) {
        console.error(error);
    }
}
