export default async function Page({ params }: { params: any }) {
    const skillId = params.skill;
    return (
        <>
            <h2>{skillId}</h2>
        </>
    );
}
