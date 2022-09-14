import { Container, Box, Text, Divider, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { WorkSocial } from "./socials";

const Footer = () => {
    const { t } = useTranslation("footer");
    return (
        <Box mt={10}>
            <Container maxW="container.md">
                <Divider />
                <Stack direction="column" p={4}>
                    <Text align="center">{t("footerTitle")}</Text>
                    <WorkSocial />
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
