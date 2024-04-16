import { Prisma, PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom";
import { z } from "zod";
import { query } from "express";
import { createRestroDtobody } from "../validators/create-restaurant.validators";
const prisma = new PrismaClient({
});



export const findAll = async() => {
    return await prisma.restaurant.findMany({
        include: {
          contacts: true,
          reviews:true
        }
      })
    }
    


export const update = async (id: number, restro:any) => {
try {
   return await prisma.restaurant.update({
    data:{
        name:restro.name,
                description:restro.description,
                address:restro.address

        
    },
   
    where:{
        id: Number(id)
    }
})
}catch (err: any){
    // console.log("Error po aayo haii hajur ") 
    console.log(err)
    if(err.code === 'P2025'){
    throw Boom.notFound("Change garna khojeko data xaina haii hajur")
}else{
  throw (err)
}
}
}


export const postRestro = async (body:z.infer<typeof createRestroDtobody>) =>{
    const {address, description,name}= body
    let createdRestro:any;

     await prisma.$transaction(async(tx)=>{
        createdRestro= await tx.restaurant.create({
            data:{
            
                name: body.name,
                description:body.description,
                address:body.address,
            }
        })
     })
   return createdRestro;
  
}


export const remove = async (id: any) =>{
    try{
        return  await prisma.restaurant.delete({where: {id:id}})

    }catch(err:any){
       
    
    console.log(err)
    if(err.code === 'P2025'){
    throw Boom.notFound("DATA NOT FOUND TO DELETE")
}else{
  throw err
}
}
}

export const Get = async (id: number ) =>{
    try{
         return await prisma.restaurant.findFirstOrThrow({
            where:{id:Number(id) },
        })
        return "Naya Api banyo"
    } catch (err: any){
      console.log("Error po aayo haii hajur ") 
      console.log(err)
      if(err.code === 'P2025'){
      throw Boom.notFound("ERROR DATA NOT FOUND")
}else{
    throw err
}
}
}


export function postContact(body: any, restaurant_id: any) {
    throw new Error("Function not implemented.");
}

export function postReview(body: any) {
    throw new Error("Function not implemented.");
}

