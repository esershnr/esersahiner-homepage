import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image,
} from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import NextLink from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const GithubFinder = () => {
    const { t } = useTranslation("portfolio");
    return (
        <Layout title="Github Finder">
            <Container mt={12}>
                <Title>
                    Github Finder by Eser Şahiner <Badge>2021</Badge>
                </Title>
                <Center my={6}>
                    <WorkImage
                        src="/images/thumbnails/ghf-thumbnail.png"
                        alt="icon"
                    />
                </Center>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Live Demo</Meta>
                        <NextLink
                            href="https://github-finder-by-esersahiner.netlify.app/"
                            passHref
                        >
                            <Link target="_blank">Click Here</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <NextLink
                            href="https://github.com/esershnr/github-finder"
                            passHref
                        >
                            <Link target="_blank">Click Here</Link>
                        </NextLink>
                    </ListItem>
                </List>
                <Heading variant="section-title" mt={10}>
                    Açıklama
                </Heading>
                <Paragraph>
                    {t("githubFinderInDepthDesc")}
                </Paragraph>
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

export default GithubFinder;
