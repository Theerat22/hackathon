// import { Welcome } from "./sections/welcome";
import { Form } from "@/app/relax/sections/welcome";
// import Navbar from "../components/Navbar";
const Relax: React.FC = () => {

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

export default Relax;
