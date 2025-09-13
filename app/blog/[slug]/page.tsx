
import { blogPosts } from '../../../data/blog';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';


interface Params {
 slug: string;
}


export default function BlogPostPage({ params }: { params: Params }) {
 const post = blogPosts.find(post => post.slug === params.slug);


 if (!post) {
   return <div className='text-center py-20 text-black'>Post not found</div>;
 }


 return (
   <div className="bg-red-200 w-full  text-black min-h-screen">
       <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
       <Link href="/blog" className="inline-block mb-6 text-white hover:underline">
         ← Back to Blog
       </Link>
      
       <h1 className="text-3xl font-bold mb-4 text-black">{post.title}</h1>
       <p className="text-black text-sm font-bold mb-4">{post.date}</p>
       <ReactMarkdown>{post.content}</ReactMarkdown>
       </div>
   </div>
 );
}

