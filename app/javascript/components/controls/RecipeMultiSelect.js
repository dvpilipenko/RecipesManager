import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export const RecipeMultiSelect = (props) => {
    return <FormControl fullWidth>
        <InputLabel id={`${props.id}-label`}>{props.label}</InputLabel>
        <Select
            labelId={`${props.id}-label`}
            id={`${props.id}-checkbox`}
            multiple
            value={props.value}
            onChange={e => props.onChange(e, props.id)}
            input={<Input/>}
            renderValue={(selected) => selected.join(', ')}
        >
            {props.list.map(name => (
                <MenuItem key={name} value={name}>
                    <Checkbox checked={props.value.indexOf(name) > -1}/>
                    <ListItemText primary={name}/>
                </MenuItem>
            ))}
        </Select>
    </FormControl>
}
