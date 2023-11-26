import { motion } from 'framer-motion';

interface ITextAnimateUp {
  text: string;
}

const defaultAnimation = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 20,
    display: 'inline-block'
  }
};

const TextAnimateUp = ({ text }: ITextAnimateUp) => {
  return (
    <motion.span initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
      {text.split('').map((char) => (
        <motion.span
          key={char}
          variants={defaultAnimation}
          transition={{ ease: 'easeOut', opacity: { duration: 1 } }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextAnimateUp;
