export interface BlogPost {
   id: number;
   title: string;
   slug: string;
   date: string;
   excerpt: string;
   content: string;
   category: string;
 }
  export const blogPosts: BlogPost[] = [
   {
     id: 1,
     title: "Getting Started with Next.js",
     slug: "getting-started-with-nextjs",
     date: "2024-03-15",
     excerpt: "Learn the basics of Next.js and start building your first app.",
     category: "Next.js",
     content: `
     Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications.


     Key Features of Next.js:


     - Server-Side Rendering (SSR)
     - Static Site Generation (SSG)
     - File-based Routing
     - API Routes


     In this tutorial, we'll walk through the process of setting up a Next.js project and creating your first pages.
   `
   },
    {
     id: 2,
     title: "CSS Tips and Tricks",
     slug: "css-tips-and-tricks",
     date: "2024-03-20",
     excerpt: "Improve your CSS skills with these handy tips and tricks.",
     category: "CSS",
     content: `
     CSS is gaining powers with recent web evolution. And it is very clever with tricks that were long existing or that
     have emerged. Perhaps tricks shared here will school you with CSS tricks from the depths you were yet to explore.
       1. Draw a triangle using border
       2. Interchange background of an element
       3. Center an element
       4. Pill 💊 shape button
       5. Easily add beautiful loading indicator to your website
       6. Easy dark or light mode
       7. Truncate overflowing text with an ellipsis(...)
       8. Truncate long text to a number of lines
       9. Stop overworking yourself writing top, right, bottom, left
       10. Serve optimized images
     `
   },
    {
     id: 3,
     title: "HTML",
     slug: "HTML-tips-and-tricks",
     date: "2024-04-22",
     excerpt: "Strengthen your HTML foundation with tips for better structure and accessibility.",
     category: "HTML",
     content: `
    HTML is the foundation of any website, knowing the right tags and structure can improve both SEO and accessibility.

    Tips Include:
    1. use semantic tags for better SEO
    2. Properly nest elements
    3. Add alt txt for images
    4. Use forms and labels effectively
     `
   },
   {
     id: 4,
     title: "JavaScript Best Practices",
     slug: "css-tips-and-tricks",
     date: "2024-08-13",
     excerpt: "Follow these JavaScript best practices to write cleaner, more maintainable code.",
      category: "JavaScript",
     content: `
     JavaScript is one of the most widely used programming languages. Writing clean code ensures maintainability and scalability.

      Best Practices:
      - Use meaningful variable names
      - Keep functions small and focused
      - Avoid global variables
      - Use strict mode
      - Comment your code when necessary
      - Handle errors gracefully
     `
   },
];


