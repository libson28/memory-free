// MesVoitures.js
import React, { Component } from 'react';
import Home from './Accueil';


class AddMemoire extends Component {
    constructor(props) {
        super(props);

        this.state = {
          TabMemories : [
  {
    image: "https://img.freepik.com/free-vector/student-standing-desk-holding-textbooks_1262-21423.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Mémoire de Licence",
    text: "Analyse comparative des modèles de gestion des ressources humaines dans les entreprises du secteur technologique.",
  },
  {
    image: "https://img.freepik.com/free-photo/beautiful-brunette-woman-staying-her-workplace_273609-37505.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Projet de Fin d'Études",
    text: "Conception et développement d'une application mobile pour la gestion efficace des tâches académiques.",
  },
  {
    image: "https://img.freepik.com/free-vector/group-therapy-concept_52683-46089.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Mémoire de Master en Psychologie",
    text: "Étude longitudinale sur l'impact des traumatismes d'enfance sur le développement psychologique à l'âge adulte.",
  },
  {
    image: "https:img.freepik.com/free-photo/african-american-lady-chair-taking-notes-near-safety-helmet-model-house-table_23-2148039937.jpg?size=626&ext=jpg&ga=GA1.1.1650161440.1694444933&semt=ais",
    title: "Mémoire de Master en Génie Civil",
    text: "Analyse de la durabilité des matériaux de construction dans les projets d'infrastructures urbaines.",
  },
  {
    image: "https://img.freepik.com/free-photo/3d-representation-dna_23-2150471434.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Projet de Recherche en Biologie Moléculaire",
    text: "Caractérisation des mécanismes moléculaires impliqués dans la régulation génique lors de la différenciation cellulaire.",
  },
  {
    image: "https://img.freepik.com/free-photo/map-world-with-money-magnifying-glass_23-2147604728.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Mémoire de Master en Économie",
    text: "Évaluation des politiques monétaires dans un contexte de crise économique mondiale : le cas de la dernière décennie.",
  },
  {
    image: "https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-789.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Mémoire de Master en Informatique",
    text: "Optimisation des algorithmes de traitement du langage naturel pour améliorer la compréhension sémantique des textes.",
  },
  {
    image: "https://img.freepik.com/free-photo/african-businesswoman-reading-documents-signing-its-while-business-partners-sharing-paperwork-sitting-conference-table-broadroom-executive-director-meeting-shareholders-start-up-office_482257-13876.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Projet de Recherche en Sciences Politiques",
    text: "Analyse des dynamiques politiques dans les sociétés post-conflit : le rôle des institutions internationales.",
  },
  {
    image: "https://img.freepik.com/free-vector/smart-city-background-with-buildings-road_23-2147554340.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Mémoire de Master en Architecture",
    text: "Conception écologique : Intégration des principes de durabilité dans la planification urbaine contemporaine.",
  },
  {
    image: "https://img.freepik.com/free-photo/businesswoman-having-online-meeting_23-2148940742.jpg?size=626&ext=jpg&ga=GA1.2.1650161440.1694444933&semt=ais",
    title: "Projet de Fin d'Études en Marketing",
    text: "Stratégies de marketing numérique : Analyse des campagnes réussies et des tendances émergentes.",
  },
            ],
        };
    }
   
    render() {
        return (
           
            <Home TabMemoires={this.state.TabMemories} />
        )
        
    }
}

export default AddMemoire;






















