// components/UniversityRecommendation.tsx
"use client";
import React from 'react';
import { University } from '@/app/models/University';
import { recommendUniversity } from '@/app/api/recommendation';
import { useForm } from "@/app/context/GlobalContext";

const universities: University[] = [
  { name: 'จุฬาลงกรณ์มหาวิทยาลัย', environment: 0, transportation: 3, costOfLiving: 2, accommodation: 4 },
  { name: 'มหาวิทยาลัยมหิดล', environment: 2, transportation: 4, costOfLiving: 2, accommodation: 3 }
];

const userScores = { environment: 4, transportation: 3, costOfLiving: 2, accommodation: 3 };
const weights = { environment: 1, transportation: 1, costOfLiving: 1, accommodation: 1 };

const UniversityRecommendation: React.FC = () => {
  const recommendedUniversities = recommendUniversity(universities, weights, userScores);
  const { formData } = useForm();
  // const user2 = { environment: 4, transportation: 3, costOfLiving: 2, accommodation: 3 };
  console.log(formData);
  return (
    <div>
      <h1>Recommended Universities</h1>
      <ul>
        {recommendedUniversities.map((uni) => (
          <li key={uni.name}>{uni.name}: {uni.score}</li>
        ))}
        <h1>{formData.liftstyles}</h1>
      </ul>
    </div>
  );
};

export default UniversityRecommendation;
