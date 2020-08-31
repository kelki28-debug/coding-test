import React from 'react';
import './Yellow.css'

const Yellow: React.FC = () => {

    const items = Math.floor(Math.random() * 6)
    const array = ['0','1','2','3','4'].map((box, index) => {
        return ( <div className={`yellow box-yellow${index + 1}`}>asd</div>)
    })
    console.log(array);
    
    return (
        <div>
            <div className="yellows">
               {array}
            </div>
        </div>
    )
}

export default Yellow
