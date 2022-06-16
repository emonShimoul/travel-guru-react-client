import React from 'react';
import './Home.css';
import sajek from '../../images/Sajek.png';
import sreemongol from '../../images/Sreemongol.png';
import sundorbon from '../../images/sundorbon.png';
import './slider';

const Home = () => {
    return (
        <div>
            {/* <script src='./slider.js' type='text/javascript'></script> */}
            <div className="container text-center my-3">
                <h2 className="font-weight-light">Bootstrap Multi Slide Carousel</h2>
                <div className="row mx-auto my-auto justify-content-center">
                    <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={sajek} alt="" className="img-fluid" />
                                        </div>
                                        <div className="card-img-overlay">Slide 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={sreemongol} alt="" className="img-fluid" />
                                        </div>
                                        <div className="card-img-overlay">Slide 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={sundorbon} alt="" className="img-fluid" />
                                        </div>
                                        <div className="card-img-overlay">Slide 3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
                <h5 className="mt-2 fw-light">advances one slide at a time</h5>
            </div>
        </div>
    );
};

export default Home;