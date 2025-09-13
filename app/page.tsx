import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-red-200 min-h-screen flex items-center">
      <section className="container mx-auto flex flex-col md:flex-row justify-start items-center my-10 gap-6 md:gap-20">
        {/* Image Section */}
        <div className="flex justify-start">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-10 border-red-400 shadow-lg">
            <Image
              src="/profil.jpg"
              alt="Profile"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-3/6 text-center md:text-left">
          <h4 className="text-3xl font-bold text-red-400 mb-2 text-shadow-red-500">
            Hi, I'm Coulava Illona Rahmawati
          </h4>
          <h3 className="text-xl font-semibold mb-3 text-gray-500">
            A Frontend Developer
          </h3>
          <p className="text-gray-500 mb-4 leading-snug">
            I love experiences through modern web design and
            development. From intuitive layouts to responsive interfaces, I
            build user-friendly applications that work seamlessly across all
            devices.
          </p>
          
        </div>
      </section>
    </div>
  );
}
