import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gameHarbour from "../../assets/images/gameharbour-logo.png"
import leaflit from "../../assets/images/leaflit-logo.png"
import shoppingCart from "../../assets/images/shoppingcart.jpg"
import gigHub from "../../assets/images/Gighub-250px.png"
import "./style.css";


export default function Projects() {

    return (
        <>
        <div className='row'>
            <div className='col'>
                <Card style={{ width: '18rem', background: "rgb(171, 190, 202)", margin: "2%", padding: "2%" }}>
                    <Card.Img variant="top" src={gameHarbour} />
                    <Card.Body>
                        <Card.Title>Game Harbour</Card.Title>
                        <Card.Text>
                        A cool website where you can log in and sign up to keep tabs on all your gaming habits.
                        </Card.Text>
                        <Button href="https://game-harbour-123-8c07ddc3abc7.herokuapp.com/" variant="dark">Live Site</Button>
                        <Button href="https://github.com/rnahill/Game-Harbour" variant="dark" style={{marginLeft: "4%"}}>Github</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='col'>
                <Card style={{ width: '18rem', background: "rgb(171, 190, 202)", margin: "2%", padding: "2%" }}>
                    <Card.Img variant="top" src={leaflit} />
                    <Card.Body>
                        <Card.Title>LeafLit</Card.Title>
                        <Card.Text>
                            A helpful web application designed to give tea recommendations based on your favorite book.
                        </Card.Text>
                        <Button href="https://aaron-heath.github.io/leaflit/" variant="dark">Live Site</Button>
                        <Button href="https://github.com/rnahill/leaflit" variant="dark" style={{marginLeft: "4%"}}>Github</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className='row'>
            
            <div className='col'>
                <Card style={{ width: '18rem', background: "rgb(171, 190, 202)", margin: "2%", padding: "2%" }}>
                    <Card.Img variant="top" src={gigHub} />
                    <Card.Body>
                        <Card.Title>GigHub</Card.Title>
                        <Card.Text>
                            A mobile-first innovative website created to allow you to find and contact local musicians for your next event.
                        </Card.Text>
                        <Button href="https://gighub-v82p.onrender.com/" variant="dark">Live Site</Button>
                        <Button href="https://github.com/rnahill/gighub" variant="dark" style={{marginLeft: "4%"}}>Github</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='col'>
                <Card style={{ width: '18rem', background: "rgb(171, 190, 202)", margin: "2%", padding: "2%" }}>
                    <Card.Img variant="top" src={shoppingCart} />
                    <Card.Body>
                        <Card.Title>Back-end Commerce App</Card.Title>
                        <Card.Text>
                            A simple example of my back-end abilities using a mySQL database and the Sequelize ORM.
                        </Card.Text>
                        <Button href="https://github.com/rnahill/ecommerce-backend" variant="dark">Github</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>

    )

}