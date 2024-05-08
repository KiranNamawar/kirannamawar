import { client } from '@/app/util/connection';

export async function getSkills() {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('skills');
        return await collection.find().toArray();
    } catch (error) {
        console.log(error);
    } finally {
       await client.close();
    }
}
