import NamePlate from "../../components/NamePlate";
import Projects from "../../components/Projects"

import "./style.css";


export default function HomePage() {




    return (
        <>
            <div className="d-flex flex-column flex-wrap">
                <div className="row portfolio-container">
                    <div className="col">
                        <div id="name-plate">
                            <NamePlate />
                        </div>
                        <h2 id="title-plate">
                            Web Developer
                        </h2>
                    </div>
                    <div className="container-fluid p-3 m-5 rounded project-container col">
                        <h1>Projects</h1>
                        <div>
                            <Projects />
                        </div>

                    </div>
                </div>
                
            </div>
        
        </>


    )


}