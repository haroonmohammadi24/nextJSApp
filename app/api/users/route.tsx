import { NextRequest, NextResponse } from "next/server";

//API method GET to return all data from the database
export function GET(request:NextRequest){
    //fetch users from database 
    return NextResponse.json({data:'Hellow world'});
}


//API to post or save the data to database 
export async function POST(request:NextRequest){
    //read the body  
    const body=await request.json();

    return NextResponse.json(body)

}

