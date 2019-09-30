import React from "react";

function Planchas(props) {
    console.log(props.match.params.admin_id)
    return(
        <div>
            {
                props.match.params.admin_id
            }
        </div>
    )
}

export default Planchas