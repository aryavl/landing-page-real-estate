import SuscribeModel from "@/models/SuscribeModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async(request : Request)=>{
    try {
        
        const {  email } = await request.json();
        console.log(email);
        // console.log(firstname);
      
        
        await connect()
    
        const existing = await SuscribeModel.findOne({email})
        if(existing){
            return new NextResponse("Email is already in use",{status:400,statusText:"Email is already in use"})
        }
          
    
            const newSuscribe = new SuscribeModel({
                
                email: email,
                
            })
            
            await newSuscribe.save()
            return new NextResponse("user Suscribed ",{status:200,statusText:"user Suscribed"})
        
    
    
    } catch (error:any) {
        console.log("post suscribtion error ==>",error.message);
        return new NextResponse(error,{
            status:500,
        })
    }
    }