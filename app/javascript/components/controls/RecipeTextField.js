import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const RecipeTextField = (props) => {
    return (
        <FormControl fullWidth>
            <TextField
                margin="dense"
                type="text"
                fullWidth
                {...props}
                onChange={(e) => props.onChange(e, props.id)}
            />
        </FormControl>
    );
};
