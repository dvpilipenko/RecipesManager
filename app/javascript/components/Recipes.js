import React,{useContext} from "react";
import {
    Container,
    Table,
    TableHead,
    TableContainer,
    TableRow,
    TableBody,
    Paper,
    Toolbar,
    Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import {Add} from "@material-ui/icons";
import {RecipesRows} from "./RecipesRows";
import {StyledTableCell} from "./StyledCells";
import {store} from "./Store";

const useStyles = makeStyles({
    table: {
        minWidth: 720,
    },
});

export const Recipes = () => {
    const context = useContext(store);
    const classes = useStyles();
    const handleAdd = () => {
        context.dispatch({type: "showModal"});
    };
    return (
        <Container>
            <Paper>
                <Toolbar>
                    <Typography>
                    RECIPES
                    </Typography>
                    <IconButton onClick={() => handleAdd()}>
                        <Add></Add>
                    </IconButton>
                </Toolbar>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="right">Description</StyledTableCell>
                                <StyledTableCell align="right">ingredients</StyledTableCell>
                                <StyledTableCell align="right">Action </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <RecipesRows></RecipesRows>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};
