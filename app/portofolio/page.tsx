import Image from "next/image";
import Link from "next/link";
import { arrayPorto } from "../../data/portofolio";

export default function Portofolio({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams?.category;

  // Filter portfolio sesuai kategori
  const filteredPorto = category
    ? arrayPorto.filter((porto) => porto.category === category)
    : arrayPorto;

  return (
    <main className="w-full justify-center">
      {/* Background full width */}
      <div className="bg-red-200 w-full px-4 py-16 sm:px-6 sm:py-24">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-center text-black">
            My Portofolio
          </h2>

          {/* Category Filter */}
          <div className="mt-4 mb-6 flex justify-center space-x-4">
            <Link
              href="/portofolio"
              className={`text-black ${!category ? "font-bold" : ""}`}
            >
              All
            </Link>
            <Link
              href="/portofolio?category=Web"
              className={`text-black ${category === "Web" ? "font-bold" : ""}`}
            >
              Web
            </Link>
            <Link
              href="/portofolio?category=Mobile"
              className={`text-black ${category === "Mobile" ? "font-bold" : ""}`}
            >
              Mobile
            </Link>
          </div>

          {/* Portfolio Grid */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredPorto.length > 0 ? (
              filteredPorto.map((porto) => (
                <div key={porto.id} className="group relative">
                  <Link href={`/portofolio/${porto.id}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <Image
                        alt={porto.name}
                        src={porto.image}
                        width={400}
                        height={400}
                        unoptimized
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-sm font-bold text-black">
                        {porto.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {porto.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-black col-span-full">
                No projects found in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
