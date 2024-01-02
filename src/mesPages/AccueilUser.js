import React from 'react';
import '../MesStyles/Accueil.css'
import SecondMenu from '../header/SecondHeader';
import { Image } from 'react-bootstrap';


const HomeUser =({TabMemoires}) => {
    return (
        <>
            <SecondMenu />
            
            <div className='mesBlocs'>
                <div className='bloc1'>
                    <h4 className='titre'>Récemment publiés</h4>
                    <hr></hr>
                    {/* {memoires.map((memoire) => (
                        <div className='temoin' id='temoin'>
                            <div className='profile'>
                                <Image src='https://img.freepik.com/premium-photo/hand-use-mobile-phone-circle-network-communication-technology-globaldata_28974-432.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=sph' />
                            </div>
                            <div className='texte'>
                                <h5>
                                    {memoire.name1}
                                </h5>
                            </div>
                        </div>
                        
                    ))} */}
                    <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais' />
                        </div>
                        <div className='texte'>
                            <h5>
                                web design
                            </h5>
                        </div>
                    </div>
                    <hr />
                    <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Intelligence Artificielle
                            </h5>
                        </div>
                    </div>
                    <hr />
                    <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-96317.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Domotique
                            </h5>
                        </div>
                    </div>
                    <hr />
                    <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/free-photo/smart-agriculture-iot-with-hand-planting-tree-background_53876-124626.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=sph' />
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
                            <Image src='https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?w=740&t=st=1704156921~exp=1704157521~hmac=f4eab156cff064221d212690bcba2bcd8a1c5a29dcb1f5efb334faf967b72adb' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Cybersecurity
                            </h5>
                        </div>
                    </div>
                    <hr />
                    <div className='temoin' id='temoin'>
                        <div className='profile'>
                            <Image src='https://img.freepik.com/free-photo/network-switch-with-cables_1137-6.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais' />
                        </div>
                        <div className='texte'>
                            <h5>
                                Réseau Informatique
                            </h5>
                        </div>
                    </div>
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
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740' /> Une plateforme vrament à saluer, rien à dire.
                        </div>
                        <hr />

                    </div>
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740' /> Une plateforme vrament à saluer, rien à dire.
                        </div>
                        <hr />

                    </div>
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740' /> Une plateforme vrament à saluer, rien à dire.
                        </div>
                        <hr />

                    </div>
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740' /> Une plateforme vrament à saluer, rien à dire.
                        </div>
                        <hr />

                    </div>
                    <div className='temoin'>
                        <div className='profil'>
                            <Image src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740' /> Une plateforme vrament à saluer, rien à dire.
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

export default HomeUser;
