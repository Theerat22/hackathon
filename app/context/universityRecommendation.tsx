export interface University {
    name: string;
    environment: number;
    transportation: number;
    cost_of_living: number;
    accommodation: number;
}

export function calculateScore(university: University, weights: Record<string, number>): number {
    return (
        weights.environment * university.environment +
        weights.transportation * university.transportation +
        weights.cost_of_living * university.cost_of_living +
        weights.accommodation * university.accommodation
    );
}

export function recommendUniversity(universities: University[], weights: Record<string, number>, userScores: Record<string, number>): [string, number][] {
    const scores: [string, number][] = [];

    for (const uni of universities) {
        let totalScore = calculateScore(uni, weights);
        // Adjust score based on user preferences
        totalScore -= userScores.environment * uni.environment; // Adjust this logic as needed
        scores.push([uni.name, totalScore]);
    }

    // Sort scores from highest to lowest
    scores.sort((a, b) => b[1] - a[1]);

    return scores;
}