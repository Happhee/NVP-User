import React, { useState, useEffect } from "react";

const Timer = ({ mm, ss }) => {
    const [minutes, setMinutes] = useState(parseInt(mm));
    const [seconds, setSeconds] = useState(parseInt(ss));

    return (
        <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
};

export default Timer;