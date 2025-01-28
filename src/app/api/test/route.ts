import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

type response = {
    message : string
}

export const dynamic = 'force-static';
export async function GET(req : NextApiRequest,
    res : NextApiResponse<response>
){
    return NextResponse.json({
        message: "Akcelify for the win",
      });
}