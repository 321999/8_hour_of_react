import React from "react";
import "./board.css";
import Card from "../../card/card";
import {MoreHorizontal} from "react-feather";
import Editable from "../../editable/editable";
// import Example from "../../editable/editableform";
export default function Boards() {
    return (
        <div className="board" style={{border:"1px solid blue"}}>
            <div className="board_top">
                <p className="board_top_title">work to complete   
                <span>2</span>
                  {/* <MoreHorizontal/> */}
                  
                </p>
                {/* <i>MoreHorizontal </i> */}
                {/* <MoreHorizontal/> */}
                <MoreHorizontal/>


            </div>
            <div className="board_cards"  style={{border:"1px solid yellow"}}>
                {/* <h1>c 1</h1>
                <h1>c 2</h1> */}
                <Card/>
                <Card/>
                <Card/>
                {/* <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/> */}
                <Editable
                displayClass="boards_card_add"
                text="Add card"
                placeholder=""
                />
                {/* <Example/> */}

            </div>
            {/* <h1>board</h1> */}
        </div>
    )
}