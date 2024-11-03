// utils/recommendation.ts
import { University } from '@/app/models/University';

export function calculateScore(university: University, weights: Record<string, number>): number {
  return (
    weights.environment * university.environment +
    weights.transportation * university.transportation +
    weights.costOfLiving * university.costOfLiving +
    weights.accommodation * university.accommodation
  );
}

export function recommendUniversity(universities: University[], weights: Record<string, number>, userScores: Record<string, number>): Array<{ name: string; score: number }> {
  const scores = universities.map((uni) => {
    const totalScore = calculateScore(uni, weights);
    const adjustedScore = totalScore - userScores.environment * uni.environment;
    return { name: uni.name, score: adjustedScore };
  });

  scores.sort((a, b) => b.score - a.score); // Sort scores descending
  return scores;
}
