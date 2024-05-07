import { client } from '../../util/connection';

export function getSkill(skillName: string) {
    try {
        client.connect();
        const collection = client.db('portfolio').collection('skills');
        return collection.findOne({ name: skillName });
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }   
}
