import IconButton from "@material-ui/core/IconButton";
import {Delete, Edit, FileCopy} from "@material-ui/icons";
import React, {useContext} from "react";
import {store} from "./Store";
import {StyledTableCell, StyledTableRow} from "./StyledCells";

export const RecipesRows = () => {
    const context = useContext(store);
    const {recipes} = context.state;

    const handleCopy = (item) => {
        context.dispatch({type: "copyItem", value: item});
    };

    const handleDelete = (item) => {
        context.dispatch({type: "deleteItem", value: item});
    };

    const handleEdit = (item) => {
        context.dispatch({type: "showModal", value: item});
    };
    return recipes.map((item) => (
        <StyledTableRow key={item.id}>
            <StyledTableCell component="th" scope="row">
                {item.title}
            </StyledTableCell>
            <StyledTableCell align="right">{item.description}</StyledTableCell>
            <StyledTableCell align="right">
                {item.ingredients.join(", ")}
            </StyledTableCell>
            <StyledTableCell align={"right"}>
                <IconButton aria-label="delete" onClick={() => handleDelete(item)}>
                    <Delete fontSize="small"/>
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleEdit(item)}>
                    <Edit fontSize="small"/>
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleCopy(item)}>
                    <FileCopy fontSize="small"/>
                </IconButton>
            </StyledTableCell>
        </StyledTableRow>
    ));
};
