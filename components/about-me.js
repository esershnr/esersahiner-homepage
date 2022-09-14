import { Stack, Avatar, Box, Button, Link } from "@chakra-ui/react";
import Paragraph from "./paragraph";
import { PersonalSocial } from "./socials";
import { DownloadIcon } from "@chakra-ui/icons";
import { useTranslation } from "next-i18next";
import Anim from "./logo-anim";
import { useRouter } from "next/router";

const AboutMe = () => {
    const { t } = useTranslation("common");
    const { locale } = useRouter();
    return (
        <Stack
            direction="column"
            spacing={5}
            py={5}
            px={3}
            bg="rgba(0,0,0,0.1)"
            rounded={10}
            transition="0.5s"
            _hover={{ boxShadow: "0 0 5px" }}
            mt={5}
            justify="center"
            align="center"
        >
            <Anim />
            <Box display="flex" px={10} flexDirection="column" gap={5} fontWeight={500}>
                <Paragraph>{t("aboutMe")}</Paragraph>
                <Paragraph>{t("aboutMe2")}</Paragraph>
            </Box>
            <Box display="flex" flexDir="column">
                <Button
                    as={Link}
                    href={typeof countVal == 'number' ? locale == 'tr' ? "downloadables/cv_2022.pdf" : locale == 'en' ? "downloadables/cv_2022.pdf" : null : null}
                    download
                    leftIcon={<DownloadIcon />}
                    variant="switchOutline"
                >
                    {t("downloadResume")}
                </Button>
            </Box>
            <PersonalSocial />
        </Stack>
    );
};

export default AboutMe;
