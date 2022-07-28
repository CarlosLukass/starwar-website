import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../../../store/appContext.js'
import Cards from './cards/Cards.jsx'

const AllItems = () => {

  const { store } = useContext(Context)

  return (
    <div className='row gx-3 gy-2 row-cols-2 cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mb-4 mt-2'>
      {
        !store.isLoading
          ?
          store[store.category].map((character, i) => {
            return (
              <div key={i} className='col' >
                <Link to={`/details/${store.category}/${character.uid}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <Cards id={character.uid} categorie={store.category} name={character.name} />
                </Link>
              </div>
            )
          })
          :
          <div className='d-flex justify-content-center align-items-center my-4' style={{ width: 100 + '%', height: 70 + 'vh' }}>
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
      }

    </div>
  )
}

export default AllItems