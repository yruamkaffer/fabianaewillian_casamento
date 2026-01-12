import './App.css';
import './index.css';
import FAQ from "./components/FAQ";
import OurStory from "./components/OurStory";
import SaveTheDate from "./components/SaveTheDate";
import GiftList from "./components/GiftList";
import WhenAndWhere from "./components/WhenAndWhere";
import { FaQuoteLeft, FaQuoteRight, FaHeart } from "react-icons/fa";

function App() {
  return (
    <>
      <session className='flex flex-col header-background w-screen h-screen'>
        <SaveTheDate />
      </session>

      <session className='flex flex-col justify-center items-center px-[1rem] py-10'>
        <OurStory />
      </session>

      <session className='relative flex flex-col justify-center items-center px-4 bg-[#fffae8] h-[30rem] md:h-auto py-20 -top-44'>
        <div className='relative flex flex-col items-center justify-center border-2 border-[#c8dcbf] min-h-[15rem] w-full md:w-[60rem] p-8 top-[165px]'>
          <FaQuoteLeft
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#fffae9] text-[#4e6146] p-4"
            size={84}
          />
          <div className='flex flex-col mt-8'>
            <span className='font-petrona text-2xl md:text-[34px] text-center font-bold opacity-75 px-4 md:px-20'>
              Assim, já não são dois, mas uma só carne. Portanto, não separe o homem o que Deus uniu.
            </span>
            <span className='font-petrona text-base md:text-[20px] text-center font-bold opacity-75 mt-4'>
              - Mateus 19:6
            </span>
          </div>
          <FaQuoteRight
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-[#fff] text-[#4e6146] p-4"
            size={74}
          />
        </div>
      </session>
      <section className="flex justify-center items-center pb-10 md:pb-0">
        <FAQ />
      </section>

      <section className='flex justify-center w-full py-10'>
        <WhenAndWhere />
      </section>

      <section className="py-10 pb-32">
        <GiftList />
      </section>

      <footer className="bg-[#fffae8] py-6 border-t border-[#fae49d]">
        <div className="flex items-center justify-center w-full opacity-80 font-semibold gap-2">
          <span >Feito com</span>
          <FaHeart className="text-[#ad1d1d]" />
          <span >by</span>
          <a href="#" target="_blank" rel="noopener noreferrer" className=" hover:text-[#cfaf46] transition-colors font-semibold">Yruam e Milena</a>
        </div>
      </footer>
    </>
  );
}
export default App;