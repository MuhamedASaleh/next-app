'use client'
import { useEffect, useState } from "react"

import axios from "axios";

import Image from "next/image";

export default function Service(props) {

    const { baseUrl } = props
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get(`${baseUrl}/blogs`, {
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
            <div className="container">
                <div className="service-box">
                    <div className="box-all-item">
                        {   
                            data.length > 0 ?
                            data.map((item, index) => 
                                    <div className="item" key={index}>
                                        <div className="icon-box">
                                            <i className="fa-solid fa-arrow-up-right-dots"></i>
                                            {/* <Image src={item.image} alt={item.title} width={100} height={100}/> */}
                                        </div>
                                        <div className="text-box">
                                            <h3>{item.title}</h3>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                            )
                            : ""
                        }
                        {/* <div className="item">
                            <div className="icon-box">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                            </div>
                            <div className="text-box">
                                <h3>VoIP for Business</h3>
                                <p>
                                    Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                                </p>
                            </div>
                        </div> */}
                        {/* <div className="item">
                            <div className="icon-box">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                            </div>
                            <div className="text-box">
                                <h3>VoIP for Business</h3>
                                <p>
                                    Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-box">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                            </div>
                            <div className="text-box">
                                <h3>VoIP for Business</h3>
                                <p>
                                    Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-box">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                            </div>
                            <div className="text-box">
                                <h3>VoIP for Business</h3>
                                <p>
                                    Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-box">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                            </div>
                            <div className="text-box">
                                <h3>VoIP for Business</h3>
                                <p>
                                    Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}