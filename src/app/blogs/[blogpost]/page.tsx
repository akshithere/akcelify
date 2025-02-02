import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface iBlogPost {
  title : string,
  content : string
}
export default async function Page({
  params,
}: {
  params: Promise<{ blogpost: string }>;
}) {
  const slug = (await params).blogpost;
  let blogPost : iBlogPost | null = null; 
  try {
    const response = await axios.get(`https://akcelify.xyz/api/blog?slug=${slug}`);
    blogPost = response.data.data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  return (
    <div className="text-center m-10 font-bold">
      {blogPost ? (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="text-5xl">{blogPost.title}</CardTitle>
              <CardDescription>{}</CardDescription>
            </CardHeader>
            <CardContent className="text-lg">
              <p>{blogPost.content}</p>
            </CardContent>
            <CardFooter>
              <p>{""}</p>
            </CardFooter>
          </Card>
        </>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
}
