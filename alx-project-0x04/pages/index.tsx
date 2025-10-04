import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-extrabold mb-8">Welcome to Splash App! 🎉</h1>
      <p className="text-xl mb-8">Your journey into React state management starts here!</p>
      
      <div className="flex gap-4">
        <Link 
          href="/counter-app"
          className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105 hover:bg-gray-100"
        >
          Counter App 🚀
        </Link>
      </div>
    </div>
  );
}
