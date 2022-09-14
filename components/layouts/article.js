import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-item";
import { useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const variants = {
    hidden: { opacity: 0, x: 0, y: -30 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 30 },
};

const Layout = ({ children, title }) => {
    const { t } = useTranslation("navbar");
    return <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5, type: "easeInOut" }}
        style={{ position: "relative", minHeight: "100vh" }}
    >
        <Head>
            <link
                rel="icon"
                type="image/png"
                href={`/images/logo-${useColorModeValue("dark", "light")}.png`}
            />
            {title ? <title>Eser Şahiner - {t(`${title}`)}</title> : <title>Eser Şahiner - {t("Homepage")}</title> }
        </Head>

        <>{children}</>
        <GridItemStyle />
    </motion.article>
};

export default Layout;
