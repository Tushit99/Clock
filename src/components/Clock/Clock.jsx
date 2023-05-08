import React, { useState } from 'react';
import styles from "./Clock.module.css";

const Clock = () => {
    const [hh1, sethh1] = useState(760);
    const [mm2, setmm2] = useState(630);
    const [ss3, setss3] = useState(510);

    const [deg1, setDeg1] = useState(0)
    const [deg2, setDeg2] = useState(0)
    const [deg3, setDeg3] = useState(0)

    const [niddle1, setNidel1] = useState(0);
    const [niddle2, setNidel2] = useState(0);
    const [niddle3, setNidel3] = useState(0);


    setInterval(() => {

        // let sec_dot = document.querySelector(".sec_dot"); 
        // let min_dot = document.querySelector(".min_dot"); 
        // let hr_dot = document.querySelector(".hr_dot"); 

        const a = new Date().getHours();
        const b = new Date().getMinutes();
        const c = new Date().getSeconds();

        sethh1(510 - (510 * a) / 12);
        setmm2(630 - (630 * b) / 60);
        setss3(760 - (760 * c) / 60);

        setDeg1(c * 6);
        setDeg2(b * 6);
        setDeg3(a * 30);

        setNidel1(c * 6);
        setNidel2(b * 6);
        setNidel3(a * 30);

    })


    return (
        <div id={styles.top}>
            <div className={styles.clock}>
                <div id={styles.time}>
                    <div className={styles.circle}>
                        <div className={styles.sec_dot} id={styles.dots1} style={{ transform: `rotateZ(${deg1}deg)` }} ></div>
                        <svg>
                            <circle cx="120" cy="120" r="120" id={styles.ss} style={{ strokeDashoffset: `${ss3}` }} ></circle>
                        </svg>
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.min_dot} id={styles.dots2} style={{ transform: `rotateZ(${deg2}deg)` }} ></div>
                        <svg>
                            <circle cx="100" cy="100" r="100" id={styles.mm} style={{ strokeDashoffset: `${mm2}` }} ></circle>
                        </svg>
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.hr_dot} id={styles.dots3} style={{ transform: `rotateZ(${deg3}deg)` }} ></div>
                        <svg>
                            <circle cx="80" cy="80" r="80" id={styles.hh} style={{ strokeDashoffset: `${hh1}` }} ></circle>
                        </svg>
                    </div>

                    {/* niddle  */}

                    <div className={styles.niddles} id={styles.sc} style={{ transform: `rotateZ(${niddle1}deg)` }}>
                        <i></i>
                    </div>
                    <div className={styles.niddles} id={styles.mn} style={{ transform: `rotateZ(${niddle2}deg)` }}>
                        <i></i>
                    </div>
                    <div className={styles.niddles} id={styles.hr} style={{ transform: `rotateZ(${niddle3}deg)` }} >
                        <i></i>
                    </div>
                    {/* numbers  */}
                    <span className={styles.num} id={styles.bx1} ><b>1</b></span>
                    <span className={styles.num} id={styles.bx2} ><b>2</b></span>
                    <span className={styles.num} id={styles.bx3} ><b>3</b></span>
                    <span className={styles.num} id={styles.bx4} ><b>4</b></span>
                    <span className={styles.num} id={styles.bx5} ><b>5</b></span>
                    <span className={styles.num} id={styles.bx6} ><b>6</b></span>
                    <span className={styles.num} id={styles.bx7} ><b>7</b></span>
                    <span className={styles.num} id={styles.bx8} ><b>8</b></span>
                    <span className={styles.num} id={styles.bx9} ><b>9</b></span>
                    <span className={styles.num} id={styles.bx10} ><b>10</b></span>
                    <span className={styles.num} id={styles.bx11} ><b>11</b></span>
                    <span className={styles.num} id={styles.bx12} ><b>12</b></span>

                </div>
            </div>
        </div>
    )
}

export default Clock