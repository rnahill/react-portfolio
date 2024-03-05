import NamePlate from "../components/NamePlate";
import Project from "../components/Project"


export default function HomePage() {

    
    

    return (
    
        <div className="portfolio-container container-fluid row">
            <div className="col">
                <div id="name-plate">
                    <NamePlate />
                </div>
                <h2 id="title-plate">
                    Web Developer
                </h2>
            </div>
            <div className="container border border-secondary shadow-lg p-3 m-5 rounded project-container col">
                <h1>Projects</h1>
                <div>
                    <Project />
                </div>
            </div>
            
        </div>
    
    )


}