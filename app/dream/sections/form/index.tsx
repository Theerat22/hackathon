"use client";
import React, { useState } from 'react';
import { University } from '@/app/models/University';
import { recommendUniversity } from '@/app/api/recommendation';
// import { useForm } from "@/app/context/GlobalContext";

const universities: University[] = [
  {name: 'จุฬาลงกรณ์มหาวิทยาลัย', environment:5 , transportation: 5, costOfLiving: 3, accommodation: 4 },
  {name: 'ธรรมศาสตร์', environment:4 , transportation: 5, costOfLiving: 5, accommodation:5 },
  {name: 'บูรพา', environment:5 , transportation: 3, costOfLiving: 1, accommodation: 3 },
  {name: 'นเรศวร', environment:4 , transportation: 4, costOfLiving: 3, accommodation: 4 },
  {name: 'มเกษตร', environment:5 , transportation: 5, costOfLiving: 3, accommodation: 3 },
  {name:' มเกษมบัณฑิต', environment:3 , transportation: 5, costOfLiving: 1, accommodation: 3 },
  {name: 'มหาวิทยาลัยพายัพ', environment:5 , transportation: 3, costOfLiving: 3, accommodation: 3},
  {name: 'รามคำแหง', environment:4 , transportation: 3, costOfLiving: 3, accommodation: 4 },
  {name: 'ม.ศิลปากร', environment:4 , transportation: 3, costOfLiving: 4, accommodation: 2},
  {name: 'มหาลัยสวนดุสิต', environment:5 , transportation: 3, costOfLiving: 3, accommodation: 3}
];

const userScores = { environment: 4, transportation: 3, costOfLiving: 2, accommodation: 3 };
const weights = { environment: 1, transportation: 1, costOfLiving: 1, accommodation: 1 };

interface RecommendedUniversity {
  name: string;
  score: number;
}

const UniversityRecommendation: React.FC = () => {
  const [recommendedUniversities, setRecommendedUniversities] = useState<RecommendedUniversity[]>([]);
  React.useEffect(() => {
    const recommended = recommendUniversity(universities, weights, userScores);
    setRecommendedUniversities(recommended);
  }, []);

  return (
  <section id='prompt'>
    <div>
      <h1>Recommended Universities</h1>
      <ul>
        {recommendedUniversities.map((uni) => (
          <li key={uni.name}>{uni.name}: {uni.score}</li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default UniversityRecommendation;
