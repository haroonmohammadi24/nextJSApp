

import { error } from 'console'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'


interface Props{
    params:{
        id:number
    }
}
// how we get an specific Element the GET method api getEntity
export function GET(request:NextRequest,{ params: { id } }: Props){
    
    if(id>10)
        return NextResponse.json({error:'not found'},{status:404})
    
    return NextResponse.json({user:'Mosh'},{status:200})
}