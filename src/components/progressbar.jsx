import React, { useState } from 'react'
import '../styles/progressbar.css'

const Progressbar = (props) => {
    // const [counter, setcounter] = useState(0);

    // setInterval(() => {
    //     if (counter == 65) {
    //         setcounter((count)=> {
    //             return count += 1;
    //         });
    //     }
    //     else{
    //         clearInterval();
    //     }
            
    // }, 30);

    return (
        <div>
            <div className="skill">
                <div className="outer">
                    <div className="inner">
                        <div className="number">65%</div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>

            </div>
        </div>
    )
}

export default Progressbar
