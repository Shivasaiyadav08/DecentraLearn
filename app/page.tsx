import CourseCard from "./components/CourseCard";

const courses = [
  { title: "Intro to Blockchain", teacher: "Alice", price: "₹999" },
  { title: "Solidity 101", teacher: "Bob", price: "₹1499" },
  { title: "Next.js for Web3", teacher: "Charlie", price: "₹1299" },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Available Courses</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </div>
  );
}
