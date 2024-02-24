import Image from "next/image"

import logo from "@/Image/logo.png"

export default function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="box-all-items">
                    <div className="item-first">
                        <div className="logo-footer">
                            {/* <Image src={logo} alt="logo" /> */}
                        </div>
                        <p>
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation.
                        </p>
                        <p className="btn-get">
                            get in touch
                            <i className="fa-solid fa-arrow-right"></i>
                        </p>
                    </div>
                    <div className="item-first">
                        <div className="head-section">
                            <h4>BUSINESS HOURS</h4>
                            <span className="under-line"></span>
                        </div>
                        <p>
                            <span>Monday - Friday :</span>
                            <span> 9:00 am - 5:00 pm</span>
                        </p>
                        <p>
                            <span>Saturday </span>
                            <span>9:00 am - 5:00 pm</span>
                        </p>
                        <p className="title">
                            Vacations :
                        </p>
                        <p>
                            <span>
                                All Sunday Days
                            </span>
                        </p>
                        <p>
                            <span>
                                All Official Holidays
                            </span>
                        </p>
                    </div>
                    <div className="item-first">
                        <div className="head-section">
                            <h4>BUSINESS HOURS</h4>
                            <span className="under-line"></span>
                        </div>
                        <div className="links-footer">
                            <p>
                                <span>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                                <span>
                                    About Us
                                </span>
                            </p>
                            <p>
                                <span>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                                <span>
                                    Blog
                                </span>
                            </p>
                            <p>
                                <span>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                                <span>
                                    shop
                                </span>
                            </p>
                            <p>
                                <span>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                                <span>
                                    home
                                </span>
                            </p>
                            <p>
                                <span>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                                <span>
                                    about us
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="item-first">
                        <div className="head-section">
                            <h4>news letter</h4>
                            <span className="under-line"></span>
                        </div>
                        <p>
                            Don’t miss to subscribe to our news feeds, kindly fill the form below.
                        </p>
                        <div className="input-group">
                            <input type="email" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" placeholder="email address" />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">join</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}