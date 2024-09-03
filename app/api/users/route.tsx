import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { error } from "console";

import prisma from '@/prisma/client'

//API method GET to return all data from the database
export async function GET(request:NextRequest){
    //fetch users from database 
    const users=await prisma.user.findMany( )

    return NextResponse.json({users:users});
}


//API to post or save the data to database 
export async function POST(request:NextRequest){
    //read the body  
    
    const body=await request.json();

    const newUser = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          followers: body.followers
          
        },
      });
   
    return NextResponse.json(newUser)

}



