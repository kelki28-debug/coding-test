import React from 'react';
import './Green.css'

const Green: React.FC = () => {

    const items = Math.floor(Math.random() * 6)
    const array = ['0','1','2','3','4'].map((box, index) => {
        return ( <div className={`green box-green${index + 1}`}>asd</div>)
    })
    console.log(array);
    
    return (
        <div>
            <div className="greens">
               {array}
            </div>
        </div>
    )
}

export default Green
