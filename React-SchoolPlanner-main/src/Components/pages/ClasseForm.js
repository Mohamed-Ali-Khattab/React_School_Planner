import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../Controls/Controls";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { nanoid } from "nanoid";
import axios from "axios";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const add = employee => {
  
  return axios
    .post('http://localhost:8000/api/classes', {
      nom:employee.nom,
      capacite:employee.capacite,
      niveau:employee.niveau,
  
    })
    .then(res => console.log(res.data))
    .catch(err => {
      console.log(err)
    });
}

export default function ClasseForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { addOrEdit, employee } = props;

 
  const onSubmit = (data) => {
    const newEmployee = { ...data, id: nanoid() };
    if (employee) {
      const editedEmployee = { ...data, id: employee.id };
      addOrEdit(editedEmployee);
    } else {
      addOrEdit(newEmployee);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Nom de salle"
            name="nom"
            defaultValue={employee && employee.nom}
            {...register("nom")}
          />
          <TextField
            variant="outlined"
            label="Capacite"
            defaultValue={employee && employee.capacite}
            name="capacite"
            
            {...register("capacite")}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            name="niveau"
            label="Niveau"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            options={[
              { id: "1", title: "1ere" },
              { id: "2", title: "2eme" },
              { id: "3", title: "3eme" },
              { id: "4", title: "4eme" },
              { id: "5", title: "5eme" },
              { id: "6", title: "6eme" },
            ]}
            error={errors.departmentId}
            defaultValue={employee && employee.niveau}
            {...register("niveau")}
          />
          {/* <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    /> */}
          {/* <Controls.Checkbox
            name="isPermanent"
            
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          /> */}

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={reset} />
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
