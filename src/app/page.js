'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from './page.module.css'

import NavBar from "@/Components/NavBar"
import Service from "@/Components/Service"
import Questions from "@/Components/Questions"
import Call from "@/Components/Call"
import Contact from "@/Components/Contact"
import Footer from "@/Components/Footer"


// const baseUrl= "http://192.168.1.6:8001"
const baseUrl = "http://52.23.234.42/api"
const headers = {
  headers: {
    "Accept-Language": "en"
  }

}


export default function Home() {

  const [scrollY, setScrollY] = useState(0);

  // const [data, setData] = useState([])

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {

    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get(`${baseUrl}/api/landing` , {headers :{
    //       "Accept-Language": "en"
    //     }})
    //     setData(res.data)
    //     console.log(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();

    // axios.get(`${baseUrl}/api/about` , {headers :{
    //   "Accept-Language": "en"
    // }}).then((res) => {
    //   setData(res.data)
    //   console.log(res)
    //   console.log(res.data);
    // }).catch((err) => {
    //   console.log(err);
    // })

    // console.log(data);
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    import("bootstrap/dist/js/bootstrap")

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  // console.log(scrollY);

  return (
    <>
      <NavBar scrollY={scrollY} baseUrl={baseUrl} headers={headers} />
      <Service baseUrl={baseUrl} />
      <Questions baseUrl={baseUrl} />
      <Call baseUrl={baseUrl} />
      <Contact baseUrl={baseUrl} />
      <Footer baseUrl={baseUrl} />
    </>
  )
}
