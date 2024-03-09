import githubIcon from "../../assets/images/github-icon1.png";
import linkedinIcon from "../../assets/images/linkedin-icon1.png";
import resume from "../../assets/images/documents/resume.pdf"
import { Link } from 'react-router-dom';
import "./style.css";

export default function ContactPage() {

    return (
        <div>
            <div className="contact-text">
                <h2 className="d-flex justify-content-center m-5">Contact me</h2>
                <div className="contact-container">
                    <div className="m-5">
                        <h4>Email:</h4>
                        <p>rnahill3@gmail.com</p>
                    </div>
                    <div className="m-5">
                        <Link to="https://www.linkedin.com/in/reilly-nahill-10b8b51b0/">
                            <img src={linkedinIcon} />
                        </Link>
                        <Link to="https://github.com/rnahill?tab=repositories">
                            <img src={githubIcon} />
                        </Link>
                    </div>
                    <div className="m-5">
                        <Link style={{color: "rgb(171, 190, 202)"}}to={resume} target="_blank" download >
                            <h4>Resume</h4>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )

};