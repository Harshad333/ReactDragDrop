import React, { useState } from 'react'
import { Rnd } from "react-rnd";
import '../Styles/Card.css'
import { Tooltip } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@material-ui/core';



const Card = ({ Card, x, y }) => {

    const [isLoadding, setIsLoadding] = useState("false")

    const onAlert = () => {
        //console.log("Alert")
        toast.dark('Drag Successfull', {
            position: "top-left"
        })
    }


    {
        if (isLoadding === "false") {
            return (
                <div>
                    <Tooltip title={Card} enterTouchDelay={0} leaveDelay={100} arrow>
                        <Rnd onDragStop={onAlert}
                            default={{
                                x: x, y: y,
                                width: 250,
                                height: 140
                            }} className="Card" key={Card}
                        >
                            <div>{Card}</div>
                        </Rnd>
                    </Tooltip>
                    
                    <ToastContainer />
                </div>
            )
        } else {
            return <div className="Sppiner">
                <CircularProgress/>
            </div>
        }
    }
}

export default Card
