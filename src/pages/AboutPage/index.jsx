import headshot from "../../assets/images/resume-image.png"
import "./style.css";

const styles = {
    // img: {
    //     maxHeight: "200px",
    //     maxWidth: "200px",
    //     margin: "17%"
    // },

};

export default function AboutPage() {
    return (
        <div className="row about-container">
            <h2 className="d-flex justify-content-center align-items-center">About me</h2>
            <div className="col">
                <img src={headshot} id="headshot" className="mb-5"/>
                <div className="d-flex justify-content-center mt-5 skills-container">
                    <h4 className="">Skills</h4>
                    <p className="p-2 ms-4 d-flex flex-row flex-wrap col-7 border border-secondary rounded">HTML • XML • CSS • Javascript • React.js • Express.js • Node.js • MySQL • Sequelize • MongoDB • Mongoose • GraphQL • Object-Oriented Programming  • Front-end Development  • Back-end Development • Git • Github • API's</p>
                </div>
            </div>

            <div className="col-7">
                <p className="col-8 container border border-secondary shadow-lg p-3 m-4 rounded bio-container">
                    I am a dedicated student currently enrolled at the University of Pennsylvania, pursuing a certificate in both front and back-end web development. My journey into the world of technology began with a unique path. I began my professional career focusing on pre-physical therapy studies, eventually pivoting towards Veterinary Technology. I earned my Associate's of Veterinary Technology from Manor College, and worked as a veterinary technician before deciding to pursue my passion for tech and coding.
                    <br />
                    <br />
                    Driven by a thirst for knowledge and a love for creating, I am committed to expanding my expertise beyond web development. My ambitions include learning additional programming languages and exploring the exciting realm of game development. Through my academic and professional experiences, I have cultivated a strong work ethic and honed my ability to collaborate effectively within a team.
                    <br />
                    <br />
                    My multifaceted background has equipped me to thrive in fast-paced environments. Coming from a medical background, problem-solving is second nature to me. Whether it's writing lines of code, crafting narratives, or working collaboratively with a team, I bring a versatile skill set and a positive attitude.
                </p>

            </div>
        </div>
    );


};