import React from 'react';
import '../MesStyles/Accueil.css'
import Header from '../header/Header';
import { Image } from 'react-bootstrap';
import Popup from './AjoutMemoire';




const Home =({TabMemoires}) => {
    return (
        <>
            <Header />   
            <Popup></Popup>        
            <div className='mesBlocs'>
                <div className='bloc1'>
                    <h4 className='titre'>Récemment publiés</h4>
                    <hr></hr>
                     <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/premium-photo/hand-use-mobile-phone-circle-network-communication-technology-globaldata_28974-432.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=sph' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Agriculture
                            </h5>
                        </div> 
                    </div>
                    <hr />
                     <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/premium-photo/hand-use-mobile-phone-circle-network-communication-technology-globaldata_28974-432.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=sph' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Agriculture
                            </h5>
                        </div> 
                    </div>
                    <hr />
                     <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/premium-photo/hand-use-mobile-phone-circle-network-communication-technology-globaldata_28974-432.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=sph' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Agriculture
                            </h5>
                        </div> 
                    </div>
                    <hr />
                     <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/premium-photo/hand-use-mobile-phone-circle-network-communication-technology-globaldata_28974-432.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=sph' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Agriculture
                            </h5>
                        </div> 
                    </div>
                    <hr />
                     <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/premium-photo/hand-use-mobile-phone-circle-network-communication-technology-globaldata_28974-432.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=sph' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Agriculture
                            </h5>
                        </div> 
                    </div>
                    <hr />
                        <div className='articles'>
                           
                        </div>
                    
              
                 

                   
                </div>

                {/* FIRST BLOC */}

                <div className='bloc2'>
                  <iframe  src="https://www.youtube.com/embed/ILED0Z_pePU?si=h35EzrSEQq2qtCXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                {/* 2ND BLOC */}

                <div className='bloc3'>
                     <h4 className='titre'>Témoignagnes</h4>
                    <hr></hr>
                    
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740'/> Une plateforme vrament à saluer, rien à dire. 
                        </div>
                        <hr />
                        
                    </div>
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740'/> Une plateforme vrament à saluer, rien à dire. 
                        </div>
                        <hr />
                        
                    </div>
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740'/> Une plateforme vrament à saluer, rien à dire. 
                        </div>
                        <hr />
                        
                    </div>
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740'/> Une plateforme vrament à saluer, rien à dire. 
                        </div>
                        <hr />
                        
                    </div>
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740'/> Une plateforme vrament à saluer, rien à dire. 
                        </div>
                        <hr />
                        
                    </div>
                    
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
