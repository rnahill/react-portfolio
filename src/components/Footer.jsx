import githubIcon from "../assets/images/github-icon.png"
import linkedinIcon from "../assets/images/linkedin-icon.png"


export default function Footer() {

    return (
        <div>
            <footer className="row justify-content-center">
                <div className="footer col-2">
                    <img src={githubIcon} />
                    <p>GitHub</p>
                </div>
                <div className=" footer col-2">
                <img src={linkedinIcon} />
                    <p>LinkedIn</p>
                </div>
            </footer>
        </div>
    )
    
}