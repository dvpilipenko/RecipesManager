import {useContext} from "react";
import {store} from "./Store";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import DialogContentText from "@material-ui/core/DialogContentText";
import {HelperService} from "./HelperService";

const useStyles = makeStyles({
    container: {
        marginTop: 15,
    },
    header: {
        fontWeight: "bold",
    },
});

export const SameRecipes = (props) => {
    const classes = useStyles();
    const context = useContext(store);
    const {recipes, modalRecipe} = context.state;
    const filteredRecipes =
        recipes && props.ingredients.length
            ? recipes
                .filter(
                    item =>
                        HelperService.GetFullIntersection(
                            item.ingredients,
                            props.ingredients
                        ) && modalRecipe.id !== item.id
                )
                .map(item => item.title)
            : [];

    return filteredRecipes.length ? (
        <DialogContentText className={classes.container}>
            <Typography className={classes.header}>
                Other recipes with the same ingredients:
            </Typography>
            <Typography>{filteredRecipes.join(", ")}</Typography>
        </DialogContentText>
    ) : null;
};
