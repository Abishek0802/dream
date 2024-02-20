// Login.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data.message);
        // Redirect to the desired page or handle login success
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        // Handle login error
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          className="bg1"
          sx={{ width: "500px", height: "450px", marginTop: "120px", marginLeft: "90px" }}
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
            height: "350px",
            width: "25%",
            marginLeft: "15%",
            marginTop: "10%",
            padding: "10px",
            "&:hover": { transform: "scale(1.1)" },
          }}
        >
          <Typography variant="h4" sx={{ backgroundColor: "black", color: "white", borderRadius: 2 }}>
            WELCOME BACK
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              sx={{ margin: "5px" }}
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
              sx={{ margin: "5px" }}
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

            <Button
              sx={{
                margin: "10px",
                backgroundColor: "black",
                color: "white",
                "&:hover": { backgroundColor: "black", scale: "1.1" },
              }}
              variant="outlined"
              type="submit"
            >
              LOGIN
            </Button>
          </form>
          <Typography>
            Don't have an account -
            <Link to="/Signup" className="link">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Login;
