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
           <div className='row mt-5 pb-5'>
                <div className='col-md-5 text-white'>
                    <h1>Cox's Bazar</h1>
                </div>
                <div id="carouselExampleControls" className="carousel slide col-md-7" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <a href='#a' className="carousel-item active">
                        <img src={sajek} className="d-block w-25 mx-auto" alt="" />
                        </a>
                        <a href='#b' className="carousel-item">
                        <img src={sreemongol} className="d-block w-25 mx-auto" alt="" />
                        </a>
                        <a href='#c' className="carousel-item">
                        <img src={sundorbon} className="d-block w-25 mx-auto" alt="" />
                        </a>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
           </div>
        </div>
    );
};

export default Home;