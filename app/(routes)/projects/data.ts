
import { client } from '@/app/util/connection';

export async function getProjects() {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('projects');
        return await collection
            .find()
            .toArray();
    } catch (error) {
        console.log(error);
    }
}
