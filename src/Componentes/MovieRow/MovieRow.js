import React ,{useState}from 'react'
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export default function MovieRow({key,title,items}) {
   
    const[scrollx, setScrollx]= useState(0);
    //função de que movimenta lista para direita 
    //usando o window.innerWidth para pegar o tamanho da tela apresentada e assim fazer a movimentação por pixel
    const handleLeftArrow= ()=>{
        let x = scrollx+Math.round(window.innerWidth/2);
        if(x>0){x=0;}
        setScrollx(x);
    }
    //função de que movimenta lista para direita 
    const handleRightArrow= ()=>{
        //pegando o valor do tamanho da tela
        let x = scrollx-Math.round(window.innerWidth/2);
        //recebendo o valor da quantidade de items vezes a largura deles de 150 px
        let listWidth = items.results.length * 150;
        //condição para que a lista pare no final dela
        if((window.innerWidth - listWidth)>x){
            x = (window.innerWidth-listWidth) - 60 ;        }
        setScrollx(x)
    }
   
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}} />
            </div>
            <div className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:50}} />
            </div>
            <div className="movieRow--listarea"> 
                <div className="movieRow--list" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="moviewRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    ))}                    
                </div>
            </div>
        </div>
    )
}
