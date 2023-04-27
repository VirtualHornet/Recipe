import Cake from "../components/Cake";
import Meat from "../components/Meat";
import {motion} from "framer-motion";


function Home(){
    return(<motion.div
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration: 1}}
    >   
        <Cake/>
        <Meat />
    </motion.div>
    )
}

export default Home;