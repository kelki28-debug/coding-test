import React from 'react';
import './Pink.css'

const Pink: React.FC = () => {

    const items = Math.floor(Math.random() * 6)
    const array = ['0','1','2','3','4'].map((box, index) => {
        return ( <div className={`pink box-pink${index + 1}`}>asd</div>)
    })
    console.log(array);
    
    return (
        <div>
            <div className="pinks">
               {array}
            </div>
        </div>
    )
}

export default Pink
