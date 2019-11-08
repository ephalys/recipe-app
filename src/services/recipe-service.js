import axios from 'axios';

const id = 'ddc63e00';
const key = '93c13284eb0f99b2b3488aa03b9428e9';
const url = `https://api.edamam.com/search?app_id=${id}&app_key=${key}`;

// Deuxième clé au cas où la première serait bloquée
// const id = 'e88b78ec';
// const key = 'bbd4c507bcb32d0d60b260777ab13223';
// const url = `https://api.edamam.com/search?app_id=${id}&app_key=${key}`;

class RecipeService {
    getRecipesById(id) {
        let sous_url = `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}`;
        return axios.get(`${url}&r=${sous_url}`);
    }
    
    getRecipesHome() {
        var tab = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let indexRandom = parseInt(Math.random() * 25);
        return axios.get(`https://api.edamam.com/search?q=${tab[indexRandom]}&app_id=ddc63e00&app_key=93c13284eb0f99b2b3488aa03b9428e9&from=0&to=10`);
    }
}

export default RecipeService;