import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center">
        <Image
          src="/WenboFanProfilePhoto.jpg"
          alt="Wenbo Fan"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-xl text-gray-600 mb-6">Web Developer | Designer</p>
        <p className="max-w-md mx-auto text-gray-700 mb-8">
          Welcome to my personal website! I'm passionate about creating beautiful and functional web experiences.
        </p>
        <div className="space-x-4">
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Projects</a>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Contact</a>
        </div>
      </div>
    </main>
  );
}