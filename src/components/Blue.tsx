import React from 'react';
import styled from 'styled-components';
import './Blue.css';


const Blue: React.FC = () => {
    
    let items:number = Math.floor(Math.random() * 5 + 1) ;

    const array = ['0','1','2','3','4'].map((box, index) => {
        return ( <div className={`blue box-blue${index + 1}`}>asd</div>)
    })
    
    console.log(array);

    return (
        <div>
            
            <div className="blues" style={{}}>
               {array}
            </div>
        </div>
    )
}

export default Blue
