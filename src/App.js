import React ,{useEffect, useState}from 'react'
import Tmdb from './Tmdb'
import './App.css'
import MovieRow from './Componentes/MovieRow/MovieRow';
import FeatureMovie from './Componentes/Featured/FeatureMovie';
import Header from './Componentes/Header/Header';

export default function App() {

  const [movieList, setMovieList]=useState([]);
  const [featuredData, setFeaturedData]=useState(null)
  const [balckHeader,setBlackHeader]= useState(false)
  useEffect(()=>{
      const loadAll= async ()=>{
          //pegando a lista total
          let list = await Tmdb.getHomeList();
          setMovieList(list)

          //Pegando o Featured
          let originals = list.filter(i=> i.slug==='originals');
          let radomChosen = Math.floor(Math.random()*(originals[0].items.results.length-1))
          let chosen = originals[0].items.results[radomChosen]
          let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
          setFeaturedData(chosenInfo)
        }
      loadAll();
  },[]);

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY>10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () =>{
      window.removeEventListener('scroll',scrollListener)
    }
  },[])

  return (
    <div className="page">
      <Header black={balckHeader}/>
      {/* condicao para que o componente Featured so aparece quando tiver informacao */}
      {featuredData &&
        <FeatureMovie item={featuredData}/>
      }
        <section className="lists">
          {movieList.map((item,key)=>(
              <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>
    </div>
  )
}