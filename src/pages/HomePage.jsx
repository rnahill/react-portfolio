import NamePlate from "../components/NamePlate";


export default function HomePage() {

    
    

    return (
    
        <div className="portfolio-container container-fluid row">
            <div className="col">
            
                <h2 id="title-plate">
                    <NamePlate />
                    Web Developer
                </h2>
            </div>
            <div className="container border border-secondary shadow-lg p-3 m-5 rounded project-container col">
                <h1>Projects</h1>
            </div>
            
        </div>
    
    )


}