import { Dream } from "@/app/dream/sections/dream";
import UniversityRecommendation from "@/app/dream/sections/form"; 


export default function Page() {
  return (
    <div>
        <Dream />
        <h1>Welcome to the University Recommendation System</h1>
        <UniversityRecommendation />
    </div>
);
}