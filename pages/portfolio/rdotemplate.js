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

const rdoTheme = () => {
    const { t } = useTranslation("contact");
    return (
        <Layout title="Red Dead Template">
            <Container mt={12}>
                <Title>
                    Red Dead Redemption HTML Template
                    <Badge>2021</Badge>
                </Title>
                <Center my={6}>
                    <WorkImage
                        src="/images/thumbnails/rdot-thumbnail.png"
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
                            href="https://esershnr.github.io/rdro-template/"
                            passHref
                        >
                            <Link target="_blank">Click Here</Link>
                        </NextLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <NextLink
                            href="https://github.com/esershnr/rdro-template"
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

export default rdoTheme;
