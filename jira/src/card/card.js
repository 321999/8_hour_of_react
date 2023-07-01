import React from "react";
import {MoreHorizontal} from "react-feather";
import "./card.css"; 
import Chip from "../chips/chip";

export default function Card(){
    return(
        <div className="card">
            <div className="card_top">
                <div className="card_labels">
                        <Chip text="hello" color="green"/>
                        <Chip close text="hello" color="green"/>

                </div>
                <MoreHorizontal/>
            </div>
        </div>
    )
}