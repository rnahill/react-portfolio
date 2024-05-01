import githubIcon from "../../assets/images/github-icon1.png";
import linkedinIcon from "../../assets/images/linkedin-icon1.png";
import resume from "../../assets/images/documents/resume3.pdf"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./style.css";

export default function ContactPage() {

    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h2 style={{color: "rgb(171, 190, 202)", margin: "4%"}}>Contact me</h2>
                <div>
                    <div>
                        <Card style={{ width: '18rem', background: "rgb(171, 190, 202)", margin:"4%" }}>
                            <Card.Body>
                                <Card.Title style={{textDecoration: "underline"}}>Email</Card.Title>
                                <Card.Text>
                                    reillynahill3@gmail.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{margin: "10%"}}>
                        <Link to="https://www.linkedin.com/in/reilly-nahill-10b8b51b0/">
                            <img src={linkedinIcon} />
                        </Link>
                        <Link to="https://github.com/rnahill?tab=repositories">
                            <img src={githubIcon} />
                        </Link>
                    </div>
                    <div>
                        <Button href={resume} variant="light" style={{color: "rgb(39, 42, 47)", margin: "4%"}}>View my resume here</Button>
                    </div>

                </div>
            </div>
        </div>
    )

};