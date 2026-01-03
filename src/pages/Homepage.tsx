
import Button from "../components/Button";
import { Flex } from "@radix-ui/themes";
import { Logout } from "../slices/authSlice";
import {  useNavigate } from "react-router-dom";

function Homepage() {
const navigate = useNavigate();
  async function handleLogout() {
   const res= await Logout();
    console.log("Logout success:", res);
    if(res){
navigate("/login", { replace: true });
    }

  } 
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <section className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Welcome 👋
        </h1>

        <p className="text-gray-600 mb-6">
          You have successfully landed on the homepage.
        </p>
        <Flex justify="center" >

     <Flex gap="4"  direction={"column"}   >
           <Button label="Get Started" />
        <Button onClick={() => {handleLogout()}} label="Logout" />
     </Flex>        </Flex>
              </section>
    </main>
  );
}

export default Homepage;
