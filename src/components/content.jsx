import React from "react";

export default function Content(props) {
    return (
        <div className="bg-white w-3/5 my-4 m-auto min-h-[48rem]">
            {props.children}
        </div>
    )
}