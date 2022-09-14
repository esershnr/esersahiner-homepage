import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Stack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import LangToggler from "./lang-toggler";
import ThemeToggler from "./theme-toggler";

const MobileMenu = ({ LinkItem, path }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t } = useTranslation("navbar");
    return (
        <>
            <IconButton
                icon={<HamburgerIcon />}
                aria-label="Mobile-Menu"
                variant="switch"
                onClick={onOpen}
            />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                autoFocus={false}
                variant="switch"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{t("Menu")}</DrawerHeader>

                    <DrawerBody>
                        <Stack>
                            <LinkItem href="/" path={path}>
                                {t("About")}
                            </LinkItem>
                            <LinkItem href="/portfolio" path={path}>
                                {t("Portfolio")}
                            </LinkItem>
                            <LinkItem href="/contact" path={path}>
                                {t("Contact")}
                            </LinkItem>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Stack direction="row">
                            <Box>
                                <LangToggler />
                            </Box>
                            <ThemeToggler />
                        </Stack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MobileMenu;
