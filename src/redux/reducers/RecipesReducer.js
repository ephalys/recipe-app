import { RECIPES_INIT } from '../actions/RecipesActions';
const INITIAL_STATE = {
	recipes: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RECIPES_INIT:
			return { recipes: action.payload };
	}
	return state;
}
