import {useContext} from "react";
import {store} from "./Store";
import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

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
                .filter(item => {
                    return (
                        item.ingredients.every(elem =>
                            props.ingredients.includes(elem)
                        ) &&
                        item.ingredients.length === props.ingredients.length &&
                        modalRecipe.id !== item.id
                    );
                })
                .map(item => item.title)
            : [];

    return filteredRecipes.length ? (
        <Box py={1}>
            <Typography className={classes.header}>
                other recipes with the same ingredients:
            </Typography>
            <Typography>{filteredRecipes.join(", ")}</Typography>
        </Box>
    ) : (
        <></>
    );
};
