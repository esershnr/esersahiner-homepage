import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Link, Stack } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const ContactAlternative = () => {
    const { t } = useTranslation("contact");
    return (
        <Stack direction="column" my={5} spacing={5}>
            <Button
                as={Link}
                href="tel: +905312958516"
                leftIcon={<PhoneIcon />}
                variant="switch"
            >
                {t('altPhone')}
            </Button>
            <Button
                as={Link}
                href="mailto: esershnr@gmail.com"
                leftIcon={<EmailIcon />}
                variant="switch"
            >
                {t('altMail')}
            </Button>
            <Button
                as={Link}
                href="https://api.whatsapp.com/send/?phone=+905312958516&text=Merhaba,%20esersahiner.com%20%C3%BCzerinden%20size%20ula%C5%9F%C4%B1yorum."
                leftIcon={<FaWhatsapp />}
                variant="switch"
                isExternal
            >
                {t('altWhatsApp')}
            </Button>
        </Stack>
    );
};

export default ContactAlternative;
