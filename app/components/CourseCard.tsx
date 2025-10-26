type Props = {
  title: string;
  teacher: string;
  price: string;
};

export default function CourseCard({ title, teacher, price }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <img
        src="https://via.placeholder.com/400x200"
        alt={title}
        className="rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">By {teacher}</p>
      <p className="mt-2 font-bold">{price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Enroll
      </button>
    </div>
  );
}
