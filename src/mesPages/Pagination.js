// import React, { useState } from 'react';

// const Pagination = ({ data, itemsPerPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calcul du nombre total de pages
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   // Calcul de l'indice de début et de fin pour les éléments affichés sur la page actuelle
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Extraction des éléments à afficher sur la page actuelle
//   const currentItems = data.slice(startIndex, endIndex);

//   // Mise à jour de la page actuelle
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       {/* Affichage des éléments de la page actuelle */}
//       <ul>
//         {currentItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       {/* Affichage de la pagination */}
//       <ul>
//         {Array.from({ length: totalPages }).map((_, index) => (
//           <li
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             style={{
//               cursor: 'pointer',
//               padding: '5px',
//               border: '1px solid #ccc',
//               borderRadius: '3px',
//               marginRight: '5px',
//               background: currentPage === index + 1 ? '#007bff' : 'transparent',
//               color: currentPage === index + 1 ? '#fff' : '#000',
//             }}
//           >
//             {index + 1}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;
