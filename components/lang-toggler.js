import {
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    IconButton,
    Image,
} from "@chakra-ui/react";
import { RiTranslate2 } from "react-icons/ri";
import { useRouter } from "next/dist/client/router";

const images = {
    turkish: "/images/icon/turkey.png",
    english: "/images/icon/united-kingdom.png",
};

const LangToggler = () => {
    const router = useRouter();
    const cLang = (Lang) => {
        router.push(router.asPath, router.asPath, { locale: Lang });
    };
    return (
        <Menu variant="custom" autoSelect={false}>
            <MenuButton
                as={IconButton}
                icon={<RiTranslate2 />}
                aria-label="language-options"
                variant="switch"
            />
            <MenuList>
                <MenuItem onClick={() => cLang("en")}>
                    English
                    <Image
                        w={25}
                        ml={2}
                        src={images.english}
                        alt="United Kingdom Flag"
                    />
                </MenuItem>
                <MenuItem onClick={() => cLang("tr")}>
                    Türkçe
                    <Image
                        w={25}
                        ml={2}
                        src={images.turkish}
                        alt="Turkey Flag"
                    />
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default LangToggler;
