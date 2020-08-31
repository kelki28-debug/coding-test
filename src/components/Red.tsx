import React from 'react';
import './Red.css'

const Red: React.FC = () => {

    const items = Math.floor(Math.random() * 6)
    const array = ['0','1','2','3','4'].map((box, index) => {
        return ( <div className={`red box-red${index + 1}`}>asd</div>)
    })
    console.log(array);
    
    return (
        <div>
            <div className="reds">
               {array}
            </div>
        </div>
    )
}

export default Red
