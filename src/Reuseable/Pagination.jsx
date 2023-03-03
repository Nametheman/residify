import React from 'react'
import classes from './Pagination.module.css'

const Pagination = ({postsPerPage, totalPosts, paginate, nextPagination, prevPagination }) => {
    const pageNumbers = []

    for(let i =1; i <= Math.ceil(totalPosts / postsPerPage); i++ ) {
        pageNumbers.push(i)
    }   


  return (
    <nav className={classes.container}>
        <div className={classes.paginationWrapper}>
            <button  onClick={prevPagination}>Previous</button>
            {pageNumbers.map(number => (
            <div key={number} className={classes.numbers}>
                <a onClick={() => paginate(number)} href='#'>{number}</a>
            </div>
            ))}
            <button onClick={nextPagination}>Next</button>
        </div>
    </nav>
  )
}

export default Pagination