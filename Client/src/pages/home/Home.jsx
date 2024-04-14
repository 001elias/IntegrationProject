import React from 'react';
import "./Home.scss";
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";

const Home = () => {
    return (
        <div className='home'>
            <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
            <CatCard key={card.id} card={card} />
        ))}
      </Slide>
           <Featured />
           
        </div>
    )
}

export default Home;