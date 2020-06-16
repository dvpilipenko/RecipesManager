import React, {createContext, useReducer} from "react";
import {v4 as genId} from "uuid";

export const store = createContext();

const emptyModal = {
    id: "",
    title: "",
    description: "",
    ingredients: [],
};
const initialState = {
    recipes: [
        {
            id: genId(),
            title: "Sword",
            description: "Grete sword from Iron and wood",
            ingredients: ["Iron", "Wood"],
        },
        {
            id: genId(),
            title: "Burning Rose",
            description: "we just set fire to this flower",
            ingredients: ["Flowers", "Fire"],
        },
    ],
    modalRecipe: emptyModal,
    isShowModal: false,
    ingredientsList: [
        "Iron",
        "Flowers",
        "Stone",
        "Water",
        "Plastic",
        "Fire",
        "Wood",
    ],
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
            const newItem = {...action.value, id: genId()};
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
                action.value.id = genId();
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
