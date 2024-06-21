import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {getApi} from '../Config/ApiMethods'
import { Box } from "@mui/material";


export default function SingleProduct() {

  const params = useParams()
  console.log(params);

  const [model , setModel] = useState<any>({})
  

  const getDataById = (id:any)=>{
    getApi(`products/${id ? id : '' } `)
    .then((res)=>{
      console.log(res.data);
      setModel({...res.data})
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    if(params.id){
      getDataById(params.id)
    }
  } , [])
  

  return (
    <>
    <h1 className="text-center mt-5 fw-bolder">SELECTED ITEM</h1>
    <Box className="container d-flex mt-5 p-5 border shadow">
      <Box>
        <img className="border shadow p-4" width={500} src={model.image} alt="Product Image" />
      </Box>
      <Box className="ms-5">
        <h1>{model.title}</h1>
        <h3 className="mt-5 capital">{model.category}</h3>
        <h5 className="my-5">{model.description}</h5>
        <h6 className="fw-bolder">Price: {model.price}$</h6>
        </Box>
    </Box>
    
    </>
  )
}
