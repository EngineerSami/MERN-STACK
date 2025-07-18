import React ,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const ProudectCreate = () => {
  const [title , setTitle] = useState('');
  const [price , setPrice] = useState(0);
  const [description , setDiscription] = useState('');
  const navigate = useNavigate();
  

  const CreateProduct = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8080/api/products",{title , price , description})
    .then(response=>{
      console.log(response);
      navigate('/');
    })
    .catch(err => console.log(err));
  }

  const includeTitle = (e) =>{
    setTitle(e.target.value);
  }

  const includePrice = (e) =>{
    setPrice(e.target.value);
  }

  const includeDiscription = (e) => {
    setDiscription(e.target.value);
  }



  return (
    <>
      <form onSubmit={CreateProduct}>
        <div>
        <label htmlFor='title'> title:</label>
        <input type = "text" name = "title" onChange = {includeTitle} value={title}/>
        </div>
        
        <label htmlFor='price'> Price:</label>
        <input type = "number" name = "price" onChange = {includePrice} value={price}/>

        <label htmlFor='description'> Discription:</label>
        <textarea name="description" onChange={includeDiscription} id="" value={description}></textarea>
        <button type = "submit"> Create Product </button>
      </form>
    
    </>
  )
}

export default ProudectCreate;