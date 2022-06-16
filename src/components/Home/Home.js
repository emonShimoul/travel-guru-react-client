import React from 'react';
import './Home.css';
import sajek from '../../images/Sajek.png';
import sreemongol from '../../images/Sreemongol.png';
import sundorbon from '../../images/sundorbon.png';

const Home = () => {
    let items = document.querySelectorAll('.carousel .carousel-item');

    items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
              }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

    return (
        <div className='container'>
           <div className='row mt-5'>
                <div className='col-md-4 text-white'>
                    <h1>Cox's Bazar</h1>
                </div>
                <div className="col-md-8 text-center my-3">
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
                            <a className="bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </a>
                            <a className="bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                    <h5 className="mt-2 fw-light">advances one slide at a time</h5>
                </div>
           </div>
        </div>
    );
};

export default Home;