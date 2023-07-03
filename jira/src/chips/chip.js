import React from "react";
import "./chip.css";

export default function Chip(props) {
  return (
    <div className="chip" style={{ backgroundColor: props.color }}>
      {props.text}
      {/* agr onclose hua to close kro otherwise return none */}

      {props.close && <X onclick={props.onClose?props.onClose:()=>""}/>}
    </div>
  );
}

function X() {
  return <span>X</span>; // Placeholder component for the "X" element
}
