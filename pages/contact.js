import { Container, Divider, Heading, Stack } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import ContactForm from "../components/contact-form";
import ContactAlternative from "../components/contact-alternative";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const contact = () => {
    const { t } = useTranslation("contact");
    return (
        <Layout title={"Contact"}>
            <Container>
                <Stack direction="column" spacing={10}>
                    <Section delay={0.1}>
                        <Heading as="h2" variant="section-title">
                            {t("contactFormTitle")}
                        </Heading>
                        <ContactForm />
                    </Section>
                    <Divider />
                    <Section delay={0.2}>
                        <Heading as="h2" variant="section-title">
                            {t("altTitle")}
                        </Heading>
                        <ContactAlternative />
                    </Section>
                </Stack>
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

export default contact;
