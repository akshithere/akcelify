"use client"

export default function CreateBlog(){
  return(
    <article className="container mx-auto flex justify-center items-center m-5">
    <textarea name="createblog" id="create-blog" placeholder="Tell your story..."
     className="focus:outline-none text-lg w-screen h-screen">

    </textarea>
    </article>
  )
}