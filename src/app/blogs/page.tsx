import axios from "axios";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Blog {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
}

export default async function Blogs() {
    let blogs: Blog[] = [];
    try {
        const response = await axios.get<{ posts: Blog[] }>("http://akcelify.xyz/api/blogs");
        blogs = response.data.posts;
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }

    return (
        <div className="my-10 mx-10 px-10">

            {blogs.map((post) => (
                <Link key={post.slug} href = {`/blogs/${post.slug}`}>
                    <div key={post.slug} className="my-5">
                        <Card>
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>{post.createdAt}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{(post.content.length > 100) ? `${post.content.substring(0,400)}...` : post.content}</p>
                            </CardContent>
                            <CardFooter>
                                click and read more...
                            </CardFooter>
                        </Card>
                    </div>
                </Link>


            ))}
        </div>
    );
}
