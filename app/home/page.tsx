import { Welcome } from "./sections/home";
import { Hello} from "@/app/home/sections/hello";
const Home: React.FC = () => {

    return (
        <>
        <main>
            <Welcome />
            <Hello />
        </main>
        </>
    );
};

export default Home;
