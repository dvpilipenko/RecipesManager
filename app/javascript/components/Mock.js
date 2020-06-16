import {HelperService} from "./HelperService";


export const getMockData = () => {
    return [
        {
            id: HelperService.GenId(),
            title: "Sword",
            description: "Grete sword from Iron and wood",
            ingredients: ["Iron", "Wood"],
        },
        {
            id: HelperService.GenId(),
            title: "Burning Rose",
            description: "we just set fire to this flower",
            ingredients: ["Flowers", "Fire"],
        },
    ];
};

export const getMockIngredients = () => {
    return ["Iron", "Flowers", "Stone", "Water", "Plastic", "Fire", "Wood"];
};
