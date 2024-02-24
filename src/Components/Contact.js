'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Contact(props) {

    const [data, setData] = useState({
        last_name : "33",
        phone: "33",
    })

    const { baseUrl } = props

    const handlechange = (value, type) => {
        setData({ ...data, [type]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post(`${baseUrl}/contact/messages/`, data, {
            headers: {
                "Accept-Language": "en"
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
            <div className="contact-us">
                <div className="box-all-items">
                    <div className="item-1">
                        <div className="content">
                            <div className="title">
                                <h3>
                                    Get in touch
                                </h3>
                                <h3>
                                    Contact us
                                </h3>
                                <p>
                                    consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                            <div className="form-data">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="Your Name"
                                            onChange={(e) => handlechange(e.target.value, "first_name")}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="Email"
                                            onChange={(e) => handlechange(e.target.value, "email")}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="Subject"
                                            onChange={(e) => handlechange(e.target.value, "subject")}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            placeholder="Your Message"
                                            onChange={(e) => handlechange(e.target.value, "message")}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div className="item-2">
                    </div> */}
                </div>
            </div>
        </>
    )
}