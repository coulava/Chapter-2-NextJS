"use client";
import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "../../data/blog";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Ambil kategori unik dari data
  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  // Filter posts sesuai kategori
  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="w-full bg-red-200">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 min-h-screen">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-black text-center">
          Blog Posts
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center space-x-6 mb-10 font-semibold text-gray-600">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`hover:text-black transition ${
                activeCategory === cat ? "text-black font-bold" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog List */}
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-300 p-4 rounded-lg bg-white shadow-sm hover:shadow-lg transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 text-black hover:underline ">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-400 text-sm font-semibold mb-2">
                {post.date}
              </p>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
