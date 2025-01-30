import axios from "axios";

export default async function Page({
  params,
}: {
  params: Promise<{ blogpost: string }>;
}) {
  const slug = (await params).blogpost;  
  let blogPost = null;

  try {
    const response = await axios.get(`https://akcelify.vercel.app/api/blog?slug=${slug}`);
    blogPost = response.data.data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  return (
    <div className="text-center m-10 font-bold">
      {blogPost ? (
        <>
          <h1>{blogPost.title}</h1>
          <p>{blogPost.content}</p>
          <p>Published on: {new Date(blogPost.createdAt).toLocaleDateString()}</p>
        </>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
}
