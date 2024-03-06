import placeholder from "../assets/images/placeholder.jpg"

const styles = {
    // img: {
    //     maxHeight: "200px",
    //     maxWidth: "200px",
    //     margin: "17%"
    // },

};

export default function AboutPage() {
 return (
<div className="row about-container d-flex align-items-center">
    <div className="col">
        <h2 className="col d-flex justify-content-center">About me</h2>
        <img />   
    </div>
    <p className="col-7 container border border-secondary shadow-lg p-3 m-5 rounded bio-container">
    I am a dedicated student currently enrolled at the University of Pennsylvania, pursuing a certificate in both front and back-end web development. My journey into the world of technology began with a unique path. I began my professional career focusing on pre-physical therapy studies, eventually pivoting towards Veterinary Technology. I earned my Associate's of Veterinary Technology from Manor College, and worked as a veterinary technician before deciding to pursue my passion for tech and coding.

    Driven by a thirst for knowledge and a love for creating, I am committed to expanding my expertise beyond web development. My ambitions include learning additional programming languages and exploring the exciting realm of game development. Through my academic and professional experiences, I have cultivated a strong work ethic and honed my ability to collaborate effectively within a team.

    My multifaceted background has equipped me to thrive in fast-paced environments. Coming from a medical background, problem-solving is second nature to me. Whether it's writing lines of code, crafting narratives, or working collaboratively with a team, I bring a versatile skill set and a positive attitude.
    </p>
</div>
 );


};