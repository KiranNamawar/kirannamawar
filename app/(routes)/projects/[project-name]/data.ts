import { client } from '@/app/util/connection';

export async function getProject(projectName: string) {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('projects');
        return await collection.findOne({ name: projectName });
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }   
}