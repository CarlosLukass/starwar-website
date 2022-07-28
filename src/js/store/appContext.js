import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.getPeople();
			state.actions.getPlanets();
			state.actions.getVehicles();
			state.actions.getStarships();
			state.actions.getSpecies();
		}, []);

		useEffect(() => {
			if (state.store.category === 'people' || state.store.prev_category === 'people') {
				state.actions.getPeople(state.store.actual_page);
			}
			if (state.store.category === 'planets' || state.store.prev_category === 'planets') {
				state.actions.getPlanets(state.store.actual_page);
			}
			if (state.store.category === 'species' || state.store.prev_category === 'species') {
				state.actions.getSpecies(state.store.actual_page);
			}
			if (state.store.category === 'starships' || state.store.prev_category === 'starships') {
				state.actions.getStarships(state.store.actual_page);
			}
			if (state.store.category === 'vehicles' || state.store.prev_category === 'vehicles') {
				state.actions.getVehicles(state.store.actual_page);
			}

		}, [state.store.actual_page, state.store.prev_category])

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
