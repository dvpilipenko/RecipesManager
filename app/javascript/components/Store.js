import React, {createContext, useReducer} from "react";
import {getMockData, getMockIngredients} from "./Mock";
import {HelperService} from "./HelperService";

export const store = createContext();

const emptyModal = {
    id: "",
    title: "",
    description: "",
    ingredients: [],
};
const initialState = {
    recipes: getMockData(),
    modalRecipe: emptyModal,
    isShowModal: false,
    ingredientsList: getMockIngredients(),
};

const reducer = (state, action) => {
    switch (action.type) {
        case "showModal":
            return {
                ...state,
                isShowModal: true,
                modalRecipe: action.value ? action.value : emptyModal,
            };
        case "copyItem": {
            const newItem = {...action.value, id: HelperService.GenId()};
            return {
                ...state,
                recipes: [...state.recipes, newItem],
            };
        }
        case "deleteItem": {
            return {
                ...state,
                recipes: [
                    ...state.recipes.filter((item) => item.id !== action.value.id),
                ],
            };
        }
        case "saveRecipe":
            if (action.value.id === "") {
                action.value.id = HelperService.GenId();
                state.recipes.push(action.value);
            } else {
                const index = state.recipes.findIndex(
                    (item) => item.id === action.value.id
                );
                state.recipes[index] = action.value;
            }
            return {
                ...state,
                isShowModal: false,
            };
        case "hideModal":
            return {
                ...state,
                isShowModal: false,
            };
        default:
            return state;
    }
};

export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <store.Provider value={{state, dispatch}}>{children}</store.Provider>
    );
};
