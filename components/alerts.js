import { AnimatePresence, motion } from "framer-motion";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const ContactAlert = ({ status }) => {
    const { t } = useTranslation("contact");
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={
                    status == undefined ? "info" : status ? "success" : "error"
                }
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Alert
                    status={
                        status == undefined
                            ? "info"
                            : status
                            ? "success"
                            : "error"
                    }
                    variant="solid"
                >
                    <AlertIcon />
                    {status == undefined
                        ? `${t("alertInfo")}`
                        : status
                        ? `${t("alertSuccess")}`
                        : `${t("alertError")}`}
                </Alert>
            </motion.div>
        </AnimatePresence>
    );
};
