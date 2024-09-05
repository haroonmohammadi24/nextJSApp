

import { error } from 'console'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'
import prisma from '@/prisma/client'

interface Props{
    params:{
        id: string; // URL params are typically strings
    }
}
// how we get an specific Element the GET method api getEntity
export async function GET(request:NextRequest,{ params: { id } }: Props){
 
    const user = await prisma.user.findUnique({
        where: {
          id: parseInt(id), // Ensure id is an integer
        },
      });
    if(!user)
        return NextResponse.json({error:'not found'},{status:404})
    
    return NextResponse.json(user,{status:200})
}

//I mostly think that it should implemenet the update API in here 

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  try {
    const body = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'Not found', code: 404 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { name: body.name, email: body.email },
    });

    // Return the updated user as the response
    return NextResponse.json(updatedUser);
  } catch (error) {
    // Handle any errors that occur during the process
    return NextResponse.json({ error: 'Failed to update user', code: 500 });
  }
}

//the API that delete an Object 
export async function DELETE(request:NextRequest,{ params: { id } }: Props){
//  search if exist then delete it 

const user = await prisma.user.findUnique({
  where: {
    id: parseInt(id),
  },
});
const data=await prisma.user.delete({
  where:{
    id:user?.id
  }
})

return NextResponse.json({message:'the Entity deleted !!!'})
}

//PUT for Replacing Object 
//Patch for Updating one or more properties