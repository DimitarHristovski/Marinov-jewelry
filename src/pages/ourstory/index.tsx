import type { NextPage } from "next";
import Head from "next/head";
import React from "react";


const OurStory: NextPage = () => {
    return (
        <>
            <Head>
                <title>Our Story</title>
            </Head>

            <section className="our-story">
                <div className="container pt-5">
                    <h1 className="our-story-title">Our Story</h1>

                    <p className="our-story-text">began in <b>Ohrid in 1913</b> <br /> when master craftsman <b>Slave</b> <b>Marinov</b> started shaping copper into high-quality household products.</p>
                </div>
            </section>
            <div className="position-relative img-container">
                <img src="../images/thumb.png" className="position-absolute thumb-img" alt="" />
                <img src="../images/Ohrid2.png" alt="" />
                <div>
                    <img src="../images/copper.jpg" className="copper-img" alt="" />
                    <p className="copper-text">Copper oxidizes and changes over time.</p>
                </div>
            </div>
        </>
    );
};

export default OurStory;