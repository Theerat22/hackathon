// import { Welcome } from "./sections/welcome";
import { Form } from "@/app/focus/sections/welcome";
import Navbar from "../components/Navbar";
const Focus: React.FC = () => {

    return (
        <>
        <Navbar
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
      />
        <main>
            <Form />
        </main>
        </>
    );
};

export default Focus;
