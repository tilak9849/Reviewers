import { Prisma, PrismaClient } from "@prisma/client";
import Boom from "@hapi/boom";
import  bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';
import { any, z } from "zod";
import { createUserDtobody } from "../validators/create-user.validator";
const prisma = new PrismaClient();




export const createUser = async(user: z.infer<typeof createUserDtobody>)=>{
const{username,email, password, is_admin} = user
    try{
    return await prisma.user.create({
        data:{
            email,
            password: await bcrypt.hash(password, 10),
            is_admin,
            username
        }
    })

}catch(err:any){
    console.log(err)
    if(err.code==='P2002'){
        throw Boom.conflict('Email tei vayo change han na bhai')
    }else{
        throw(err)
    }
}
}


export async function login(email: string, password: string) {
   try{
    const user = await prisma.user.findFirstOrThrow({ where: { email } })

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        // Password does not match
        // If you want to throw a http error, you can. This is throw internal server error
      throw  Boom.conflict('Password not correct')
    }

    // Generate a token
    const accessToken = jwt.sign(
        { user_id: user.id, is_admin: user.is_admin },
        process.env.ACCESS_TOKEN_KEY = "random-secret-hey",
        {
            expiresIn: '1d',
        }
    )

     // Generate a token
     const refressToken = jwt.sign(
        { userId: user.id, is_admin: user.is_admin },
       process.env.REFRESH_TOKEN_KEY as string,
        {
            expiresIn: '7d',
        }
    )

    // Return the token to the client
    return { success: true, accessToken,refressToken }
   }catch(err){
    console.log(err)
    throw err
   }
}
// return the access token 


export const remove = async (userId: any) =>{
    try{
        return  await prisma.user.delete({where: {id:userId}})

    }catch(err:any){
       
    
    console.log(err)
    if(err.code === 'P2003'){
    throw Boom.notFound("Todos delete garnu hola pahila ")
}else{
  throw err
}
}
}
export async function refresh(userId: number) {
    const user = await prisma.user.findFirstOrThrow({ where: { id: userId } })


    // Generate a token
    const accessToken = jwt.sign(
        { userId: user.id, isAdmin: user.is_admin },
        process.env.ACCESS_TOKEN_KEY as string,
        {
            expiresIn: '5m',
        }
    )


    // Return the accessToken to the client
    return { success: true, accessToken }
}
// Refresh token - long lived token
// Access token - short lived token expires in 5 minutes