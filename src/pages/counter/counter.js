import React, { useState, useEffect } from 'react';
import './counter.scss';
import littleOne from './img/1gr.png';
import littleTwo from './img/2gr.png';
import littleFive from './img/5gr.png';
import littleTen from './img/10gr.png';
import littleTwenty from './img/20gr.png';
import littleFifty from './img/50gr.png';
import bigOne from './img/1zl.png';
import bigTwo from './img/2zl.png';
import bigFive from './img/5zl.png';
import reset from './img/reset.png';


export default function Counter () {
    let [littleO, setCountO] = useState(0);
    let [littleT, setCountT] = useState(0);
    let [littleF, setCountF] = useState(0);
    let [littleTe, setCountTe] = useState(0);
    let [littleTw, setCountTw] = useState(0);
    let [littleFi, setCountFi] = useState(0);
    let [bigO, setCountBigO] = useState(0);
    let [bigT, setCountBigT] = useState(0);
    let [bigF, setCountBigF] = useState(0);

    
    useEffect(() => {
        
    })
    if ("vibrate" in navigator) {
        // vibration API supported
      navigator.vibrate(10);
    }
    return (
        <div className="counter">
           <div className="coins">
           <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountO(littleO +1)
                        }}
                    >
                        <img src={littleOne} alt="grosz"/>
                    </button>
                </div>
                
                <div className="details">
                    <div>
                        {littleO}
                    </div> 
                    <div onClick={() => {
                            if(littleO > 0) {
                                setCountO(littleO -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
                
            </div>
            <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountT(littleT +1)
                        }}
                    >
                        <img src={littleTwo} alt="2 grosze"/>
                    </button>
                </div>
                <div className="details">
                    <div>
                        {littleT}
                    </div> 
                    <div onClick={() => {
                            if(littleT > 0) {
                                setCountT(littleT -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
            </div>
            <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountF(littleF +1)
                        }}
                    >
                        <img src={littleFive} alt="5 groszy"/>
                    </button>
                </div>
                <div className="details">
                    <div>
                        {littleF}
                    </div> 
                    <div onClick={() => {
                            if(littleF > 0) {
                                setCountF(littleF -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
            </div>
            <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountTe(littleTe +1)
                        }}
                    >
                        <img src={littleTen} alt="10 groszy"/>
                    </button>
                </div>
                <div className="details">
                    <div>
                        {littleTe}
                    </div> 
                    <div onClick={() => {
                            if(littleTe > 0) {
                                setCountTe(littleTe -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
            </div>
            <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountTw(littleTw +1)
                        }}
                    >
                        <img src={littleTwenty} alt="20 groszy"/>
                    </button>
                </div>
                <div className="details">
                    <div>
                        {littleTw}
                    </div> 
                    <div onClick={() => {
                            if(littleTw > 0) {
                                setCountTw(littleTw -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
            </div>
            <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountFi(littleFi +1)
                        }}
                    >
                        <img src={littleFifty} alt="50 groszy"/>
                    </button>
                </div>
                <div className="details">
                    <div>
                        {littleFi}
                    </div> 
                    <div onClick={() => {
                            if(littleFi > 0) {
                                setCountFi(littleFi -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
            </div>
            <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountBigO(bigO +1)
                        }}
                    >
                        <img src={bigOne} alt="zlotowka"/>
                    </button>
                </div>
                <div className="details">
                    <div>
                        {bigO}
                    </div> 
                    <div onClick={() => {
                            if(bigO > 0) {
                                setCountBigO(bigO -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
            </div>
            <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountBigT(bigT +1)
                        }}
                    >
                        <img src={bigTwo} alt="2 zlote"/>
                    </button>
                </div>
                <div className="details">
                    <div>
                        {bigT}
                    </div> 
                    <div onClick={() => {
                            if(bigT > 0) {
                                setCountBigT(bigT -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
            </div>
            <div className="add-coin">
                <div className="add">
                    <button
                        onClick={() => {
                            setCountBigF(bigF +1)
                        }}
                    >
                        <img src={bigFive} alt="5 zloty"/>
                    </button>
                </div>
                <div className="details">
                    <div>
                        {bigF}
                    </div> 
                    <div onClick={() => {
                            if(bigF > 0) {
                                setCountBigF(bigF -1)
                            }
                        }}
                    >
                        -
                    </div>
                </div>
           </div>
            
            </div>
            <hr />
            <div className="sum">
                <h2>
                            suma: { 
                                    ((littleO * 0.01) +
                                    (littleT * 0.02) +
                                    (littleF * 0.05) +
                                    (littleTe * 0.10) +
                                    (littleTw * 0.20) +
                                    (littleFi * 0.50) +
                                    (bigO) +
                                    (bigT * 2) +
                                    (bigF * 5)).toFixed(2)
                                
                                }
                                
                </h2>
                <div className="reset" onClick={() => {
                     setCountO(littleO = 0)
                     setCountT(littleT = 0)
                     setCountF(littleF = 0)
                     setCountTe(littleTe = 0)
                     setCountTw(littleTw = 0)
                     setCountFi(littleFi = 0)
                     setCountBigO(bigO = 0)
                     setCountBigT(bigT = 0)
                     setCountBigF(bigF = 0)     
                }}>
                    <img src={reset} alt="reset" />
                </div>
            </div>

        </div>
    )
}