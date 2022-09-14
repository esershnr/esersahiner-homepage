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

const simpleTheme = () => {
    const { t } = useTranslation("contact");
    return (
        <Layout title="Simple Theme">
            <Container mt={12}>
                <Title>
                    Simple Responsive HTML Template
                    <Badge>2021</Badge>
                </Title>
                <Center my={6}>
                    <WorkImage
                        src="/images/thumbnails/rpt-thumbnail.png"
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
                        <span>HTML, CSS, JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Live Demo</Meta>
                        <NextLink
                            href="https://esershnr.github.io/simple-html-template/"
                            passHref
                        >
                            <Link target="_blank">Click Here</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <NextLink
                            href="https://github.com/esershnr/simple-html-template"
                            passHref
                        >
                            <Link target="_blank">Click Here</Link>
                        </NextLink>
                    </ListItem>
                </List>
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

export default simpleTheme;
