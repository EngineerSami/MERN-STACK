import React , {useState , useEffect} from "react";
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';



const ProductUpdate = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

   useEffect(() => {
    axios.get(`http://localhost:8080/api/product/${id}`)
    .then((response) =>{
      console.log(response.data);
      setTitle(response.data.title);
      setPrice(response.data.price);
      setDescription(response.data.description);
    })
    .catch((error) => {
      console.error('Error fetching product', error);
      navigate(`/product/edit/${id}`);
    });
   },[])

  const ProductUpdate = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8080/api/product/${id}`,{title , price , description})
    .then(response=>{
      console.log(response);
      navigate('/');

    })
    .catch(err => console.log(err));
  }



  return (
    <>
      <form onSubmit={ProductUpdate}>
        <div>
        <label htmlFor='title'> title:</label>
        <input type = "text" name = "title" onChange = {e=>setTitle(e.target.value)} value={title}/>
        </div>
        
        <label htmlFor='price'> Price:</label>
        <input type = "number" name = "price" onChange = {e=>setPrice(e.target.value)} value={price}/>

        <label htmlFor='description'> Discription:</label>
        <textarea name="description" onChange={e => setDescription(e.target.value)} id="" value = {description}/>
        <button  type = "submit"> Update Product </button>
      </form>
    
    </>
  )


}

export default ProductUpdate;