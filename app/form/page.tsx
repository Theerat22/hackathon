// import { Welcome } from "./sections/welcome";
import { Form } from "@/app/form/sections/form";
// import Navbar from "../components/Navbar";
const Home: React.FC = () => {

    return (
        <>
        {/* <Navbar
        navigationType={"single"}
        items={[
          {
            name: "Home",
            path: "#home",
          },
          { name: "Portfolio", path: "#portfolio" },
          {
            name: "Activities",
            path: "#activities",
          },
        ]}
      /> */}
        <main>
            <Form />
        </main>
        </>
    );
};

export default Home;
