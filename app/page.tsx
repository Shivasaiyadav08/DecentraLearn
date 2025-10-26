"use client"
import CourseCard from "./components/CourseCard";

const courses = [
  { id : 1 ,title: "Intro to Blockchain", teacher: "Alice", price: "₹999", imageUrl: "https://images.search.yahoo.com/search/images;_ylt=AwrO.aqWyv1oDgYMvA9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210US885G0&p=solidity+image&fr=mcafee&th=338&tw=474&imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A700%2F1*BTtLgd8UqPe9rC3wU3ApdQ.png&rurl=https%3A%2F%2Fmedium.com%2Fcoinmonks%2Fmastering-solidity-a-comprehensive-guide-to-data-types-27a6cabfb5b3&size=99KB&name=A+Comprehensive+Guide+to+Solidity+Data+Types+%7C+Coinmonks&oid=1&h=500&w=700&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.K6WqupLuftP21s9Oeh2EFAHaFS%3Fpid%3DApi&tt=A+Comprehensive+Guide+to+Solidity+Data+Types+%7C+Coinmonks&sigr=ogwc2uD8suHP&sigit=844cNddKg7Gs&sigi=Bn3gz95co947&sign=dFt7gRrjyYv6&sigt=dFt7gRrjyYv6" },
  {id : 2, title: "Solidity 101", teacher: "Bob", price: "₹1499", imageUrl: "https://images.search.yahoo.com/search/images;_ylt=AwrO.aqWyv1oDgYMvA9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210US885G0&p=solidity+image&fr=mcafee&th=338&tw=474&imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A700%2F1*BTtLgd8UqPe9rC3wU3ApdQ.png&rurl=https%3A%2F%2Fmedium.com%2Fcoinmonks%2Fmastering-solidity-a-comprehensive-guide-to-data-types-27a6cabfb5b3&size=99KB&name=A+Comprehensive+Guide+to+Solidity+Data+Types+%7C+Coinmonks&oid=1&h=500&w=700&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.K6WqupLuftP21s9Oeh2EFAHaFS%3Fpid%3DApi&tt=A+Comprehensive+Guide+to+Solidity+Data+Types+%7C+Coinmonks&sigr=ogwc2uD8suHP&sigit=844cNddKg7Gs&sigi=Bn3gz95co947&sign=dFt7gRrjyYv6&sigt=dFt7gRrjyYv6" },
  { id : 3 ,title: "Next.js for Web3", teacher: "Charlie", price: "₹1299", imageUrl: "https://images.search.yahoo.com/search/images;_ylt=AwrO.aqWyv1oDgYMvA9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210US885G0&p=solidity+image&fr=mcafee&th=338&tw=474&imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A700%2F1*BTtLgd8UqPe9rC3wU3ApdQ.png&rurl=https%3A%2F%2Fmedium.com%2Fcoinmonks%2Fmastering-solidity-a-comprehensive-guide-to-data-types-27a6cabfb5b3&size=99KB&name=A+Comprehensive+Guide+to+Solidity+Data+Types+%7C+Coinmonks&oid=1&h=500&w=700&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.K6WqupLuftP21s9Oeh2EFAHaFS%3Fpid%3DApi&tt=A+Comprehensive+Guide+to+Solidity+Data+Types+%7C+Coinmonks&sigr=ogwc2uD8suHP&sigit=844cNddKg7Gs&sigi=Bn3gz95co947&sign=dFt7gRrjyYv6&sigt=dFt7gRrjyYv6" },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Available Courses</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
