'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

import Image from "next/image"

import CallImage from "/public/calling.jpg"
import Call1 from "@/Image/call-1.png"
import Call2 from "@/Image/call-2.png"
import Phone from "@/Image/phones.png"

// import News1 from "@/Image/news1.jpg"
// import News2 from "@/Image/news2.jpg"
// import News3 from "@/Image/news3.jpg"

export default function Call(props) {

    const [data, setData] = useState();
    // const [logo , setLogo] = useState([]);

    const [dataService, setDataService] = useState([])

    const { baseUrl } = props

    useEffect(() => {

        // axios.get(`${baseUrl}/about/logo`, {
        //     headers: {
        //         "Accept-Language": "en"
        //     }
        // }).then((res) => {
        //     setLogo(res.data)
        //     console.log(res.data , 'sad')
        // }).catch((err) => {
        //     console.log(err);
        // })
        axios.get(`${baseUrl}/about`, {
            headers: {
                "Accept-Language": "en"
            }
        }).then((res) => {
            setData([res.data])
        }).catch((err) => {
            console.log(err);
        })


        axios.get(`${baseUrl}/services`, {
            headers: {
                "Accept-Language": "en"
            }
        }).then((res) => {
            setDataService(res.data)
        }).catch((err) => {
            console.log(err);
        })


    },[])

    // useEffect(() => {
    //     console.log(data , 'asdasdasd')
    // }, [data])

    return (
        <>
            <div className="call-section">
                <div className="333">
                    <div className="box-all-items">
                        <div className="item-1">
                            <Image src={CallImage} alt="Call Image" />
                        </div>
                        <div className="item-2">
                            <h3>
                                Our call, anytime, anywhere!
                            </h3>
                            {/* <h4>
                                Lorem ipsum dolor sit amet
                            </h4> */}
                            <span className="under-line"></span>

                            {
                                // data ? data.map((item) => {
                                //     return <p>{item.description}</p>
                                // }): ""
                                data ? <p key={data[0].description}>{data[0].description}</p> : ""
                            }
                            {/* <p>
                                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p> */}
                            <div className="box-image">
                                <div className='one'>

                                </div>
                                <div className='two'></div>
                                {/* <Image src={Call2} alt="Call Image" />
                                <Image src={Call1} alt="Call Image" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-call">
                <div className="box-all">
                    <div className="item-1">
                        {/* <Image src={Phone} alt="Call Image" /> */}
                    </div>
                    <div className="item-2">
                        <h3>
                            Our call, anytime, anywhere!
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                        <span className="under-line"></span>
                    </div>
                </div>
            </div>
            <div className="flex-section">
                <div className="head-section">
                    <h3>
                        Flexible pricing structure
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet
                    </p>
                    <span className="under-line"></span>
                </div>
                <div className="box-items">
                    <div className="item">
                        <div className="item-top">
                            <h3>
                                Smart Saver
                            </h3>
                            <h3>$
                                19.95
                            </h3>
                            <p>
                                per ueser/per month
                            </p>
                        </div>
                        <div className="item-center">
                            <p className="title">
                                Subscription breakdown
                            </p>
                            <p>
                                Australian phone number $03.5
                            </p>
                            <p>
                                User license $03.5
                            </p>
                            <p>
                                Device license $03.5
                            </p>
                            <p>
                                Call plan subscription $03.5
                            </p>
                        </div>
                        <div className="item-bottom">
                            <div className="arrow-box">
                                <i className="fa-solid fa-arrow-down"></i>
                            </div>
                            <button className="btn button-buy">buy now<i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                    <div className="item active">
                        <div className="item-top">
                            <h3>
                                Smart Saver
                            </h3>
                            <h3>$
                                19.95
                            </h3>
                            <p>
                                per ueser/per month
                            </p>
                        </div>
                        <div className="item-center">
                            <p className="title">
                                Subscription breakdown
                            </p>
                            <p>
                                Australian phone number $03.5
                            </p>
                            <p>
                                User license $03.5
                            </p>
                            <p>
                                Device license $03.5
                            </p>
                            <p>
                                Call plan subscription $03.5
                            </p>
                        </div>
                        <div className="item-bottom">
                            <div className="arrow-box">
                                <i className="fa-solid fa-arrow-down"></i>
                            </div>
                            <button className="btn button-buy">buy now<i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-top">
                            <h3>
                                Smart Saver
                            </h3>
                            <h3>$
                                19.95
                            </h3>
                            <p>
                                per ueser/per month
                            </p>
                        </div>
                        <div className="item-center">
                            <p className="title">
                                Subscription breakdown
                            </p>
                            <p>
                                Australian phone number $03.5
                            </p>
                            <p>
                                User license $03.5
                            </p>
                            <p>
                                Device license $03.5
                            </p>
                            <p>
                                Call plan subscription $03.5
                            </p>
                        </div>
                        <div className="item-bottom">
                            <div className="arrow-box">
                                <i className="fa-solid fa-arrow-down"></i>
                            </div>
                            <button className="btn button-buy">buy now<i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-section">
                <div className="head-section">
                    <h3>
                        Our Recent News
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet
                    </p>
                    <span className="under-line"></span>
                </div>
                <div className="box-all-items">
                    {
                        dataService ? dataService.map((item , index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="head-section">
                                        <img src={item.image} alt="Call Image" />
                                    </div>
                                    {/* <div className="date-section">
                                        <p>
                                            {item.date} 
                                            <span>
                                                -
                                            </span>
                                        </p>
                                        <p>{item.author} 
                                            <span>
                                                -
                                            </span>
                                        </p>
                                        <p className="end-p">
                                            {item.category}
                                        </p>
                                    </div> */}
                                    <div className="content-section">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.description.substring(0, 100) + "..."}
                                        </p>
                                        <button className="btn button-read">Read More<i className="fa-solid fa-arrow-right-long"></i></button>
                                    </div>
                                </div>
                            )
                        }) : ""
                    }
                    {/* <div className="item">
                        <div className="head-section">
                            <Image src={News1} alt="Call Image" />
                        </div>
                        <div className="date-section">
                            <p>
                                20th May 2021 
                                <span>
                                    -
                                </span>
                            </p>
                            <p>root 
                                <span>
                                    -
                                </span>
                            </p>
                            <p className="end-p">
                                Uncategorized
                            </p>
                        </div>
                        <div className="content-section">
                            <h3>
                                Hello world!
                            </h3>
                            <p>
                                Welcome to WordPress. This is your first post. Edit or delete it, then start writing!
                            </p>
                            <button className="btn button-read">Read More<i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="head-section">
                            <Image src={News2} alt="Call Image" />
                        </div>
                        <div className="date-section">
                            <p>
                                20th May 2021 
                                <span>
                                    -
                                </span>
                            </p>
                            <p>root 
                                <span>
                                    -
                                </span>
                            </p>
                            <p className="end-p">
                                Uncategorized
                            </p>
                        </div>
                        <div className="content-section">
                            <h3>
                                Hello world!
                            </h3>
                            <p>
                                Welcome to WordPress. This is your first post. Edit or delete it, then start writing!
                            </p>
                            <button className="btn button-read">Read More<i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="head-section">
                            <Image src={News3} alt="Call Image" />
                        </div>
                        <div className="date-section">
                            <p>
                                20th May 2021 
                                <span>
                                    -
                                </span>
                            </p>
                            <p>root 
                                <span>
                                    -
                                </span>
                            </p>
                            <p className="end-p">
                                Uncategorized
                            </p>
                        </div>
                        <div className="content-section">
                            <h3>
                                Hello world!
                            </h3>
                            <p>
                                Welcome to WordPress. This is your first post. Edit or delete it, then start writing!
                            </p>
                            <button className="btn button-read">Read More<i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}