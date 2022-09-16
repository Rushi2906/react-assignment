import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
function Products(){
    
    const [products,setProduct]=useState([]);

    useEffect(()=>{
        fetch("https://631eb61e22cefb1edc3891d1.mockapi.io/Products")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setProduct(res);
        })
    },[]);

    const formatedProducts = products.map((prod)=>{
        return(
            <div className="card col-md-2 my-3 mx-4 bg-light">
                <img src={prod.ProductImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link to={"../product/"+prod.id}><h5 className="card-text" align="center">{prod.ProductName}</h5></Link>
                </div>
            </div>
        )
    })
    
    return( 
        <div class="row">{formatedProducts}</div>
    )
}

export default Products;