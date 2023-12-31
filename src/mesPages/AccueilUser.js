import React from 'react';
import '../MesStyles/Accueil.css'
import MonHeader from '../header/Header';


const HomeUser =({TabMemoires}) => {
    return (
        <>
            <MonHeader />
            
            <div className='mesBlocs'>
                <div className='bloc1'>
                    <h4 className='titre'>Récemment publiés</h4>
                    <hr></hr>
                    <div className='articles'>
                        
                    </div>
                </div>

                {/* FIRST BLOC */}

                <div className='bloc2'>
                  <iframe  src="https://www.youtube.com/embed/ILED0Z_pePU?si=h35EzrSEQq2qtCXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                {/* 2ND BLOC */}

                <div className='bloc3'>
                     <h4 className='titre'>Récemment publiés</h4>
                    <hr></hr>
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

export default HomeUser;
