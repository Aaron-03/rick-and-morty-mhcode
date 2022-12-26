import React, { useContext, useEffect, useState } from 'react'
import { CharacterContext } from '../../contexts/character.context';

const Pagination = ({ currentPage, pages, next, prev, getItemsByPage }) => {

  // const { currentPage, pages, next, prev, getItemsByPage } = useContext(CharacterContext);

  const _pages = [ ...Array(pages) ].map((_, idx) => idx + 1);
  const [ arrPages, setArrPages ] = useState([]);

  const pagesToShow = 10;

  useEffect(() => {
    if (currentPage < 10) {
      setArrPages(_pages.slice(0, pagesToShow));
    }
  }, [ getItemsByPage ]);

  useEffect(() => {

    const resto = (pages % pagesToShow) + 1;

    const lastIndex = arrPages.length - 1;
    if (currentPage === arrPages[lastIndex] && arrPages.length > (pagesToShow - 1) && currentPage < _pages[_pages.length - 1]) {
      setArrPages(_pages.slice(currentPage - 1, (currentPage - 1) + (pagesToShow + 1)));
    } else if(currentPage === arrPages[0] && currentPage > 1) {
      const resta = (currentPage - (pagesToShow + 1)) < 0 ? 0 : currentPage - (pagesToShow + 1); 
      setArrPages(_pages.slice(resta, currentPage));
    } else if(currentPage === 1) {
      setArrPages(_pages.slice(0, pagesToShow));
    } else if(currentPage === _pages[_pages.length - 1]) {
      setArrPages(_pages.slice(_pages.length - resto));
    }
  }, [ currentPage ]);

  const handlePages = (type, pg) => {
    if (type === 'prev' && currentPage === arrPages[0]) {
      const resta = (currentPage - (pagesToShow + 1)) < 0 ? 0 : currentPage - (pagesToShow + 1); 
      setArrPages(_pages.slice(resta, currentPage));
    } else if(type === 'next' && currentPage === arrPages[arrPages.length - 1]) {
      setArrPages(_pages.slice(currentPage - 1, (currentPage - 1) + (pagesToShow + 1)));
    }
    getItemsByPage(pg);
  }


  return (
    <div className='pagination'>
      <button
        type='button'
        onClick={ () => getItemsByPage(_pages[0]) }
      >{'<<'}</button>
      {
        prev > 0
        ? (
          <button
            type='button'
            onClick={ () => handlePages('prev', prev) }
          >{'<'}</button>
        )
        : null
      }
      {
        arrPages.map(pg => (
          <button
            key={pg}
            type='button'
            className={`${ currentPage === pg ? 'active' : '' }`}
            onClick={ () => getItemsByPage(pg) }
          >{ pg }</button>
        ))
      }
      {
        next > 0
        ? (
          <button
            type='button'
            onClick={ () => handlePages('next', next) }
          >{'>'}</button>
        )
        : null
      }
      <button
        type='button'
        onClick={ () => getItemsByPage(_pages[_pages.length - 1]) }
      >{'>>'}</button>
    </div>
  )
}

export default Pagination;