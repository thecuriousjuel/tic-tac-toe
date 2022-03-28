import React, { useState } from "react";
import "./App.css"
import Icon from "./components/Icon"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactTostify.css"

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";

const itemArray = new Array(9).fill("empty")

const App = () => {
    const [isCross, setIsCross] = useState(false)
    const [winMsg, setWinMsg] = useState("")

    const reloadGame = () => {

    }

    const checkIsWinner = () => {

    }

    const changeItem = itemNumber => {

    }



    return (

    );
}

export default AppendMode;