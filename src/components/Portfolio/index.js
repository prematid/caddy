import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/paintings.json';
import Carousel from 'react-bootstrap/Carousel'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    const renderPortfolio = (portfolio) => {
        return (
            <AnimatedLetters
                letterClass={letterClass}
                strArray={"Updating Soon...".split("")}
                idx={15}
            />
            // <Carousel fade>
            //     {
            //         portfolio.map((port, idx) => {
            //             return (
            //                 <Carousel.Item>
            //                     <img
            //                         src={port.cover}
            //                         className="portfolio-image"
            //                         alt="portfolio" />
            //                 </Carousel.Item>
            //             )
            //         })
            //     }
            // </Carousel>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Art Gallery".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;