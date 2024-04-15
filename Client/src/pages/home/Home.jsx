import React from 'react';
import "./Home.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";

const Home = () => {
    return (
        <div className='home'> 
            <Featured />
            <div className="pills">
                <div className="container">
                    <Link className="link menuLink" to="/gigs?cat=gamedev">
                        Game Development
                    </Link>
                    <Link className="link menuLink" to="/">
                        Interior Design
                    </Link> 
                    <Link className="link menuLink" to="/">
                     E-commerce
                    </Link>
                    <Link className="link menuLink" to="/gigs?cat=animation">
                        Animation & Cartoon
                    </Link>
                    <Link className="link menuLink" to="/">
                        Digital Marketing
                    </Link>
                    <Link className="link menuLink" to="/">
                        Music & Audio
                    </Link>
                    <Link className="link menuLink" to="/">
                        Social Media Marketing
                    </Link>
              </div>
            </div>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
            ))}           
            </Slide>                     
        </div>
    )
}

export default Home;