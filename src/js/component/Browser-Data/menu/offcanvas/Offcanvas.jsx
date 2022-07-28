import React, { useContext } from 'react'
import { Context } from '../../../../store/appContext'
import { Link, useParams } from 'react-router-dom'

function Offcanvas() {

  const { store, actions } = useContext(Context)

  return (
    <>
      <div className="offcanvas offcanvas-end" style={{ backgroundColor: 'black' }} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">My Favorites</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {
            store.favorites.map((item, index) => {
              return (
                <div key={index} className='d-flex justify-content-between'>
                  <Link to={`/details/${item.category}/${item.id}`} style={{ textDecoration: 'none' }}>
                    <div className='d-flex justify-content-between my-2'>
                      <div className='d-flex align-items-center'>
                        <img src={item.imageURL} width={40} height={40} alt="" />
                        <h4 className='text-white mx-2 my-0'>{item.name}</h4>
                      </div>
                    </div>
                  </Link>
                  <div className='d-flex align-items-center'>
                    <button onClick={() => actions.removeFavorite(index)} className='btn-close btn-close-white' />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Offcanvas