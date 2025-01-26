import react from 'react';
import { useParams } from 'react-router-dom';

const Blue = () => {
    const {word, color} = useParams();
    return (
        <div>
            <h1 style={{color: color}}>The word is: {word}</h1>
        </div>
    )
}
export default Blue;
