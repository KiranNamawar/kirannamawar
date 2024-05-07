import { client } from '../util/connection';

export function getSkills() {
    try {
        client.connect();
        const collection = client.db('portfolio').collection('skills');
        return collection.find().toArray();
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
}
