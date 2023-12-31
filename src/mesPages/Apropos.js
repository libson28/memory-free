import React from "react";
import Header from "../header/Header";
import '../MesStyles/Apropos.css';


function About() {
    return (
        <>
            <Header />
            <section className="about">
                <div className="descrip">

                    <div className="about1">
                        <img src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=1060&t=st=1703894141~exp=1703894741~hmac=2eb27ddfa91d89ed4796f2bc1459d4edd7c531c40dab17672a6f6adae5fddc84" />
                    </div>
                    <div className="about2">
                        <p>
                            Bienvenue sur la plateforme MemoryFree, nous représentons une structure permettant aux jeunes en voix de soutenir leurs mémoires d'avoir un panoplie d'exemple de mémoires déjà rédigés et téléchargeable gratuitement.
                        </p>
                       
                        <p>
                            Composés de développeurs "es" très passionnés qui combinent éfforts et fun pour vous faciliter la tâche.
                        </p>
                       
                        <p>
                            Nous vous proposons nos mémoires déjà finis et vous propose en même temps la possibilité de publier votre exemplaire; ainsi, vous serez compté parmi les membres de la plateforme MemoryFree.
                        </p>
                    </div>
                </div>
            </section>

            <section className="team">
                <div className="title">
                    <h2>
                        Notre équipe
                    </h2>
                </div>
                <div className="mesCartes">
                    <div className="c1">
                        <div className="image">
                            <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1703896183~exp=1703896783~hmac=8e7d12d2faf2d0e8de7164755d091efd08a625b74ba9f06a7b84271045f31af3" />
                        </div>
                        <p>Libasse Ndoye Cisse</p>
                    </div>
                    <div className="c1">
                        <div className="image">
                            <img src="https://img.freepik.com/free-vector/hand-drawn-ethnic-beauty-illustration_23-2150216745.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=ais" />
                        </div>
                        <p>Dieynaba Séne</p>
                    </div>
                    <div className="c1">
                        <div className="image">
                            <img src="https://img.freepik.com/premium-photo/cartoon-character-with-pink-hoodie-that-says-girl-power-it_618582-2658.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.1.513108714.1692835132&semt=ais" />
                        </div>
                        <p>Dieynaba Hamady</p>
                    </div>
                    <div className="c1">
                        <div className="image">
                            <img src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611759.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=ais" />
                        </div>
                        <p>Veronique Diatta</p>
                    </div>
                    <div className="c1">
                        <div className="image">
                            <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671136.jpg?size=626&ext=jpg&uid=R121268218&ga=GA1.2.513108714.1692835132&semt=ais" />
                        </div>
                        <p>Mariama Sambou</p>
                    </div>
                   
                </div>
            </section>
        </>
    )
}

export default About;