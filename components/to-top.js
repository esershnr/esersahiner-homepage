import { IconButton } from '@chakra-ui/react'
import { TriangleUpIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react';
const ToTopButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200){
            setVisible(true)
        } 
        else if (scrolled <= 200){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    
    useEffect(()=>{
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, [])
        

    return (
        <IconButton position="fixed" bottom={10} right={10} variant="switch"  opacity={visible? 1:0} icon={<TriangleUpIcon />} onClick={scrollToTop} />
    )

}

export default ToTopButton;



