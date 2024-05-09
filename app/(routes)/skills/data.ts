import { client } from '@/app/util/connection';

export async function getSkills() {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('skills');
        return await collection
            .aggregate([
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        logo: 1,
                        category: 1,
                        subSkillsByDate: 1,
                    },
                },
                { $unwind: '$subSkillsByDate' },
                { $sort: { 'subSkillsByDate.date': -1 } },
            ])
            .toArray();
    } catch (error) {
        console.log(error);
    }
}
