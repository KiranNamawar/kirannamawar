// Importing External Dependencies
import { MongoClient } from 'mongodb';

// Importing Internal Dependencies
import {
    Skill,
    SkillNameAndLogo,
    RecentSkill,
    RecentSubSkills,
} from './models';

// Instantiating the MongoDB Client
export const client = new MongoClient(process.env.DATABASE_URL ?? '');

// Defining the Collections
const skillsCollection = client.db('portfolio').collection('skills');
const subSkillsCollection = client.db('portfolio').collection('subSkills');

// Exporting the Functions for Data Fetching from the Database

// Function to get the list of skills
export async function getSkillList() {
    try {
        await client.connect();

        const result = (await skillsCollection
            .find({}, { projection: { logo: 1, name: 1 } })
            .toArray()) as unknown as SkillNameAndLogo[];

        return result;
    } catch (error) {
        console.error(error);
    }
}

// Function to get the list of recent skills
export async function getRecentSkills() {
    try {
        await client.connect();

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

// Function to get a skill by ID
export async function getSkill(skillId: any) {
    try {
        await client.connect();
        return (await skillsCollection.findOne({
            _id: skillId,
        })) as unknown as Skill;
    } catch (error) {
        console.log(error);
    }
}

// Function to get the logo of a skill
export async function getSkillLogo(skillId: any) {
    try {
        await client.connect();
        return (await skillsCollection.findOne(
            { _id: skillId },
            { projection: { logo: 1, name: 1 } },
        )) as unknown as SkillNameAndLogo;
    } catch (error) {
        console.log(error);
    }
}

// Function to get the list of sub-skills
export async function getSubSkills(skillId: string) {
    try {
        await client.connect();
        return (await subSkillsCollection
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
