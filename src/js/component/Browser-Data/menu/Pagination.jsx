import React, { useContext, useEffect } from 'react'
import { Context } from '../../../store/appContext'

const Pagination = () => {

  const { store, actions } = useContext(Context)

  const pages = []

  for (let i = 1; i <= store.total_pages[store.category]; i++) {
    pages.push(i)
  }

  return (
    <nav aria-label="Page navigation example mt-3">
      <ul className="pagination" style={{ cursor: 'pointer' }}>
        <li className="page-item">
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {
          pages.length > 0
            ? pages.map(page => {
              return (
                <li onClick={() => page !== store.actual_page ? actions.setNewPage(page) : ''} key={page} className={page === store.actual_page ? `page-item active` : `page-item`}><a className="page-link">{page}</a></li>
              )
            })
            : <li className="page-item"><a className="page-link">Loading...</a></li>
        }
        <li className="page-item">
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination