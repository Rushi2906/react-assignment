import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail(){
    
    let params = useParams();
    const navigate = useNavigate();

    const [product,setProduct] = useState({});
    useEffect(()=>{
        fetch("https://631eb61e22cefb1edc3891d1.mockapi.io/Products/"+params.id,
        {
            method:"GET"
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setProduct(res);
        })
    },[]);

    return(
        <div className="card mb-3 my-3 mx-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={product.ProductImage} className="img-fluid rounded-start" style={{width:"100%"}} alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fs-1">{product.ProductName}</h5>
                        <br></br>
                        <h5 className="card-text fs-3">Price: {product.ProductPrice}</h5>
                        <br></br>
                        <h5 className="card-text fs-3">Category: {product.ProductCategory}</h5>
                        <br></br>
                        <p className="card-text fs-3"><span className="fw-bold">Description:</span> {product.ProductDescription}</p>
                        <button type="button" class="btn btn-danger mx-3 my-3"  
                            onClick={()=>{
                            fetch("https://631eb61e22cefb1edc3891d1.mockapi.io/Products/"+params.id,
                            {
                                method:"DELETE"
                            })
                            .then((res)=>{
                                navigate("/products");
                            })
                        }}>Delete</button>  
                    <button type="button" class="btn btn-primary" 
                        onClick={()=>{
                            navigate("/product/edit/"+params.id);
                            //navigate(`/faculty/edit/${params.id}`);  second technique
                        }}>Edit</button>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductDetail;