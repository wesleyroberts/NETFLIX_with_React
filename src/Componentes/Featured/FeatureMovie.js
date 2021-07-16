import React from 'react'
import './FeatureMovie.css'
export default function FeatureMovie({ item }) {
    console.log(item)
    let firstDate = new Date(item.first_air_date);
    let genres=[]
     item.genres.map((item)=>{
        genres.push(item.name)
    })
    return (
        <div>

            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                <div className="featured--vertical">
                    <div className="featured--horizontal">
                        <div className="featured--name">{item.original_name}</div>
                        <div className="featured--info">
                             <div className = "featured--points">{item.vote_average} pontos</div>
                             <div className ="featured--year">Lançamento {firstDate.getFullYear()} </div>    
                             <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons > 1 ? 's':''} </div>
                        </div>
                        <div className="featured--overview"> {item.overview}</div>
                        <div className="featured--buttons">
                            <a className="featured--watchbutton" href =""> ▶ Assistir</a>
                            <a className="featured--listbutton" href =""> + Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
