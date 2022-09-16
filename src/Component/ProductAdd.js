import { useState } from "react";
import { useNavigate} from "react-router-dom";

function ProductAdd(){
    const navigate=useNavigate();
    const [data,setData] = useState({});
    return(
        <>
            <table  className="my-5 mx-3 pt-3">
            <tr className="p-5">
                    <td style={{width: "60%",backgroundColor:"#16a085"}} className="text-light bg-dark">Productname</td>
                    <td>:</td>
                    <td>
                        <input style={{width: "400%",backgroundColor:"#55abb5"}}
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
                            onChange={(e)=>{
                                setData({...data,ProductCategory:e.target.value})
                            }}
                        type="text" />
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td colSpan="3">
                        <button className="btn px-4 btn-primary bg-primary"  
                            onClick={()=>{
                            fetch("https://631eb61e22cefb1edc3891d1.mockapi.io/Products/",{
                                method: "POST",
                                body: JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                            })
                            .then(()=>{
                                navigate("/products");
                            })
                        }}>Add Product</button>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default ProductAdd;