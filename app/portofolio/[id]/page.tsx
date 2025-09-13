import Link from "next/link";
import Image from "next/image";
import { arrayPorto } from "../../../data/portofolio";

type Params = {
  id: string;
};

export default function ProjectDetail({ params }: { params: Params }) {
  const { id } = params;
  const porto = arrayPorto.find((p) => p.id === parseInt(id));

  if (!porto) {
    return (
      <div className="container mx-auto p-4 text-center text-black">
        <p className="text-lg font-semibold">⚠️ Project not found</p>
        <Link href="/portofolio" className="text-blue-600 hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  // Related projects sesuai kategori
  const relatedProjects = arrayPorto.filter(
    (p) => p.category === porto.category && p.id !== porto.id
  );

  return (
    <div className="bg-red-300 min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Back to Portfolio */}
        <Link
          href={`/portofolio?category=${porto.category}`}
          className="inline-block mb-6 text-white hover:underline"
        >
          ← Back to {porto.category} Projects
        </Link>

        {/* Detail Project */}
        <p className="font-semibold text-sm text-gray-600">{porto.category}</p>
        <h1 className="text-3xl font-bold text-black mb-3">{porto.name}</h1>
        <p className="mb-6 text-gray-700">{porto.description}</p>
        <div className="flex justify-center">
          <Image
            alt={porto.name}
            src={porto.image}
            width={900}
            height={500}
            className="rounded-lg shadow-md w-full max-w-3xl h-auto"
            unoptimized
          />
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-black">
              Related {porto.category} Projects
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portofolio/${project.id}`}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition bg-white text-center"
                >
                  <Image
                    alt={project.name}
                    src={project.image}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    unoptimized
                  />
                  <div className="p-4">
                    <p className="font-semibold text-black">{project.name}</p>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
