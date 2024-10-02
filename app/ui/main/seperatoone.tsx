import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";



export function WidgetsExample6() {

  
const [refFirst, inViewFirst] = useInView();
const [refSecond, inViewSecond] = useInView();
const controlsSecond = useAnimation();
const controlsFirst = useAnimation();

useEffect(() => {
  if (inViewFirst) {
    controlsFirst.start({ opacity: 1, x: 0 , transition: { delay: 0.5, duration : 0.5} });
  }
}, [controlsFirst, inViewFirst]);

  useEffect(() => {
  if (inViewSecond) {
    controlsSecond.start({ opacity: 1, x: 0 , transition: { delay: 0.8, duration : 0.5 }});
  }
}, [controlsSecond, inViewSecond]);
  return (
    // CHANGED THE ALIGNMENT OF THE WIDGET TO CENTER BASE OF THE VIEW
    <div className="bg-gradient-to-r bg-brand2  py-14 my-16 px-10 md:px-28 text-white">
         <motion.div ref={refFirst} initial={{ opacity: 0, x: -50 }} animate={controlsFirst} exit={{ opacity: 0, y: 50 }}>
         <h3 color="blue-gray" className="font-bold mb-2">
        Your path to justice starts here
      </h3>
      <h3 className="font-bold text-2xl md:text-4xl w-2/3 mb-5">
        Ready to take the first step towards resolving your legal matters?
      </h3>
      </motion.div>
  
      <div className="flex-grow border-t-4 border-abcf w-2/3"></div>

      <motion.div ref={refSecond} initial={{ opacity: 0, x: -50 }} animate={controlsSecond} exit={{ opacity: 0, y: 50 }}>
      <h3 className="my-5 !text-base font-normal">
        Book an appointment with ABC Foundation today and let us guide you
        towards the solutions you deserve
      </h3>

      <Link href="/booking" target="_blank" rel="noreferrer">
        <Button className="bg-abcf text-black w-42 text-lg" size="lg">
          Book an appointment
        </Button>
      </Link>
      </motion.div>
    </div>
  );
}
export default WidgetsExample6;
