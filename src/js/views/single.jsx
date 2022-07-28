import React, { useState, useEffect, useContext } from "react";
import HeaderCleaner from "../component/headerCleaner.jsx";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

// image Background
import background from "../../assets/main-bg.jpg"

export const Single = () => {
	const { store, actions } = useContext(Context);
	let { category, id } = useParams()


	const [info, setInfo] = useState({
		data: null,
		url_image: category === 'people'
			? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
			: `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`
	})

	const [isLoading, setIsLoading] = useState(true)
	const isFavorite = info.data != null ? store.favorites.some(e => e.name === info.data.name) : ''

	useEffect(() => {
		setIsLoading(true)
		fetch(`https://www.swapi.tech/api/${category}/${id}`)
			.then(res => res.json())
			.then(data => {
				setInfo({
					data: data.result.properties,
					isLoading: false,
					url_image: category === 'people'
						? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
						: `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`
				})
				setIsLoading(false)

			})

	}, [category, id])

	return (
		<div className="background" style={{ backgroundImage: `url(${background})` }}>
			<HeaderCleaner />

			<div className="container mt-3" style={{ cursor: 'pointer' }}>
				<Link to='/'>
					<p className="text-white">← Back to home</p>
				</Link>
			</div>

			<div className="container mt-5">
				<div className="row">


					{
						!isLoading
							?
							<div className="col-4 d-flex justify-content-center">
								<img src={info.url_image} style={{ width: 100 + '%', height: 500, objectFit: 'cover' }} alt={`${category}_image`} />
							</div>

							:
							''
					}

					{
						!isLoading
							? <div className="col-8 text-white">
								<h6 className="text-muted">{category === 'people' ? 'Characters' : category}</h6>

								<div className="d-flex justify-content-between">
									<h1>{info.data.name}</h1>
									<div>
										<div onClick={() => {
											isFavorite ? actions.removeFavorite(store.favorites.findIndex(element => element === info.data.name)) : actions.addNewFavorite(category, id, info.data.name, info.url_image)
										}} className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-light'}`}>
											<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
												<path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
											</svg></span>
											<span className="mx-2">{isFavorite ? 'Remove from favorites' : 'Save in favorites'}</span>
										</div>
									</div>
								</div>
								<hr />
								<ul>
									<h3><li>Gender: {info.data.gender}</li></h3>
									<h3><li>Birth Year: {info.data.birth_year}</li></h3>
									<h3><li>Height: {info.data.height}</li></h3>
									<h3><li>Hair Color: {info.data.hair_color}</li></h3>
									<h3><li>Skin color: {info.data.skin_color}</li></h3>
									<h3><li>Eye Color: {info.data.eye_color}</li></h3>
								</ul>
							</div>
							: <div className="col-8 d-flex justify-content-center align-items-center">
								<div className="spinner-border text-light" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
					}
				</div>
			</div>

		</div>
	);
};