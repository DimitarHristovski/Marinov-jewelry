import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Carousel } from "react-bootstrap";


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
                <img src="../images/Ohrid3.png" alt="" />
                <div className="copper-img">
                    <img src="../images/copper.jpg" className="" alt="" />
                    <div className="container-fluid copper-text-div">
                        <h3 className="copper-text">Copper <br /> oxidizes and changes over time.</h3>
                    </div>
                    <div className="copper-bottom-text container-fluid">
                        <h3 className="copper-text text-right">And so has Marinov.</h3>
                        <p className="copper-text-paragraph text-right text-white">Over the years, our family <br/>business has evolved and <br/> adapted to changing times, all <br/>the while holding on to its rich<br/> history and tradition.</p>
                    </div>
                </div>

            </div>
            <div className="position-relative pt-5 mb-5">
                <p className="copper-text-paragraph m-0 container-fluid">Slave’s skill was passed <br /> down to <b>his son Ivan</b>, who<br /> expanded the business<br /> by introducing<br /> <b>souvenirs</b>.</p>
                <div className="position-absolute image-h21725">
                    <img src="../images/H21725.png" alt="" />
                </div>
                <p className="copper-text-paragraph container-fluid text-right text-margin">Following in his father’s<br /> footsteps, Ivan’s son Slave<br /> created the iconic handmade<br /> antique helmet, which quickly<br /> became a symbol synonymous<br /> with our brand.</p>
                <div className="position-relative images-container">
                    <img className="position-absolute image-slave" src="../images/slave1.png" alt="" />
                    <img className="position-absolute image-schlem" src="../images/schlem.png" alt="" />
                </div>
                <img src="../images/Group51.svg" alt="" />
                <p className="copper-text-paragraph container-fluid"><b>Today</b>, Slave’s legacy<br /> carries on in the hands<br />of <b>his daughter Maria and<br /> son Ivan</b>, marking the <b>fourth<br /> generation</b> of our family's<br /> timeless craft.</p>
                <div className="position-relative stone_ring-container">
                    <img className="position-absolute image-store_ring" src="../images/ring_stone.png" alt="" />
                </div>
                <p className="copper-text-paragraph container-fluid mt-3">Under Maria's<br /> visionary leadership,<br /> MARINOV has taken a bold<br /> step forward with a fresh <br />perspective, exploring<br /> <b>unique and modern <br />jewelry designs.</b></p>
                <div className="position-relative jw_design-container">
                    <img src="../images/jw_design.png" className="image-jw_design" alt="" />
                </div>
                <p className="copper-text-paragraph container-fluid text-right">Using <b>traditional techniques</b><br /> taught by her family, she<br /> experiments with new <br /><b>complementary materials</b><br /> and methods of production,<br /> mixing <b>past and present</b><br /> to create timeless pieces <br />of jewelry.</p>
            </div>
            <div>
                <h2 className="copper-text text-dark container-fluid">Peek Into <br/> Our Process</h2>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-height"
                            src="../images/img_1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-height"
                            src="../images/img_2.jpeg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-height"
                            src="../images/img_3.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-height"
                            src="../images/img_4.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-height"
                            src="../images/img_5.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-height"
                            src="../images/img_6.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <p className="content-font-stype container-fluid mt-2">Crafting copper jewelry is a meticulous art, requiring precision, honed skill, and a deep commitment to excellence. Every step, from shaping the raw copper to adding intricate details, demands careful attention.</p>

                <p className="content-font-stype container-fluid ">It's more than creating a piece of jewelry; it's a dedication to the art, passion, and expertise that define our work.</p>

                <p className="content-font-stype container-fluid ">Each finished piece speaks of our commitment to quality, promising a distinctive and beautifully crafted copper jewelry experience for you.</p>
            </div>
            <section className="pt-5">
                <div className="container-fluid">
                    <h2 className="copper-text text-dark ">Certified Craftsmanship</h2>
                    <p className="content-font-stype">Through the years, our business and skilled craftsmen have achieved numerous certifications, showcasing our commitment to exceptional craftsmanship. We have actively engaged in international workshops, demonstrating our craft and learning from various traditions. </p>
                    <div className="w-50">
                        <p className="content-font-stype">These experiences reflect our continuous journey of skill enhancement and passion for the art, reinforcing our dedication to quality.</p>
                    </div>
                </div>
                <div className="position-relative image-background-container">
                    <img className="position-absolute image-background" src="../images/background.png" alt="" />
                    <img className="position-absolute image-majorsko-pismo" src="../images/majstorkso pismo-2-1.png" alt="" />
                    <img className="p-3" src="../images/zajecar.png" alt="" />
                    <img className="Milutinu" src="../images/Milutinu.png" alt="" />
                    <img className="p-5" src="../images/svidetelstvo.png" alt="" />
                    <img className="svidetelstvo2" src="../images/svidetelstvo2.png" alt="" />
                </div>
            </section>
        </>
    );
};

export default OurStory;