import { NextResponse } from "next/server";
import connect from "@/app/lib/dbConnect";
import BlogPost from "@/app/models/BlogPost";

export async function GET(){
    const db = await connect();
    try{
        const posts = await BlogPost.find();
        return NextResponse.json({
            success: true,
            posts
        })
    }catch(err){
        console.log("could not fetch from the database", err);
        return NextResponse.json({
            success: false,
            message : "unable to fetch blogs"
        })
    }

}

export async function POST(req: Request) {
  const { title, content } = await req.json();

  // Connect to the database
  await connect();

  // Create a new blog post
  const newBlogPost = new BlogPost({
    title,
    content,
    slug: title.toLowerCase().replace(/\s+/g, "-"), // Generate a slug from the title
  });

  try {
    await newBlogPost.save();
    return NextResponse.json({ message: "Blog post created successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to create blog post." }, { status: 500 });
  }
}
