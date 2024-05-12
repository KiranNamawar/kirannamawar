// Purpose: This file is used to render the page for a specific skill.


// Importing External Dependencies


// Importing Internal Dependencies


// Exporting the Skill Page
export default async function Page({ params }: { params: any }) {
    const skillId = params.skill;
    return (
        <>
            <h2>{skillId}</h2>
        </>
    );
}
