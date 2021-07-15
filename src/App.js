import React ,{useEffect, useState}from 'react'
import Tmdb from './Tmdb'
import './App.css'
import MovieRow from './Componentes/MovieRow';
import FeatureMovie from './Componentes/FeatureMovie';
export default function App() {

  const [movieList, setMovieList]=useState([]);
  const [featuredData, setFeaturedData]=useState(null)

  useEffect(()=>{
      const loadAll= async ()=>{
          //pegando a lista total
          let list = await Tmdb.getHomeList();
          setMovieList(list)

          //Pegando o Featured
          let originals = list.filter(i=> i.slug==='originals');
          let radomChosen = Math.floor(Math.random()*(originals[0].items.results.length-1))
          let chosen = originals[0].items.results[radomChosen]
          console.log(chosen);
        }
      loadAll();
  },[]);

  return (
    <div className="page">
      {/* condicao para que o componente Featured so aparece quando tiver informacao */}
      {/* {featuredData &&
        <FeatureMovie item={featuredData}/>
      } */}
        <section className="lists">
          {movieList.map((item,key)=>(
              <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>
    </div>
  )
}