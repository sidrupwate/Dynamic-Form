import React, { } from "react";
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
} from "@mui/material";
import "../styles/style.css";

const Form = ({ formData, handleChange, formArray, handleSubmit }) => {

    if (!formArray.length) {
        return null;
    }
    return (
        <>

            <div className="form">
                <h1>Welcome</h1>
                {formArray.map((item, idx) => {
                    const { name, value, label, type, fieldoption } = item;

                    if (type === "textfield") {
                        return (


                            <TextField
                                key={idx}
                                label={label}
                                name={name}
                                value={value}
                                onChange={(e) => handleChange(e, name)}
                                type="text"
                                required
                                style={{ width: "350px" }}
                            />


                        );
                    }

                    if (type === "select") {
                        return (
                            <div>
                                <FormControl style={{ width: "100px" }} key={idx}>
                                    <InputLabel id={`select-label-${idx}`}>{label}</InputLabel>
                                    <Select
                                        labelId={`select-label-${idx}`}
                                        id={`select-${idx}`}
                                        value={value}
                                        label={label}
                                        onChange={(e) => handleChange(e, "age")}
                                        required
                                    >
                                        {fieldoption.map((i, index) => (
                                            <MenuItem key={index} value={i.value}>
                                                {i.name}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                </FormControl>
                            </div>

                        );

                    }

                }

                )

                }
                <div>
                    <Button style={{ width: "350px" }} variant="contained" onClick={handleSubmit}>Continue</Button>
                </div>
            </div>


        </>
    );
};

export default Form;
