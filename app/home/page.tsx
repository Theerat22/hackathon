import { Welcome } from "./sections/welcome";
// import { Hello} from "@/app/home/sections/hello";
// import Navbar from "../components/Navbar";
const Home: React.FC = () => {

    return (
        <>
        {/* <Navbar 

        /> */}
        <main>
            <Welcome />
            {/* <Hello /> */}
        </main>
        </>
    );
};

export default Home;
