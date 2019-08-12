import React from 'react';
import './App.css';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table(props) {
    console.log(props.peopleData)
    return (
        <table>
            <TableHead />
            <TableBody peopleData={props.peopleData} removeCharacter={props.removeCharacter} />
        </table>
    );
}

export default Table;
