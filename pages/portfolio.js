import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import VideosThumbnail from "../public/images/thumbnails/videos-thumbnail.png";
import VisualsThumbnail from "../public/images/thumbnails/visuals-thumbnail.png";
import RDOThemeThumbnails from "../public/images/thumbnails/rdot-thumbnail.png";
import PurpleThemeThumbnail from "../public/images/thumbnails/rpt-thumbnail.png";
import GithubFinderThumbnail from "../public/images/thumbnails/ghf-thumbnail.png";
import Layout from "../components/layouts/article";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Portfolio = () => {
    const { t } = useTranslation("portfolio");
    return (
        <Layout title={"Portfolio"}>
            <Container>
                <Heading as="h2" fontSize={20} mt={12}>
                    {t("firstTitle")}
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6} my={12}>
                    <Section delay="0.1">
                        <WorkGridItem
                            link="https://www.behance.net/esershnr"
                            title={t("visualWorks")}
                            thumbnail={VisualsThumbnail}
                        >
                            {t("vwDesc")}
                        </WorkGridItem>
                    </Section>
                    <Section delay="0.2">
                        <WorkGridItem
                            link="https://www.youtube.com/playlist?list=PLS-D3icqP3qJ_O-pCxkmcF-lYWG6RLc5l"
                            title={t("videoMontage")}
                            thumbnail={VideosThumbnail}
                        >
                            {t("vmDesc")}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Divider my={12} />
                <Heading as="h2" fontSize={20}>
                    {t("secondTitle")}
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6} my={12}>
                    <Section delay="0.3">
                        <WorkGridItem
                            id="rdotemplate"
                            title={t("redDead")}
                            thumbnail={RDOThemeThumbnails}
                        >
                            {t("redDeadDesc")}
                        </WorkGridItem>
                    </Section>
                    <Section delay="0.4">
                        <WorkGridItem
                            id="simpletheme"
                            title={t("resTemplate")}
                            thumbnail={PurpleThemeThumbnail}
                        >
                            {t("resTemplateDesc")}
                        </WorkGridItem>
                    </Section>
                    <Section delay="0.5">
                        <WorkGridItem
                            id="githubfinder"
                            title={t("githubFinder")}
                            thumbnail={GithubFinderThumbnail}
                        >
                            {t("githubFinderDesc")}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
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

export default Portfolio;
