import React from 'react';
import { Link } from 'react-router-dom';


const Pagination = ({ postsPerPage, totalPosts, paginateClick, currentPage }) => {
  const pagesCount = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pagesCount.push(i);
  }
  const limitCheck = postsPerPage * currentPage === totalPosts;
  return (
    <nav>
      <ul className='pagination'>
         <li className={currentPage === 1 ? "page-item disabled": "page-item"}>
          <Link onClick={() => paginateClick(currentPage-1)} className="page-link" 
          to={`/${currentPage-1}`} aria-label="Previous" tabindex="-1" aria-disabled="true">
            <span aria-hidden="true">&laquo;</span>
          </Link>
         </li>
        {pagesCount.map(number => (
          <li key={number} className={currentPage===number ? 'page-item active': 'page-item'}>
            <Link onClick={() => paginateClick(number)} to={`/${number}`} className='page-link'>
              {number}
            </Link>
          </li>
        ))}
        <li className={limitCheck ? "page-item disabled": "page-item"}>
        <Link onClick={() => paginateClick(currentPage+1)} className="page-link" 
        to={`/${currentPage+1}`} aria-label="Next" aria-disabled={limitCheck}>
           <span aria-hidden="true">&raquo;</span>
        </Link>
    </li>
      </ul>
    </nav>
  );
};

export default Pagination;
