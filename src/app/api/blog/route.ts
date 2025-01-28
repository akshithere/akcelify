import { NextResponse } from "next/server";
import connect from "@/app/lib/dbConnect";
import BlogPost from "@/app/models/BlogPost";

export async function GET(req: Request) {
    await connect();
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");

    if (!slug) {
        return NextResponse.json({
            success: false,
            message: "A slug variable is required for this"
        });
    }

    try {
        const data = await BlogPost.findOne({ slug });
        if (!data) {
            return NextResponse.json({
                success: false,
                message: "Blog post not found"
            });
        }
        return NextResponse.json({
            success: true,
            data
        });
    } catch (err: any) {
        return NextResponse.json({
            success: false,
            message: "Could not find the post with the given slug",
            error: err.message
        });
    }
}
