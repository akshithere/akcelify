import axios from "axios";

interface Blog {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
}

export default async function Blogs() {
    let blogs: Blog[] = [];
    try {
        const response = await axios.get<{ posts: Blog[] }>("http://akcelify.vercel.app/api/blogs");
        blogs = response.data.posts;
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }

    return (
        <div className="m-5">
            {blogs.map((post) => (
                <div key={post.slug} className="flex flex-col mb-4 border-b pb-2">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg font-bold">{post.title}</h1>
                        <h3 className="text-sm text-gray-500">
                            {new Date(post.createdAt).toLocaleDateString()}
                        </h3>
                    </div>
                    <div className="mt-2">{post.content}</div>
                </div>
            ))}
        </div>
    );
}
