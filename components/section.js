import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        const result = shouldForwardProp(prop) || prop === "transition";
        return result;
    },
});

const Section = ({ children, delay = 0, ...props }) => {
    return (
        <StyledDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay }}
            {...props}
        >
            {children}
        </StyledDiv>
    );
};

export default Section;
