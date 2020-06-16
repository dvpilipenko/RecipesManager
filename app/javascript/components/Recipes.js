import React, {useContext} from "react";
import {
    Container,
    Table,
    TableHead,
    TableContainer,
    TableCell,
    TableRow,
    TableBody,
    Paper,
    Toolbar,
    Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {store} from "./Store";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Edit, Add, FileCopy} from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles({
    table: {
        minWidth: 720,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.action.active,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export const Recipes = () => {
    const context = useContext(store);
    const {recipes} = context.state;
    const classes = useStyles();

    const handleCopy = (item) => {
        context.dispatch({type: "copyItem", value: item});
    };

    const handleDelete = (item) => {
        context.dispatch({type: "deleteItem", value: item});
    };

    const handleEdit = (item) => {
        context.dispatch({type: "showModal", value: item});
    };

    return (
        <Container>
            <Paper>
                <Toolbar>
                    <Typography>
                    RECIPES
                    </Typography>
                    <IconButton onClick={() => handleEdit()}>
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
                            {recipes.map((item) => (
                                <StyledTableRow key={item.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {item.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {item.description}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {item.ingredients.join(", ")}
                                    </StyledTableCell>
                                    <StyledTableCell align={"right"}>
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => handleDelete(item)}
                                        >
                                            <Delete fontSize="small"/>
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => handleEdit(item)}
                                        >
                                            <Edit fontSize="small"/>
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => handleCopy(item)}
                                        >
                                            <FileCopy fontSize="small"/>
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};
