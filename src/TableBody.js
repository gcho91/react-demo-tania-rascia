import React from 'react';
import './App.css';

function TableBody(props) {
    console.log(props.peopleData, "tb")
    //map thru arr to return table row for each obj in array
    const rows = props.peopleData.map((row, index) => {
        return (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.job}</td>
              <td>
                  <button onClick={()=> {props.removeCharacter(index)}}> Delete </button>
              </td>
            </tr>
          )
    })

    return (
        <tbody>
            {rows}
        {/* <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr> */}
      </tbody>
    );
}

export default TableBody;
