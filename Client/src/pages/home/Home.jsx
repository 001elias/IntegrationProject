import React from 'react';
import "./Home.scss";
import { Link } from "react-router-dom";
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";

const Home = () => {
    const categoryUrls = {
        "All": "/gigs",
        "Game Development": "/gigs?cat=gamedev",
        "Interior Design": "/gigs?cat=design",
        "E-commerce": "/gigs?cat=ecommerce",
        "Animation & Cartoon": "/gigs?cat=animation",
        "Digital Marketing": "/gigs?cat=marketing",
        "Music & Audio": "/gigs?cat=music",
        "Social Media Marketing": "/gigs?cat=social",
    };

    return (
        <div className='home'> 
            <Featured />
            <div className="pills">
                <div className="container">
                    {Object.keys(categoryUrls).map((category) => (
                        <Link className="link menuLink" to={categoryUrls[category]} key={category}>
                            {category}
                        </Link>
                    ))}
                </div>
            </div>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} url={categoryUrls[card.title]} />
                ))}
            </Slide>                     
        </div>
    )
}

export default Home;
