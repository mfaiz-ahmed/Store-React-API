import React, { useEffect, useState } from 'react'
import {getApi} from '../Config/ApiMethods'
import axios from 'axios'
import { Box, Grid } from '@mui/material'
import {Link , useNavigate} from 'react-router-dom'



export default function Products() {

    const [products , setProducts] = useState<any>([])

    const getData = ()=>{
        getApi('products')
        .then((res)=>{
            setProducts([...res.data])
            console.log(res.data);
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getData()
    } , [])


    const navigate = useNavigate()

    return <>
        <h1 className='text-center mt-5 fw-bolder'>PRODUCTS</h1>
        <Grid className='mt-5 container' container >
        {products.map((x:any , i:number)=> 
            <Box onClick={()=>{
                navigate(`/SingleProduct/${x.id}`)
            }} key={i} width={"30%"} className="p-4 border shadow rounded m-3">
                <img className="p-2" src={x.image} width={"100%"} alt="Product Image" />
                <Box className='mt-5'>
                    <h5>{x.title}</h5>
                    <h3 className='my-3'>{x.category}</h3>
                    <h2 className='my-3'>Price: {x.price}$</h2>
                    <h2>Rating: {x.rating.rate}</h2>
                </Box>
            </Box>    
    )}
    </Grid>
        
    </>
}
