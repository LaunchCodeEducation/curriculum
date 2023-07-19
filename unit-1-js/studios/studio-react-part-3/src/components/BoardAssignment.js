import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [];

   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}