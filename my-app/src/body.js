import React from "react";
import './index.css'
import {
    Accordion,
    Avatar,
    AccordionSummary,
    AccordionDetails,
    Dialog,
    Typography,
    Stack,
    TextField,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Box,
    FormGroup,
    FormControlLabel,
    IconButton,
  } from "@mui/material";
import Button from "@mui/material/Button";


export const Body = () => {
    return (
        <div className="body">
            <h1 className="body-header">Hey, I'm Erick... An Aspiring <br></br>
                Software Engineer From Miami.
            </h1>
            <p className="body-text">&#128013; I'm a developer who is passionate about learning new technologies and building cool stuff. 
                <br></br>I'm currently working on a few projects and learning new technologies. I'm also looking for a job 
                <br></br>as a senior student developer. If you have any questions or want to collaborate on a project, 
                <br></br>feel free to reach out to me.</p>
            <h1 className="projects"> Featured Projects.</h1>
            <img src="" alt="Compsigh Web Development"></img>
        </div>
    )
}