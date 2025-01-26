import React, { useState } from 'react';
import { useParams } from 'react-router-dom';



const Word = () => {
    const { word } = useParams();
    return (
        <div>
        <h1>Word: {word}</h1>
        </div>
    )
    }
export default Word;