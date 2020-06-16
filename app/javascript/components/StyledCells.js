import withStyles from "@material-ui/core/styles/withStyles";
import {TableCell, TableRow} from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.action.active,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
