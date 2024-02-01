import React from 'react'
import "./Home.scss"
import Banner from '../../Component/Banner/Banner'
import Row from '../../Component/Row/Row'



function Home() {
  return (
    <section className="home">
      <Banner />
      <Row title = "Popular" type = "movie/popular"/>
      <Row title = "Movies" type = "movie/now_playing"/>
      <Row title = "TV Shows" type = "tv/on_the_air"/>
      <Row title = "Recently Added" type = "movie/now_playing"/>
      <Row title = "Top Rated" type = "movie/top_rated"/>
    </section>
  )
}

export default Home