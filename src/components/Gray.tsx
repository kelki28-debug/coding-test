import React from 'react';
import './Gray.css'

const Gray: React.FC = () => {

    const items = Math.floor(Math.random() * 6)
    const array = ['0','1','2','3','4'].map((box, index) => {
        return ( <div className={`gray box-gray${index + 1}`}>asd</div>)
    })
    console.log(array);
    
    return (
        <div>
            <div className="grays">
               {array}
            </div>
        </div>
    )
}

export default Gray
