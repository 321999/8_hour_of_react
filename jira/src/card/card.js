import React from "react";
import {CheckSquare, Clock, MoreHorizontal} from "react-feather";
import "./card.css"; 
import Chip from "../chips/chip";

export default function Card(){
    return(
        <div className="card">
            <div className="card_top">
                {/* this is the card ka top */}
                <div className="card_top_labels">
                    {/* this is the card ka label  */}

                    {/* ye user decide krega ki kya krna hi with */}
                        <Chip text="hello" color="green"/>
                        {/* <Chip close text="hello" color="green"/> */}


                </div>
                <MoreHorizontal/>
            </div>
            <div className="card_title">
                card title

            </div>

            <div className="card_footer">
                <p><Clock/>1 july</p>
                <p><CheckSquare/>1/3</p>
                {/* <p><checksquare/></p> */}
            </div>

    

        </div>
    )
}