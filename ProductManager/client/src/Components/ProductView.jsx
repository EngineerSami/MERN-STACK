import React ,{useState , useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate , Link } from 'react-router-dom';

const ProductView = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get("http://localhost:8080/api/product/"+ id )
      .then(response => {
        console.log(response.data);
        setProduct(response.data)})
       
    } catch (error) {
      console.error("Error fetching product", error);
    }
  }, [id]);

  const deleteProduct = () => {
    axios.delete("http://localhost:8080/api/product/"+ id );
    navigate("/");
  }




  return (
    <>
    <h1>Title :{product.title}</h1>
    <h2>Price : {product.price}</h2>
    <p> description : {product.description}</p>
    <Link to={`/`}>Back To the main controllerw</Link> || <Link to ={`/product/edit/${product._id}`}>Update Form</Link>
    <button onClick={deleteProduct}>Delete</button>
    </>
  )



}

export default ProductView;
