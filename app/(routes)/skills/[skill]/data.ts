
import { client } from '@/app/util/connection';
export async function getSkill(skillId: string) {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('skills');
        return await collection.findOne({ _id: skillId }); 
    } catch (error) {
        console.log(error);
    }  
}


export async function getSubSkills(skillId: string) {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('subSkills');
        return await collection.find({skillId: skillId}).toArray();
    } catch (error) {
        console.log(error);
    }
}