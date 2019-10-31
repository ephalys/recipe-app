import axios from 'axios';

const id = 'ddc63e00';
const key = '93c13284eb0f99b2b3488aa03b9428e9';
const url = `https://api.edamam.com/search?app_id=${id}&app_key=${key}`;

class RecipeService {
    getRecipes(recipe = '9b5945e03f05acbf9d69625138385408') {
        let result = axios.get(`${url}&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipe}`);
        return result;
    }
}

export default RecipeService;