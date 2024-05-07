import { client } from '../../util/connection';

export function getProject(projectName: string) {
    try {
        client.connect();
        const collection = client.db('portfolio').collection('projects');
        return collection.findOne({ name: projectName });
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }   
}