import React, { useState, useEffect } from 'react'
import { Rnd } from "react-rnd";
import '../Styles/Card.css'
import { Tooltip } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@material-ui/core';



const Card = ({ Card, x, y }) => {

    const [disable, setDisable] = useState(false);
    

    const [count, setCount] = useState(false);

    useEffect(() => {
     const timeout = setTimeout(() => {
        setCount(1, true);
      }, 3000);
    },[setCount]);
    

    const onAlert = () => {
        //console.log("Alert")
        toast.dark('Drag Successfull', {
            position: "top-left"
        })
    }

    const onDisabled = () => {
        return setDisable(true)
    }


    {
        if (count == true) {
            return (
                <div>
                    <div>
                        <button disabled={disable} onClick={()=>onDisabled} className="btn" type="button">{Card}</button>
                    </div>
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
                <CircularProgress />
            </div>
        }
    }
}

export default Card