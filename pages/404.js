import NextLink from "next/link";
import {
    Flex,
    Container,
    Heading,
    Image,
    Button,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const NotFound = () => {
    const { t } = useTranslation("contact");
    const NotFoundImage = "/images/icon/404NotFoundIcon.png";
    return (
        <Layout title={"404"}>
            <Container>
                <Flex
                    minH="85vh"
                    direction="column"
                    justify="center"
                    align="center"
                >
                    <Image
                        boxSize="200px"
                        objectFit="contain"
                        src={NotFoundImage}
                        alt="404"
                        pointerEvents="none"
                    />
                    <Heading as="h2" size="lg">
                        404
                    </Heading>
                    <Heading as="h3" size="md">
                        Page Not Found
                    </Heading>
                    <NextLink href="/" passHref>
                        <Button
                            mt={3}
                            leftIcon={<ArrowBackIcon />}
                            colorScheme="teal"
                            variant="switchOutline"
                        >
                            Return to homepage
                        </Button>
                    </NextLink>
                </Flex>
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

export default NotFound;
