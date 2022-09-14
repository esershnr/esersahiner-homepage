import {
    Box,
    Heading,
    Stack,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    Text,
} from "@chakra-ui/react";
import {
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiSass,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiGraphql,
} from "react-icons/si";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "next-i18next";

const IconPopover = ({ icon, name, explvl }) => {
    const { t } = useTranslation("common");
    const level = (exp) => {
        if (exp == 1) {
            return (
                <Stack direction="row" justify="center" color="yellow">
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </Stack>
            );
        } else if (exp == 2) {
            return (
                <Stack direction="row" justify="center" color="yellow">
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </Stack>
            );
        } else if (exp == 3) {
            return (
                <Stack direction="row" justify="center" color="yellow">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </Stack>
            );
        } else if (exp == 4) {
            return (
                <Stack direction="row" justify="center" color="yellow">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </Stack>
            );
        } else if (exp == 5) {
            return (
                <Stack direction="row" justify="center" color="yellow">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </Stack>
            );
        } else {
            return <i>{t("invalidSkill")}</i>;
        }
    };
    return (
        <Popover>
            <PopoverTrigger>
                <IconButton
                    icon={icon}
                    aria-label={`Popover button of ${name}`}
                    variant="skills"
                />
            </PopoverTrigger>
            <PopoverContent
                backdropFilter="blur(10px)"
                bg="rgba(0,0,0,0.7)"
                border="none"
                color="white"
                w={180}
                _focus={{ boxShadow: "none" }}
            >
                <PopoverCloseButton _focus={{ boxShadow: "none" }} />
                <PopoverHeader>
                    <Stack direction="column" align="center" justify="center">
                        <Box fontSize={30}>{icon}</Box>
                        <Text>{name}</Text>
                    </Stack>
                </PopoverHeader>
                <PopoverBody align="center">
                    <>
                        {t("expLevel")} {level(explvl)}
                    </>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

const Skills = () => {
    const { t } = useTranslation("common");
    return (
        <Box>
            <Heading variant="section-title">{t("skillsTitle")}</Heading>
            <Stack
                direction="row"
                shouldWrapChildren={true}
                wrap="wrap"
                spacing={0}
            >
                <IconPopover
                    icon={<SiAdobephotoshop />}
                    name="Adobe Photoshop"
                    explvl={5}
                />
                <IconPopover
                    icon={<SiAdobeillustrator />}
                    name="Adobe Illustrator"
                    explvl={4}
                />
                <IconPopover
                    icon={<SiAdobeaftereffects />}
                    name="Adobe AfterEffects"
                    explvl={4}
                />
                <IconPopover
                    icon={<SiAdobepremierepro />}
                    name="Adobe Premiere Pro"
                    explvl={3}
                />
                <IconPopover icon={<SiHtml5 />} name="Html 5" explvl={5} />
                <IconPopover icon={<SiCss3 />} name="Css 3" explvl={5} />
                <IconPopover
                    icon={<SiJavascript />}
                    name="JavaScript"
                    explvl={4}
                />
                <IconPopover icon={<SiSass />} name="Sass/Scss" explvl={4} />
                <IconPopover icon={<SiReact />} name="React.JS" explvl={4} />
                <IconPopover icon={<SiNextdotjs />} name="Next.JS" explvl={4} />
                <IconPopover icon={<SiRedux />} name="Redux" explvl={3} />
                <IconPopover icon={<SiGraphql />} name="GraphQL" explvl={1} />
            </Stack>
        </Box>
    );
};

export default Skills;
