import React from 'react'
import { Tooltip } from '@material-ui/core';
import { toast } from 'react-toastify';
import { Rnd } from "react-rnd";

const Card = ({ Card, x, y, isDragDiseble }) => {

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 2px #ddd",
        background: "#f0f0f0",
        borderRadius: '25px'
    };



    const onAlert = () => {
        //console.log("Alert")
        toast.dark('Drag Successfull', {
            position: "top-left"
        })
    }


    return (
        <div>
            <Tooltip title={Card} enterTouchDelay={0} leaveDelay={100} arrow>
                <Rnd
                    style={style}
                    disableDragging={isDragDiseble}
                    onDragStop={onAlert}
                    default={{
                        x: x, y: y,
                        width: 320,
                        height: 200
                    }}
                    className="Card"
                    key={Card}
                >
                    {Card}
                </Rnd>
            </Tooltip>
        </div>
    )
}

export default Card