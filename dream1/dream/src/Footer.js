import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Footer = () => {
    return (
        <Box
            sx={{
                border: 3,
                borderColor: "blue",
                height: "55px",
                marginTop: "35px",
                textAlign: "center",
                fontSize: "small",
                paddingTop: "40px",
                backgroundColor: "black",
            }}
        >
            <Link sx={{textDecoration: "none", fontWeight: "200", color: "white", padding: "15px", marginTop: "50%"}}>
                CONTACT INFO
            </Link>
            <Link sx={{textDecoration: "none", fontWeight: "200", color: "white", padding: "15px", marginTop: "50%"}}>
                PRIVACY POLICY
            </Link>
            <Link sx={{textDecoration: "none", fontWeight: "200", color: "white", padding: "15px", marginTop: "50%"}}>
                LIST OF SERVICE
            </Link>
            <Link sx={{textDecoration: "none", fontWeight: "200", color: "white", padding: "15px", marginTop: "50%"}}>
                COPYRIGHT INFO
            </Link>
        </Box>
    );
};

export default Footer;
