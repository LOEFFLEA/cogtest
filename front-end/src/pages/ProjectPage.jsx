import { useParams } from 'react-router-dom';
import projects from '../project-content';

export default function ProjectPage() {
    const { name } = useParams();

    const project = projects.find(a => a.name === name);

    return (
        <>
        <h1>{project.title}</h1>
        {project.content.map(p => <p key={p}>{p}</p>)}
        </>
        
    );
}