import React ,{useEffect, useState}from 'react'
import Tmdb from './Tmdb'
import './App.css'
import MovieRow from './Componentes/MovieRow';
import FeatureMovie from './Componentes/FeatureMovie';
export default function App() {

  const [movieList, setMovieList]=useState([]);

  useEffect(()=>{
      const loadAll= async ()=>{
          //pegando a lista total
          let list = await Tmdb.getHomeList();
          setMovieList(list)
      }
      loadAll();
  },[]);

  return (
    <div className="page">
        <section className="lists">
          {movieList.map((item,key)=>(
              <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>
    </div>
  )
}