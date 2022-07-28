
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			starships: [],
			species: [],
			favorites: [],
			category: 'people',
			prev_category: null,
			total_pages: {
				people: 0,
				planets: 0,
				vehicles: 0,
				starships: 0,
				species: 0,
			},
			actual_page: 1,
			isLoading: true
		},
		actions: {

			getPeople: (page) => {
				fetch(page > 1 ? `https://www.swapi.tech/api/people?page=${page}&limit=10` : 'https://www.swapi.tech/api/people')
					.then(res => res.json())
					.then(
						data => {
							setStore({
								people: data.results,
								total_pages: { ...getStore().total_pages, people: data.total_pages },
								isLoading: false
							})
						})
					.catch();
			},

			getPlanets: (page) => {
				fetch(page > 1 ? `https://www.swapi.tech/api/planets?page=${page}&limit=10` : 'https://www.swapi.tech/api/planets')
					.then(res => res.json())
					.then(data => {
						setStore({
							planets: data.results, total_pages: { ...getStore().total_pages, planets: data.total_pages },
							isLoading: false
						})
					})
					.catch();
			},

			getVehicles: (page) => {
				fetch(page > 1 ? `https://www.swapi.tech/api/vehicles?page=${page}&limit=10` : 'https://www.swapi.tech/api/vehicles')
					.then(res => res.json())
					.then(data => {
						setStore({
							vehicles: data.results, total_pages: { ...getStore().total_pages, vehicles: data.total_pages },
							isLoading: false
						})
					})
					.catch();
			},

			getSpecies: (page) => {
				fetch(page > 1 ? `https://www.swapi.tech/api/species?page=${page}&limit=10` : 'https://www.swapi.tech/api/species')
					.then(res => res.json())
					.then(data => {
						setStore({
							species: data.results, total_pages: { ...getStore().total_pages, species: data.total_pages },
							isLoading: false
						})
					})
					.catch();
			},

			getStarships: (page) => {
				fetch(page > 1 ? `https://www.swapi.tech/api/starships?page=${page}&limit=10` : 'https://www.swapi.tech/api/starships')
					.then(res => res.json())
					.then(data => {
						setStore({
							starships: data.results, total_pages: { ...getStore().total_pages, starships: data.total_pages },
							isLoading: false
						})
					})
					.catch();
			},

			setNewPage: (page) => {
				setStore({
					[getStore()[getStore().category]]: [],
					actual_page: page,
					isLoading: true
				})
			},

			setFocusOption: (categorie) => {
				setStore({
					[getStore()[getStore().prev_category]]: [],
					prev_category: getStore().category,
					category: categorie, actual_page: 1,
				})

			},

			addNewFavorite: (category, id, name, image) => {
				const isDuplicate = getStore().favorites.some(el => {
					return el.name === name
				})
				if (!isDuplicate) {
					setStore({
						favorites: [
							...getStore().favorites,
							{
								id: id,
								category: category,
								name: name,
								imageURL: image,
								isFavorite: true

							}
						]
					})
					console.log(getStore().favorites)
				}

			},

			removeFavorite: (index) => {
				const newFavorites = [...getStore().favorites]
				newFavorites.splice(index, 1)
				setStore({
					favorites: newFavorites
				})
			}
		}
	};
};

export default getState;
