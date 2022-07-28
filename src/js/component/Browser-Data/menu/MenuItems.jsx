import React, { useContext } from 'react'
import { Context } from '../../../store/appContext'

const MenuItems = () => {

  const menu = ['people', 'planets', 'species', 'starships', 'vehicles']

  const { store, actions } = useContext(Context)

  return (
    <div className='text-white mb-3'>
      <div className='d-flex justify-content-center'>
        {menu.map((categorie, i) => {

          return (
            <div key={i + categorie}>
              {
                categorie !== 'vehicles'
                  ?
                  <div onClick={() => actions.setFocusOption(categorie)} className='d-flex'>
                    <h4 style={store.category === categorie ? { WebkitTextStroke: `${0.5}px blue` } : { cursor: 'pointer' }} className='mx-3'>{categorie}</h4>
                    <span>/</span>
                  </div>
                  :
                  <h4 onClick={() => actions.setFocusOption(categorie)} style={store.category === categorie ? { WebkitTextStroke: `${0.5}px blue` } : { cursor: 'pointer' }} className='mx-3' >{categorie}</h4>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MenuItems