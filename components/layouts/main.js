import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import Footer from "../footer";
import ToTopButton from "../to-top"


const Main = ({ children, router }) => {
    return (
        <Box as="main" position="relative">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Eser Şahiner</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            <Footer />
            <ToTopButton />
        </Box>
    );
};

export default Main;
