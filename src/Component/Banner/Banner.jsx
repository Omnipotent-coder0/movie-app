import React, { useEffect, useState } from 'react'
import "./Banner.scss"
import logo from "../../images/card-image.jpg"
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { getResponse } from '../../App';

function Banner() {


  const [item,setItem] = useState({
    original_title : "Title",
    overview : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eligendi facilis, natus iste perspiciatis enim, reprehenderit neque aspernatur atque quidem sit dignissimos rerum id repellendus itaque! Dignissimos tempore veniam blanditiis.",
    poster_path : logo
  });
  useEffect(() => {
    async function getItem(){
      const {data:{results}} = await getResponse("movie/popular")
      if(results[0]){
        setItem({
          original_title : results[0].original_title,
          overview : results[0].overview,
          poster_path : `url(https://image.tmdb.org/t/p/w500/${results[0].poster_path})`
        })
      }
    }
    getItem();
  }, [])




  // var temp = {
  //   original_title : "Title",
  //   overview : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eligendi facilis, natus iste perspiciatis enim, reprehenderit neque aspernatur atque quidem sit dignissimos rerum id repellendus itaque! Dignissimos tempore veniam blanditiis.",
  //   poster_path : logo
  // }
  // const getItem = async () => (await getResponse("movie/popular"))
  // const {data:{results}} = getItem();
  // const item = results[0] ? results[0] : {
  //   original_title : "Title",
  //   overview : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eligendi facilis, natus iste perspiciatis enim, reprehenderit neque aspernatur atque quidem sit dignissimos rerum id repellendus itaque! Dignissimos tempore veniam blanditiis.",
  //   poster_path : logo
  // }




  return (
    <div className="banner">
      <div className='img' style={{backgroundImage:item.poster_path}}>
      </div>
      <div className="content">
        <div className='text'>
          <h1>{item.original_title}</h1>
          <p>{item.overview}  </p>
        </div>
        <div className='buttons'>
          <div className='btn1'><FaPlay className='icon' />WATCH</div>
          <div className='btn2'><FaPlus className='icon'/>ADD</div>
        </div>
      </div>
    </div>
  )
}

export default Banner