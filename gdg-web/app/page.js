import Header from "./components/Header";
import ContainerOne from "./components/ContainerOne";
import ContainerTwo from "./components/ContainerTwo";
import ContainerThree from "./components/ContainerThree";
import Footer from "./components/Footer";
import { ChakraProvider } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
    <div className="poppins-regular ">
    <ChakraProvider>
    <Header/>
    <ContainerOne/>
    <ContainerTwo/>
    <ContainerThree/>
    <Footer/>
    </ChakraProvider>
    </div>


    </>
  );
}
