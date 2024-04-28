import catConstruction from "../../assets/images/cat-construction.png"
import { Link } from 'react-router-dom';


const styles = {
    main: {
        backgroundColor: "white",
        textAlign: "center"
    }
}


export default function ConstructionPage() {

    return (
        <div style={styles.main}>
            <h1>Oops!</h1>
            <h2>This portfolio is currently under construction.</h2>
            <h3>In the meantime, check out my Github to see my code!</h3>
            <Link to ="https://github.com/rnahill">
                <h3>rnahill</h3>
            </Link>
            <img src={catConstruction} />
        </div>
    )

}