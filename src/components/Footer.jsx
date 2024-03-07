import githubIcon from "../assets/images/github-icon.png"
import linkedinIcon from "../assets/images/linkedin-icon.png"
import { Link } from 'react-router-dom';


export default function Footer() {

    return (
        <div>
            <footer className="row justify-content-center footer">
                <div className="col-2">
                    <Link to="https://github.com/rnahill?tab=repositories">
                        <img src={githubIcon} />
                    </Link>
                    <p>GitHub</p>
                </div>
                <div className="col-2">
                <Link to="https://www.linkedin.com/in/reilly-nahill-10b8b51b0/">
                    <img src={linkedinIcon} />
                </Link>
                    <p>LinkedIn</p>
                </div>
            </footer>
        </div>
    )
    
}