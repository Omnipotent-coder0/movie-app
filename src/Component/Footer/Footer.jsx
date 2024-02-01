import React, { useEffect, useState } from 'react'
import { getResponse } from '../../App';
import "./footer.scss"

function Footer({type}) {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
      async function fetch(type){
        const {data:{genres}} = await getResponse(type);
        console.log(genres);
        setGenre(genres);
      }
      fetch(type);
    },[type])
    
  return (
    <footer className="footer">
        {genre.map((item,index) => (
            <div className="button" key = {index}  >{item.name}</div>
        ))}
    </footer>
  )
}

export default Footer