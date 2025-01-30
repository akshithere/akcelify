import { NextRequest, NextResponse } from "next/server";


type response = {
    message : string
}

export const dynamic = 'force-static';
export async function GET(req : NextRequest
){
    return NextResponse.json({
        message: "Akcelify for the win",
      });
}