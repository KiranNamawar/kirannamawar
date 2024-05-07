import { client } from '../util/connection';

export function getProjects() {
    try {
        client.connect();
        const collection = client.db('portfolio').collection('projects');
        return collection.find().toArray();
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
}
