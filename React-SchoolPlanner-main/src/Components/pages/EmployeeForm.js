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
    .post('http://localhost:8000/api/enseignants', {
      nom:employee.nom,
      email:employee.email, 
      mobile:employee.mobile, 
      matiere:employee.matiere, 

    })
    .then(res => console.log(res.data))
    .catch(err => {
      console.log(err)
    });
}


export default function EmployeeForm(props) {
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
            label="Full Name"
            name="fullName"
            defaultValue={employee && employee.fullName}
            {...register("fullName")}
          />
          <TextField
            variant="outlined"
            label="Email"
            defaultValue={employee && employee.email}
            name="email"
            {...register("email")}
          />
          <TextField
            variant="outlined"
            label="Mobile"
            defaultValue={employee && employee.mobile}
            name="mobile"
            {...register("mobile")}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            name="matiere"
            label="Matieres"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            options={[
              { id: "1", title: "Physique" },
              { id: "2", title: "Math" },
            ]}
            error={errors.departmentId}
            defaultValue={employee && employee.matiere}
            {...register("matiere")}
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
