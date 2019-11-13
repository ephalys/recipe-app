import RecipeService from "../../services/recipe-service";

const INITIAL_STATE = {
	recipeService: new RecipeService()
};

export default (state = INITIAL_STATE) => {
	return state;
};