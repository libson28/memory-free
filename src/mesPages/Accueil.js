import React from 'react';
import '../MesStyles/Accueil.css'


const Home =({TabMemoires}) => {
    return (
        <>
             <div className='logo'>
            <img src='./logo.png' alt='hh' />
            <div className='liste'>
                <ul>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>A propos</a></li>
                    <li><a href='#'>Publications</a></li>
                   
                </ul>
            </div>

             <div className='log'>
               <button><a href='#'>Se connecter</a> <i class="fa-solid fa-user"></i></button>
            </div>
        </div>
            
            <div className='mesBlocs'>
                <div className='bloc1'>
                    <h3 className='titre'>Extraits de publications</h3>
                    <hr></hr>
                    {/*  */}
                   
                        <div className='articles'>
                                {TabMemoires.map((carte, index) => (

                            <div className='carte' key={index}> 
                                <div>
                                    <img src= {carte.image} />
                                </div>    
                                {/*  */}
                                <div className='description'>
                                    <h3>{carte.title}</h3>
                                    <p>{carte.text}</p>
                                </div>
                            </div>
                        </div>
                    
                ))}
                    {/*  */}

                   
                </div>

                {/* FIRST BLOC */}

                <div className='bloc2'>
                  <iframe  src="https://www.youtube.com/embed/ILED0Z_pePU?si=h35EzrSEQq2qtCXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                {/* 2ND BLOC */}

                <div className='bloc3'>
                    hhhhh
                </div>
            </div>
{/* END THIRD BLOC */}
            <div className='third'>
                <div className='fourth'>
                    <iframe src="https://www.youtube.com/embed/-9x3DdOhlyQ?list=PL2enCZ8_EClgDDeTBsPgcd47zJPu6kphr" title="Comment Eviter le Plagiat au sein de votre Mémoire ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            
        </>


        
        
    )
}

export default Home;
