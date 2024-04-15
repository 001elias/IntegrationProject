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
                <Link className="link menuLink" to="/gigs">
                        All
                    </Link>
                    <Link className="link menuLink" to="/gigs?cat=gamedev">
                        Game Development
                    </Link>
                    <Link className="link menuLink" to="/gigs?cat=design">
                        Interior Design
                    </Link> 
                    <Link className="link menuLink" to="/gigs?cat=ecommerce">
                     E-commerce
                    </Link>
                    <Link className="link menuLink" to="/gigs?cat=animation">
                        Animation & Cartoon
                    </Link>
                    <Link className="link menuLink" to="/gigs?cat=marketing">
                        Digital Marketing
                    </Link>
                    <Link className="link menuLink" to="/gigs?cat=music">
                        Music & Audio
                    </Link>
                    <Link className="link menuLink" to="/gigs?cat=social">
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