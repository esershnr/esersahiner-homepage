import NextLink from "next/link";
import { Link, Stack, IconButton } from "@chakra-ui/react";
import {
    FaGithub,
    FaBehance,
    FaDeviantart,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaTwitch,
    FaYoutube,
    FaSteam,
    FaTiktok,
} from "react-icons/fa";

const SocialButton = ({ icon, href, name }) => {
    return (
        <NextLink href={href} passHref>
            <Link isExternal>
                <IconButton icon={icon} aria-label={name} variant="socials" />
            </Link>
        </NextLink>
    );
};

export const WorkSocial = () => (
    <Stack
        direction="row"
        shouldWrapChildren={true}
        wrap="wrap"
        spacing={0}
        justify="center"
    >
        <SocialButton
            icon={<FaGithub />}
            href="https://www.github.com/esershnr"
            name="Github"
        />
        <SocialButton
            icon={<FaBehance />}
            href="https://www.behance.net/esershnr"
            name="Behance"
        />
        <SocialButton
            icon={<FaLinkedin />}
            href="https://www.linkedin.com/in/esershnr/"
            name="LinkedIn"
        />
        {/* <SocialButton
            icon={<FaDeviantart />}
            href="https://www.deviantart.com/esershnr"
            name="DeviantArt"
        /> */}
    </Stack>
);

export const PersonalSocial = () => (
    <Stack
        direction="row"
        shouldWrapChildren={true}
        wrap="wrap"
        spacing={0}
        justify="center"
    >
        <SocialButton
            icon={<FaInstagram />}
            href="https://www.instagram.com/esershnr"
            name="Instagram"
        />
        <SocialButton
            icon={<FaTwitter />}
            href="https://twitter.com/esershnr"
            name="Twitter"
        />
        <SocialButton
            icon={<FaYoutube />}
            href="https://www.youtube.com/channel/UChh6iDLJW9zgFWwoem62_TA"
            name="Youtube"
        />
        {/* <SocialButton
            icon={<FaTiktok />}
            href="https://www.tiktok.com/@esershnr?"
            name="Tiktok"
        /> */}
        {/* <SocialButton
            icon={<FaTwitch />}
            href="https://www.twitch.tv/zesha"
            name="Twitch"
        /> */}
        {/* <SocialButton
            icon={<FaSteam />}
            href="https://steamcommunity.com/id/zesha/"
            name="Steam"
        /> */}
    </Stack>
);
