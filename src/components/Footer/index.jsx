import githubIcon from "../../assets/images/github-icon1.png";
import linkedinIcon from "../../assets/images/linkedin-icon1.png";
import { Link } from 'react-router-dom';
import "./style.css"



export default function Footer() {

    return (
        <div>
            <div className="footer d-flex flex-row-reverse">
                <div className="p-2">
                    <Link to="https://github.com/rnahill?tab=repositories">
                        <img src={githubIcon} />
                    </Link>
                </div>
                <div className="p-2">
                <Link to="https://www.linkedin.com/in/reilly-nahill-10b8b51b0/">
                    <img src={linkedinIcon} />
                </Link>
                </div>
            </div>
        </div>
    )
    
}