import React, { useEffect, useState } from 'react'
import './Row.scss'
import Card from '../Card/Card';
import { getResponse } from '../../App';

function Row({title, type}) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetch(type){
      const {data:{results}} = await getResponse(type);
      console.log(results);
      setContent(results);
    }
    fetch(type);
  },[type])

  return (
    <div>
        <p className="title">{title}</p>
        <div className="row">
          {content.map((item, index)=>(
            <Card item = {item} key={index}/>
          )
          )}
        </div>
    </div>
  )
}

export default Row