import mongoose, {Document, Schema} from "mongoose";

export interface IBlogPost extends Document{
    title : string,
    content: string,
    slug : string
    createdAt: Date,

}

const BlogPostSchema : Schema = new Schema({ 
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    slug : {
        type : String,
        required : true,
        unique : true
    },
    createdAt : {
        type : Date,
        required : true
    }
})

const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

export default BlogPost;