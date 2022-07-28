import React from 'react'
import HeaderCleaner from './headerCleaner.jsx'
import '../../styles/sectionCarrousel.css'

const SectionCarrousel = ({ title }) => {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <HeaderCleaner />
      <div className='container-section d-flex text-white'>

        <div className='text-vertical'>
          <h1 className=''>{title}</h1>
        </div>

        <div className='overflow d-flex mx-4'>
          {
            data.map(e => {
              return (
                <div key={e} className='card-item'>
                  <img src="https://camikids.com/wp-content/uploads/2020/08/placeholder.png" alt="" />
                  <h2>Moovie Title</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci libero incidunt ipsam rem temporibus illum doloremque laboriosam at excepturi quos!</p>
                </div>
              )
            })
          }
        </div>


      </div>
    </>
  )
}

export default SectionCarrousel