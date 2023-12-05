import React, {useState} from "react";
import {Link} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./Signup.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-up logic here, such as sending data to the server

        // For this example, let's just log the form data to the console
        console.log("Form Data:", formData);
    };

    return (
        <>
            <Box sx={{display: "flex"}}>
                <Box
                    className="bg"
                    sx={{width: "500px", height: "500px", marginTop: "120px", marginLeft: "70px"}}
                ></Box>
                <Box
                    className="outer"
                    sx={{
                        transition: "transform 200ms",
                        transitionTimingFunction: "cubic-bezier(.25,-3,5,4)",
                        boxShadow: 9,
                        borderRadius: 2,
                        backgroundColor: "rgb(147, 208, 208)",
                        textAlign: "center",
                        height: "450 px",
                        width: "25%",
                        marginLeft: "15%",
                        marginTop: "10%",
                        padding: "10px",
                        "&:hover": {transform: "scale(1.1)"},
                    }}
                >
                    <Typography variant="h4" sx={{backgroundColor: "black", color: "white", borderRadius: 2}}>
                        Sign up
                    </Typography>
                    <form class="form" onSubmit={handleSubmit}>
                        <TextField
                            sx={{margin: "5px"}}
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            id="standard-basic"
                            label="Username"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{margin: "5px"}}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            id="standard-basic"
                            label="E-mail"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{margin: "5px"}}
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{margin: "5px"}}
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            id="standard-basic"
                            label="Conform pass"
                            variant="standard"
                        />
                        <br />
                        <Button
                            sx={{
                                margin: "10px",
                                backgroundColor: "black",
                                color: "white",
                                "&:hover": {backgroundColor: "black", scale: "1.1"},
                            }}
                            variant="outlined"
                            type="submit"
                        >
                            SIGN UP
                        </Button>
                    </form>
                    <Typography>
                        Already a Member Click -
                        <Link to="/Login" className="link">
                            Login
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default SignUp;
