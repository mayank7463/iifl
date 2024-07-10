import './LeftBorderImage.css';
import { motion } from 'framer-motion';

const LeftBorderImage = () => {
    return (
        <div className="left-border-image">
            {/* Your image element */}
            <motion.img initial={{height:"0%",opacity:0}} animate={{height:"100%",opacity:1}} transition={{duration:1,ease:"easeInOut"}} src="./Border/left_border.svg" alt="Left Border" />
        </div>
    );
};

export default LeftBorderImage;
