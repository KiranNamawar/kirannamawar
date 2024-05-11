import { client } from '@/app/util/connection';

export async function getSubSkills() {
    try {
        await client.connect();
        const subSkillsCollection = client
            .db('portfolio')
            .collection('subSkills');
        const result = await subSkillsCollection
            .aggregate([
                {
                    $group: {
                        _id: '$date',
                        skills: {
                            $push: {
                                skillName: '$skillName',
                                skillId: '$skillId',
                                subSkills: '$subSkills',
                            },
                        },
                    },
                },
                {
                    $sort: {
                        _id: -1,
                    },
                },
            ])
            .toArray();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function getSkillLogo(skillName: string) {
    try {
        await client.connect();
        const skillsCollection = client.db('portfolio').collection('skills');
        const result = await skillsCollection.findOne(
            { name: skillName },
            { projection: { logo: 1 } },
        );
        return result;
    } catch (error) {
        console.log(error);
    }
}
