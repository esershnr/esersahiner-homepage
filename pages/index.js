import { Container, Box, Heading, Stack, Button } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import AboutMe from "../components/about-me";
import Skills from "../components/skills";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
    const { t } = useTranslation("common");
    return (
        <Layout>
            <Container>
                <AboutMe />
                <Section delay={0.1} my={10}>
                    <Heading as="h3" variant="section-title">
                        {t("backGroundTitle")}
                    </Heading>
                    <Stack spacing={5}>
                        <Paragraph>{t("backGround")}</Paragraph>
                        <Paragraph>{t("backGround2")}</Paragraph>
                        <Paragraph>{t("backGround3")}</Paragraph>
                        <Paragraph>{t("backGround4")}</Paragraph>
                    </Stack>
                    <Box align="center" my={4}>
                        <NextLink href="/portfolio">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                variant="switch"
                            >
                                {t("buttonMyPortfolio")}
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2} my={10}>
                    <Heading as="h3" variant="section-title">
                        {t("bio")}
                    </Heading>
                    <BioSection>
                        <BioYear>1999</BioYear>
                        {t("bio1999")}
                    </BioSection>

                    <BioSection>
                        <BioYear>2012</BioYear>
                        {t("bio2012")}
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        {t("bio2014")}
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        {t("bio2021")}
                    </BioSection>
                    <BioSection>
                        <BioYear>{t("bioPresentTitle")}</BioYear>
                        {t("bioPresentDesc")}
                    </BioSection>
                </Section>
                <Section delay={0.3} my={10}>
                    <Skills />
                </Section>
            </Container>
        </Layout>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
}

export default Home;
