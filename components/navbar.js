import Logo from "./logo";
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue,
    Spacer,
} from "@chakra-ui/react";

import ThemeToggler from "./theme-toggler";
import LangToggler from "../components/lang-toggler";
import MobileMenu from "./mobile-menu";
import { useTranslation } from "next-i18next";

const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    return (
        <NextLink href={href} passHref>
            <Link variant={active ? "navbar-active" : "navbar"}>
                {children}
            </Link>
        </NextLink>
    );
};

const Navbar = (props) => {
    const { path } = props;
    const { t } = useTranslation("navbar");
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#fffff40", "#20202380")}
            backdropFilter="blur(10px)"
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
            >
                <Flex align="center">
                    <Heading as="h1" size="md">
                        <Logo />
                    </Heading>
                </Flex>
                <Stack display={{ md: "flex", base: "none" }} direction="row">
                    <LinkItem href="/portfolio" path={path}>
                        {t("Portfolio")}
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        {t("Contact")}
                    </LinkItem>
                </Stack>
                <Spacer />
                <Stack direction="row" pr={2}>
                    <Box display={{ base: "none", md: "inline-block" }}>
                        <LangToggler />
                    </Box>
                    <ThemeToggler />
                    <Box display={{ base: "inline-block", md: "none" }}>
                        <MobileMenu LinkItem={LinkItem} path={path} />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Navbar;
