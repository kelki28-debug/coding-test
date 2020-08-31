import React from 'react';
import './Brown.css'

const Brown: React.FC = () => {

    const items = Math.floor(Math.random() * 6)
    const array = ['0','1','2','3','4'].map((box, index) => {
        return ( <div className={`brown box-brown${index + 1}`}>asd</div>)
    })
    console.log(array);
    
    return (
        <div>
            <div className="browns">
               {array}
            </div>
        </div>
    )
}

export default Brown
