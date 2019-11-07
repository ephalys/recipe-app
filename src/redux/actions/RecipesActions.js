import { AsyncStorage } from 'react-native';

export const RECIPES_INIT = 'RECIPES_INIT';
export const RECIPES_ADD = 'RECIPES_ADD';
export const RECIPES_DELETE = 'RECIPES_DELETE';

export const initAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('recipes').then(data => {
            return dispatch({ type: RECIPES_INIT, payload: JSON.parse(data) });
        });
    };
};

export const addAsync = (recipeID) => {
    return dispatch => {
        AsyncStorage.getItem('recipes').then(data => {
            let tab = [];
            if (data !== null) {
                tab = JSON.parse(data);
            }
            if (tab.findIndex(e => e === recipeID) > -1) {
                tab.splice(tab.findIndex(e => e === recipeID), 1);
            }
            else {
                tab.push(recipeID);
            }
            AsyncStorage.setItem('recipes', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: RECIPES_INIT, payload: tab });
                });
        });
    }
};

export const deleteAsync = (recipeID) => {
    return dispatch => {
        AsyncStorage.getItem('recipes').then(data => {
            const tab = JSON.parse(data);
            tab.splice(tab.findIndex(e => e === recipeID), 1);
            AsyncStorage.setItem('recipes', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: RECIPES_INIT, payload: JSON.parse(data) });
                });
        });
    };
}
