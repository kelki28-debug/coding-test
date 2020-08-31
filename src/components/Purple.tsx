import React from 'react';
import './Purple.css'

const Purple: React.FC = () => {

    const items = Math.floor(Math.random() * 6)
    const array = ['0','1','2','3','4'].map((box, index) => {
        return ( <div className={`purple box-purple${index + 1}`}>asd</div>)
    })
    console.log(array);
    
    return (
        <div>
            <div className="purples">
               {array}
            </div>
        </div>
    )
}

export default Purple
