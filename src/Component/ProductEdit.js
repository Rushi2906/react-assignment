import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductEdit(){
    const navigate=useNavigate();
    const [data,setData] = useState({});
    const params=useParams();

    useEffect(()=>{
        fetch("https://631eb61e22cefb1edc3891d1.mockapi.io/Products/"+params.id,
        {
            method:"GET"
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
        })
    },[]);

    return(
        <>
            <table className="my-5 mx-3 pt-3">
                <tr className="p-5">
                    <td style={{width: "60%",backgroundColor:"#16a085"}} className="text-light bg-dark">Productname</td>
                    <td>:</td>
                    <td>
                        <input style={{width: "400%",backgroundColor:"#55abb5"}}
                            value={data.ProductName} 
                            onChange={(e)=>{
                                setData({...data,ProductName:e.target.value})
                            }} 
                        type="text" />
                    </td>
                </tr>
                <tr>
                    <td  style={{width: "60%",backgroundColor:"#55abb5"}}>ProductIamge</td>
                    <td>:</td>
                    <td>
                        <input className="text-light bg-dark" style={{width: "400%", backgroundColor:"#555fb5"}}
                            value={data.ProductImage}
                            onChange={(e)=>{
                                setData({...data,ProductImage:e.target.value})
                            }} 
                        type="text" />
                    </td>
                </tr>
                <tr>
                    <td  style={{width: "60%",backgroundColor:"#555fb5"}} className="text-light bg-dark">ProductPrice</td>
                    <td>:</td>
                    <td>
                        <input style={{width: "400%", backgroundColor:"#55abb5"}}
                            value={data.ProductPrice}
                            onChange={(e)=>{
                                setData({...data,ProductPrice:e.target.value})
                            }}
                        type="text" />  
                    </td>
                </tr>
                <tr>
                    <td  style={{width: "60%",backgroundColor:"#55abb5"}}>ProductDescription</td>
                    <td>:</td>
                    <td>
                        <input className="text-light bg-dark" style={{width: "400%", backgroundColor:"#555fb5"}}
                            value={data.ProductDescription}
                            onChange={(e)=>{
                                setData({...data,ProductDescription:e.target.value})
                            }}
                        type="text" />
                    </td>
                </tr>
                <tr>
                    <td  style={{width: "60%",backgroundColor:"#555fb5"}} className="text-light bg-dark">ProductCategory</td>
                    <td>:</td>
                    <td>
                        <input style={{width: "400%", backgroundColor:"#55abb5"}}
                            value={data.ProductCategory}
                            onChange={(e)=>{
                                setData({...data,ProductCategory:e.target.value})
                            }}
                        type="text" />
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td colSpan="3">
                        <button className="btn px-4 btn-primary bg-primary" onClick={()=>{
                             fetch("https://631eb61e22cefb1edc3891d1.mockapi.io/Products/"+params.id,{
                                method: "PUT",
                                body: JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            })
                            .then(()=>{
                                navigate("/products");
                            })
                        }}>Edit Product</button>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default ProductEdit;