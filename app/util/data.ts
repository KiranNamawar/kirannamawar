import { MongoClient } from 'mongodb';

import {
    Skill,
    SkillNameAndLogo,
    RecentSkill,
    RecentSubSkills,
} from './models';

export const client = new MongoClient(process.env.DATABASE_URL ?? '');

export async function getSkillList() {
    try {
        await client.connect();

        const collection = client.db('portfolio').collection('skills');
        const result = (await collection
            .find({}, { projection: { logo: 1, name: 1 } })
            .toArray()) as unknown as SkillNameAndLogo[];

        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function getRecentSkills() {
    try {
        await client.connect();
        const subSkillsCollection = client
            .db('portfolio')
            .collection('subSkills');
        const result = (await subSkillsCollection
            .aggregate([
                {
                    $group: {
                        _id: '$date',
                        skills: {
                            $push: {
                                skillName: '$skillName',
                                skillId: '$skillId',
                                subSkills: '$subSkills',
                                resources: '$resources',
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
            .toArray()) as unknown as RecentSkill[];
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function getSkill(skillId: any) {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('skills');
        return (await collection.findOne({ _id: skillId })) as unknown as Skill;
    } catch (error) {
        console.log(error);
    }
}

export async function getSkillLogo(skillId: any) {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('skills');
        return (await collection.findOne(
            { _id: skillId },
            { projection: { logo: 1, name: 1 } },
        )) as unknown as SkillNameAndLogo;
    } catch (error) {
        console.log(error);
    }
}

export async function getSubSkills(skillId: string) {
    try {
        await client.connect();
        const collection = client.db('portfolio').collection('subSkills');
        return (await collection
            .aggregate([
                {
                    $match: {
                        skillId: skillId,
                    },
                },
                {
                    $sort: {
                        date: -1,
                    },
                },
                {
                    $project: {
                        date: 1,
                        subSkills: 1,
                        resources: 1,
                    },
                },
            ])
            .toArray()) as unknown as RecentSubSkills[];
    } catch (error) {
        console.log(error);
    }
}
