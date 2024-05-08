'use server'

import { client } from '@/app/util/connection';

export async function getSkill(skillName: string) {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('skills');
        return await collection.findOne({ name: skillName });
    } catch (error) {
        console.log(error);
    }  
}
