import React from 'react';
import Green from './Green';
import Blue from './Blue';
import Brown from './Brown';
import Gray from './Gray';
import Pink from './Pink';
import Purple from './Purple';
import Red from './Red';
import Yellow from './Yellow';
import './All.css'

function All() {

  return (
    <div className="All">
      <Green/>
      <Blue/>
      <Brown/>
      <Gray/>
      <Pink/>
      <Purple/>
      <Red/>
      <Yellow/>
    </div>
  );
}

export default All;

{/* <form action="">
<select id="option">
    <option value="yellow">yellow</option>
    <option value="green">green</option>
    <option value="purple">purple</option>
    <option value="pink">pink</option>
    <option value="blue">blue</option>
    <option value="red">red</option>
    <option value="gray">gray</option>
    <option value="brown">brown</option>
</select>
<button>Submit</button>
</form> */}