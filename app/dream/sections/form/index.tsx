"use client";
import React, { useState } from 'react';
import { University } from '@/app/models/University';
import { recommendUniversity } from '@/app/api/recommendation';
import { useForm } from "@/app/context/GlobalContext";

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

const UniversityRecommendation: React.FC = () => {
  const { formData } = useForm();
  const [loading, setLoading] = useState(false);
  const [recommendedUniversities, setRecommendedUniversities] = useState<any[]>([]);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<any>(null);

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state

    try {
        const res = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (!res.ok) {
            const errorMessage = await res.text(); // Capture the error message
            throw new Error(`Network response was not ok: ${errorMessage}`);
        }

        const data = await res.json();
        setResponse(data); // Update response state with the fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
        // setResponse({ error: error.message }); // Handle errors gracefully
    } finally {
        setLoading(false); // Reset loading state
    }
  };

  // Calculate recommended universities when component mounts or when userScores/weights change
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
      {/* <p>{formData.lifystyles}</p> Ensure formData.lifystyles is defined in context */}
      
      {/* <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          rows={4}
        />
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
      <h1>{formData.name}</h1>
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div> */}
    </div>
    </section>
  );
};

export default UniversityRecommendation;
