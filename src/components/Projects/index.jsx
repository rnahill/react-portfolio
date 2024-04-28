import { Link } from 'react-router-dom';
import gameHarbour from "../../assets/images/gameharbour-image.png"
import leaflit from "../../assets/images/leaflit-image.png"
import shoppingCart from "../../assets/images/shopping-cart.png"
import gigHub from "../../assets/images/gighub-img.png"
import "./style.css";

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
                    <Link to="https://github.com/Aaron-Heath/gighub?tab=readme-ov-file">
                        <img style={styles.img} src={gigHub} />
                    </Link>
                </div>
                <div className="border border-secondary col project-card">
                    <h5>Game Harbour</h5>
                    <Link to="https://github.com/rnahill/Game-Harbour">
                        <img style={styles.img} src={gameHarbour} />
                    </Link>
                </div>
            </section>  

            <section className="row">
                <div className="border border-secondary col project-card">
                    <h5>LeafLit</h5>
                    <Link to="https://github.com/rnahill/leaflit">
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