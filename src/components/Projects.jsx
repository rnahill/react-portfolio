import { Link } from 'react-router-dom';
import gameHarbour from "../assets/images/gameharbour-image.png"
import leaflit from "../assets/images/leaflit-image.png"
import shoppingCart from "../assets/images/shopping-cart.png"

const styles = {
    img: {
        maxHeight: "200px"
        
    },

    cart: {
        minHeight: "190px"
    }
}


export default function Project() {

    return (
        <div>
            <section className="row">
                <div className="border border-secondary col project-card">
                    <h5>GigHub</h5>
                </div>
                <div className="border border-secondary col project-card">
                    <h5>Game Harbour</h5>
                    <Link to="https://game-harbour-123-8c07ddc3abc7.herokuapp.com/login">
                        <img style={styles.img} src={gameHarbour} />
                    </Link>
                </div>
            </section>  

            <section className="row">
                <div className="border border-secondary col project-card">
                    <h5>LeafLit</h5>
                    <Link to="https://rnahill.github.io/leaflit/">
                        <img style={styles.img} src={leaflit} />
                    </Link>
                </div>
                <div className="border border-secondary col project-card">
                    <h5>E-Commerce Backend Application</h5>
                    <Link to="https://github.com/rnahill/ecommerce-backend">
                        <img style={styles.cart} src={shoppingCart} />
                    </Link>
                </div>
            </section>
        </div>
        
    )
    
}