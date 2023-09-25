import { NextRequest, NextResponse } from "next/server";

export const POST = async(request: NextRequest) => {
    const body = await request.json();
    return NextResponse.json({message: `${body.prompt} - "This is the response"`});
}