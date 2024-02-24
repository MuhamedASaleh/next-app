'use client'
import Image from "next/image"

import Logo from "@/Image/logo.png"
import Header1 from "@/Image/header-1.jpg"
import Header2 from "@/Image/slide-4-1-2.jpg"
import { useEffect, useState } from "react"
import axios from "axios"


export default function NavBar(props) {

    const { scrollY, baseUrl, headers } = props

    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get(`${baseUrl}/landing`, {
            headers: {
                "Accept-Language": "en"
            }
        }).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <div className="header-section">
                <div className={`nav-bar-section ${scrollY > 620 ? "fixed-nav" : ""}`}>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-one-left">
                        {/* <div className="contai66ner"> */}
                        <a className="navbar-brand logo-nav-item" href="#">
                            <div className="logo-nav-item"></div>
                            {/* <Image src={Logo} alt="Picture of the author" /> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Home 3</a></li>
                                        <li><a className="dropdown-item" href="#">Home One</a></li>
                                        <li><a className="dropdown-item" href="#">Home Two</a></li>
                                        <li><a className="dropdown-item" href="#">Home Boxed</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">about us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">shops</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">contats us</a>
                                </li>
                            </ul>
                            <div className="nav-two-right">
                                <nav className="navbar navbar-expand-lg bg-body-tertiary first-item">
                                    <div className="container">
                                        <a className="navbar-brand" href="#">my account</a>
                                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                            <div className="navbar-nav">
                                                <a className="nav-link active" aria-current="page" href="#">chekout</a>
                                                <a className="nav-link" href="#">cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                                <div className="icon-cart-right">
                                    <p className="search-icon">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </p>
                                    <p className="cart-icon">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </nav>

                </div>
                <div className={`overlay ${scrollY > 620 ? "fixed-overlay" : ""}`}> </div>
                <div className={`head-section`}>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active first-item">
                                {/* <Image src={Header1} alt="Picture of the author" /> */}
                                {
                                    data.length > 0 ? (
                                        <div className="carousel-caption d-none d-md-block" key={data[0].title}>
                                            <h5>{data[0].title}</h5>
                                            <span className="under-line"></span>
                                            <p>{data[0].description}</p>
                                        </div>
                                    ) : ""
                                }
                            </div>
                            <div className="carousel-item second-item">
                                {/* <Image src={Header2} alt="Picture of the author" /> */}
                                {
                                    data.length > 0 ? (
                                        <div className="carousel-caption d-none d-md-block" key={data[1].title}>
                                            <h5>{data[1].title}</h5>
                                            <span className="under-line"></span>
                                            <p>{data[1].description}</p>
                                        </div>
                                    ) : ""
                                }

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            
        </>
    )
}