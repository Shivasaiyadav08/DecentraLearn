"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

export default function CourseCard({ id ,title, teacher, price }: any) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id ,title, teacher , price }));
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <img src="https://via.placeholder.com/400x200" alt={title} className="rounded-lg mb-3" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">By {teacher}</p>
      <p className="mt-2 font-bold">{price}</p>
      <button
        onClick={handleAdd}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
