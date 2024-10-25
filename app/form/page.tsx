// import { Welcome } from "./sections/welcome";
import { Form } from "@/app/form/sections/form";
import {Mood} from "@/app/form/sections/mood";
const Home: React.FC = () => {

    return (
        <>
        {/* <Navbar 

        /> */}
        <main>
            <Form />
            <Mood />
            {/* <Hello /> */}
        </main>
        </>
    );
};

export default Home;
