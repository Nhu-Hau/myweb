export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Hello Tailwind CSS 👋
      </h1>
      <p className="text-lg">
        Nếu bạn thấy trang này có style đẹp, Tailwind đã hoạt động rồi!
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Nhấn thử nè
      </button>
    </div>
  );
}
