import './RightBorderImage.css';
import { motion } from 'framer-motion';

const RightBorderImage = () => {
    return (
        <div className="right-border-image">
            {/* Your image element */}
            <motion.img initial={{height:"0%",opacity:0}} animate={{height:"100%",opacity:1}} transition={{duration:1,ease:"easeInOut"}} src="./Border/left_border.svg" alt="Right Border" />
        </div>
    );
};

export default RightBorderImage;
