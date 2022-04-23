import React, { useState,useEffect } from "react";
import ClasseForm from './ClasseForm'
import PageHeader from "./PageHeader";
import axios from "axios";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import {
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  TableHead,
  Table,
  TableSortLabel,
} from "@mui/material/";
import { makeStyles } from "@mui/styles";
// import Controls from "../../components/controls/Controls";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Popup from "./Popup";
import Controls from "../Controls/Controls";
import { nanoid } from "nanoid";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SideBar from "./SideBar";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: "5rem",
  },
  searchInput: {
    width: "75%",
    marginLeft: "3rem",
    display: "flex",
    flexDirection: "row",
    gap: "3rem",
  },
  newButton: {
    marginRight: "4rem",
    marginLeft: "4rem",
  },
}));

const headCells = [
  { id: "nom", label: "Nom de classe" },
  { id: "capacite", label: "Capacite de classe" },
  { id: "niveau", label: "Niveau" },
  { id: "actions", label: "Actions", disableSorting: true },
];

const Classe = () => {
  
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState([]);
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  
  const getRecords = async ()  => {
    axios.get('http://localhost:8000/api/classes')
      .then((response) => {
        const allRecords = response.data['hydra:member'];
        console.log("response: ", allRecords) 
        setRecords(allRecords);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(()=>{
    getRecords();
},[])

console.log(records);

  const [openPopup, setOpenPopup] = useState(false);
  const [orderBy, setOrderBy] = useState("asc");
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee) => {
    if (recordForEdit) {
      setRecords((prev) =>
        prev.map((p) => (p.id == employee.id ? employee : p))
      );
      setRecordForEdit(null);
    } else {
      setRecords((prev) => [...prev, employee]);
    }
    setOpenPopup(false);
    // setRecords(employeeService.getAllEmployees());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
        alignItems: "center",
      }}
    >
      <div>
        <SideBar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      >
        <PageHeader
          title="New Classe"
          subTitle="Form design with validation"
          icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        />
        <Paper className={classes.pageContent}>
          <Toolbar>
            <Controls.Input
              label="Search Classes"
              className={classes.searchInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleSearch}
            />
            <Controls.Button
              text="Add New"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => {
                setOpenPopup(true);
                setRecordForEdit(null);
              }}
            />
          </Toolbar>
          <Table style={{ marginTop: "2rem" }}>
            <TableHead>
              <TableRow style={{ backgroundColor: "#ADD8E6" }}>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    sortDirection={orderBy === headCell.id ? true : false}
                  >
                    {headCell.disableSorting ? (
                      headCell.label
                    ) : (
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? "desc" : "asc"}
                        onClick={() => {
                          // handleSortRequest(headCell.id);
                        }}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {records  && records.map && records.map((item ,id) => (
                <TableRow key={item.id}>
                  <TableCell>{item.nom}</TableCell>
                  <TableCell>{item.capacite}</TableCell>
                  <TableCell>{item.niveau}</TableCell>
                  <TableCell>
                    <Controls.ActionButton
                      color="primary"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <EditOutlinedIcon fontSize="small" />
                    </Controls.ActionButton>
                    <Controls.ActionButton
                      color="secondary"
                      onClick={() => {
                        setRecords((prev) =>
                          prev.filter((p) => p.id != item.id)
                        );
                      }}
                    >
                      <CloseOutlinedIcon fontSize="small" />
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <TblPagination /> */}
        </Paper>
        <Popup
          title="Salle Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <ClasseForm addOrEdit={addOrEdit} employee={recordForEdit} />
        </Popup>
      </div>
    </div>
  );
};

export default Classe;
