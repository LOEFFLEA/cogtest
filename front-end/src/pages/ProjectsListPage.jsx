import ProjectsList from "../ProjectsList";
import projects from "../project-content";

export default function ProjectsListPage() {
    return (
        <>
        <h1>Projects</h1>
        <ProjectsList projects={projects} />
        </>
        
    );
}