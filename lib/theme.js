import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};
const fonts = {
    heading: 'Exo, sans-serif',
};

const styles = {
    global: (props) => ({
        body: {
            bg: mode("#ffffe6", "#141414")(props)
        }
    }),
};

const colors = {
    choco: {
        50: "#E4CAA1",
        100: "#c9945c",
        200: "#b28351",
        900: "#703A00",
    },
    bitter: {
        100: "#373737",
        200: "#2d2d2d",
        300: "#141414",
    },
    milk: "#ffffe6",
};

const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: "bitter.100",
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
    Button: {
        variants: {
            switch: (props) => ({
                bg: mode("choco.100", "bitter.200")(props),
                color: mode("milk", "white")(props),
                _hover: {
                    bg: mode("choco.200", "bitter.100")(props),
                    textDecoration: "none",
                },
                _focus: {
                    boxShadow: "none",
                },
            }),
            switchOutline: (props) => ({
                border: `1px solid`,
                color: mode("choco.900", "white")(props),
                _hover: {
                    bg: mode("choco.50", "bitter.100")(props),
                    textDecoration: "none",
                },
                _focus: {
                    boxShadow: "none",
                },
            }),
            skills: (props) => ({
                fontSize: "40px",
                m: 5,
                color: mode("choco.200", "white")(props), 
                _hover: {
                    color: mode("choco.100", "bitter.100")(props),
                },
                _focus: {
                    boxShadow: "none",
                },
            }),
            socials: (props) => ({
                color: mode("bitter.300", "white")(props),
                transition: "all 0.3s",
                _hover: {
                    color: mode("choco.200", "bitter.100")(props),
                    paddingBottom: "1rem",
                },
                _focus: {
                    boxShadow: "none",
                },
            }),
            theme: (props) => ({
                bg: mode("bitter.100", "choco.100")(props),
                color: mode("milk", "white")(props),
                _focus: {
                    boxShadow: "none",
                },
            }),
        },
    },
    Link: {
        variants: {
            "navbar": (props) => ({
                p: 2,
                color: mode("bitter.300", "white")(props),
                rounded: "md",
                _hover: {
                    color: mode("milk", "white")(props),
                    bg: mode("choco.100", "bitter.200")(props),
                    textDecoration: "none",
                },
                _focus: {
                    boxShadow: "none",
                },
            }),
            "navbar-active": (props) => ({
                p: 2,
                color: mode("milk", "white")(props),
                rounded: "md",
                bg: mode("choco.200", "bitter.100")(props),
                _hover: {
                    textDecoration: "none",
                },
                _focus: {
                    boxShadow: "none",
                },
            }),
        },
    },
    Menu: {
        variants: {
            custom: (props) => ({
                list: {
                    bg: mode("milk", "bitter.300")(props),
                    boxShadow: "0px 3px 15px black",
                    border: "none",
                    p: 3,
                },
                item: {
                    transition: "all 0.2s ease-in-out",
                    color: mode("bitter.300", "white")(props),
                    rounded: "md",
                    _hover: {
                        textDecoration: "none",
                        color: mode("milk", "white")(props),
                        bg: mode("choco.200", "bitter.100")(props),
                    },
                    _focus: {
                        boxShadow: "none",
                    },
                },
            }),
        },
    },
    Divider: {
        variants: {
            solid: (props) => ({
                height: "1px",
                bg: mode("choco.900", "bitter.100")(props),
            }),
        },
    },
    FormLabel: {
        baseStyle: (props) => ({
            color: mode("choco.900", "white")(props),
        }),
    },
    Input: {
        variants: {
            outline: (props) => ({
                field: {
                    borderColor: mode("choco.100", "gray")(props),
                    _hover: {
                        borderColor: mode("choco.900", "bitter.100")(props),
                    },
                    _focus: {
                        boxShadow: "none",
                        border: mode(
                            "2px solid black",
                            "2px solid white"
                        )(props),
                    },
                },
            }),
        },
    },
    Textarea: {
        variants: {
            outline: (props) => ({
                borderColor: mode("choco.100", "gray")(props),
                _hover: {
                    borderColor: mode("choco.900", "bitter.100")(props),
                },
                _focus: {
                    boxShadow: "none",
                    border: mode("2px solid black", "2px solid white")(props),
                },
                _placeholder: {
                    color: mode("blackAlpha.500", "whiteAlpha.500")(props),
                },
            }),
        },
    },
    Drawer: {
        variants: {
            switch: (props) => ({
                overlay: {
                    backdropFilter: "blur(5px)",
                },
                header: {
                    bg: mode("milk", "bitter.300")(props),
                },
                body: {
                    bg: mode("milk", "bitter.300")(props),
                },
                footer: {
                    bg: mode("milk", "bitter.300")(props),
                },
            }),
        },
    },
};

const theme = extendTheme({ config, fonts, components, styles, colors });

export default theme;
