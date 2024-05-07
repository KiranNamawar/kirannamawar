import { client } from '../util/connection';

export function getSkills() {
    try {
        client.connect();
        const collection = client.db('portfolio').collection('skills');
        return collection
            .find(
                {},
                {
                    projection: {
                        name: 1,
                        logo_url: 1,
                        sub_skills: { name: 1 },
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
