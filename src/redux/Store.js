import { createStore, combineReducers, applyMiddleware } from "redux";
import ServicesReducer from "./reducers/ServicesReducer";
import RecipesReducer from "./reducers/RecipesReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	serviceReducer: ServicesReducer,
	recipesReducer: RecipesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));