import React, { useContext } from 'react'
import HeaderCleaner from '../headerCleaner.jsx'
import AllItems from './items/AllItems.jsx'
import Pagination from './menu/Pagination.jsx'
import MenuItems from './menu/MenuItems.jsx'

import './browserData.css'

const BrowserData = () => {

  return (
    <div className='vh-100'>
      <HeaderCleaner />

      <div className='container mt-3'>
        <MenuItems />
        <AllItems />
        <div className='mt-3 d-flex justify-content-center'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default BrowserData