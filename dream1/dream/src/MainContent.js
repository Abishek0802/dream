import * as React from "react";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import "./MainContent.css";

export default function MainContent() {
    return (
        <>
            <Box sx={{height: "482px"}} className="no1">
                <Link to="/Page2" className="no  ">
                    BUYING
                </Link>
                <Link to="/Page3" className="no  ">
                    SELLING
                </Link>
                <Link to="/Page4" className="no  ">
                    ELECTRONIC SERVICE
                </Link>
            </Box>
        </>
    );
}
