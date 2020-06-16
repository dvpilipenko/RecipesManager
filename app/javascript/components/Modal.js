import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@material-ui/core";
import React, {useContext, useEffect} from "react";
import {store} from "./Store";
import {RecipeTextField} from "./controls/RecipeTextField";
import {SameRecipes} from "./SameRecipes";
import {RecipeMultiSelect} from "./controls/RecipeMultiSelect";

export const Modal = () => {
    const context = useContext(store);
    const {modalRecipe, ingredientsList, isShowModal} = context.state;
    const [form, setForm] = React.useState({
        id: modalRecipe.id,
        ingredients: modalRecipe.ingredients,
        title: modalRecipe.title,
        description: modalRecipe.description,
    });

    useEffect(() => {
        setForm(modalRecipe);
    }, [isShowModal]);

    const handleFormChange = (event, id) => {
        const result = {...form};
        result[id] = event.target.value;
        setForm(result);
    };

    const handleClose = () => {
        context.dispatch({type: "hideModal"});
    };

    const handleSave = () => {
        context.dispatch({type: "saveRecipe", value: form});
    };

    return (
        <Dialog open={isShowModal} onClose={handleClose} fullWidth>
            <DialogTitle>Recipe</DialogTitle>
            <DialogContent>
                <RecipeTextField
                    onChange={handleFormChange}
                    id={"title"}
                    label={"Title"}
                    value={form.title}
                ></RecipeTextField>
                <RecipeTextField
                    onChange={handleFormChange}
                    id={"description"}
                    label={"Description"}
                    value={form.description}
                ></RecipeTextField>
                <RecipeMultiSelect
                    onChange={handleFormChange}
                    value={form.ingredients}
                    label={"Ingredients"}
                    list={ingredientsList}
                    id={"ingredients"}
                ></RecipeMultiSelect>
                <SameRecipes ingredients={form.ingredients}></SameRecipes>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};
