import React, { useState } from "react";
import { X } from "react-feather";
// import './editable.cs'
import '/Users/kishore/Desktop/8hoursproject/jira/src/editable/editable.css'
export default function Editable(props) {
    const [showEdit, setShowEdit] = useState(false)
    return (

        <div className="editable">

            {
                showEdit ?
                    (<form className={`editable_edit  ${props.editClass || ""}`} >
                        <input autoFocus type="text" placeholder={props.placeholder || "enter item"} defaultValue={props.text}
                            onSubmit={(event) => {
                                // so that page reload na ho
                                event.preventDefault()
                                if (props.onSubmit) props.onSubmit()
                            }} />
                        <div className="editable_edit_footer">
                            <button type="submit">{props.buttonText || "Add"}</button>
                            <X onClick={() => setShowEdit(false)} />
                            {/*if(3>2)"3 is greher"*/}
                        </div>
                        {/* div ke badle form so that enter press krte hi buttonsubmit ho jaye */}
                    </form>)
                    : (<p className={`editable_display ${props.displayClass || ""}`} onClick={() => setShowEdit(true)}>{props.text || "Add item"}</p>)}
        </div>
    )
}