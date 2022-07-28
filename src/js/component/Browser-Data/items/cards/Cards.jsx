import React from 'react'

const Cards = ({ id, categorie, name }) => {


  const url =
    categorie === 'people'
      ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
      : `https://starwars-visualguide.com/assets/img/${categorie}/${id}.jpg`

  const defaultImg = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"

  return (
    <>
      <div className="card pop-up" style={{ width: 16 + 'rem', cursor: 'pointer' }} >
        <div>
          <img src={url} height={300} className="card-img-top" style={{ objectFit: 'cover' }} alt="..." onError={(e) => (e.target.onerror = null, e.target.src = defaultImg)} />
        </div>
        <div className="card-body" >
          <h5 className="card-title" > {name} </h5 >
        </div >
      </div >
    </>
  )
}

export default Cards