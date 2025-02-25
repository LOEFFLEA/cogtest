import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Brown-Peterson Task</Link>
                </li>
            </ul>
        </nav>
    )
}