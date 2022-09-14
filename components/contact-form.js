import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Textarea,
    Button,
    Stack,
    Spacer,
} from "@chakra-ui/react";

import { ContactAlert } from "./alerts";
import { useTranslation } from "next-i18next";

const ContactForm = () => {
    const { t } = useTranslation("contact");
    const sendForm = (values, actions) => {
        setTimeout(() => {
            emailjs
                .send(
                    "change_me", //service_key
                    "change_me", //template_key
                    values,
                    "change_me" //user_key
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        actions.resetForm();
                        actions.setStatus(true);
                    },
                    (error) => {
                        console.log(error.text);
                        actions.setStatus(false);
                    }
                );
            actions.setSubmitting(false);
            setTimeout(() => {
                actions.setStatus(undefined);
            }, 10000);
        }, 1000);
    };

    const validateName = (value) => {
        let error;
        if (!value) {
            error = `${t("errorName")}`;
        }
        return error;
    };
    const validateMail = (value) => {
        let error;
        if (!value) {
            error = `${t("errorEmail")}`;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = `${t("errorEmailInvalidAdress")}`;
        }
        return error;
    };
    const validateMessage = (value) => {
        let error;
        if (!value) {
            error = `${t("errorMessage")}`;
        } else if (value.length < 10) {
            error = `${t("errorMessageTooShort")}`;
        }
        return error;
    };
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    surname: "",
                    email: "",
                    message: "",
                }}
                onSubmit={sendForm}
            >
                {(props) => (
                    <Form>
                        <ContactAlert status={props.status} />
                        <Stack direction="column" spacing={3} my={5}>
                            <Stack direction="row">
                                <Field name="name" validate={validateName}>
                                    {({ field, form }) => (
                                        <FormControl
                                            variant="chocoForm"
                                            isRequired
                                            isInvalid={
                                                form.errors.name &&
                                                form.touched.name
                                            }
                                        >
                                            <FormLabel htmlFor="name">
                                                {t("labelName")}
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                type="text"
                                            ></Input>
                                            <FormErrorMessage>
                                                {form.errors.name}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="surname">
                                    {({ field }) => (
                                        <FormControl>
                                            <FormLabel htmlFor="surname">
                                                {t("labelSurname")}
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                type="text"
                                            ></Input>
                                        </FormControl>
                                    )}
                                </Field>
                            </Stack>
                            <Field name="email" validate={validateMail}>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={
                                            form.errors.email &&
                                            form.touched.email
                                        }
                                    >
                                        <FormLabel htmlFor="email">
                                            {t("labelEmail")}
                                        </FormLabel>
                                        <Input {...field} type="email"></Input>
                                        <FormErrorMessage>
                                            {form.errors.email}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="message" validate={validateMessage}>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={
                                            form.errors.message &&
                                            form.touched.message
                                        }
                                    >
                                        <FormLabel htmlFor="message">
                                            {t("labelMessage")}
                                        </FormLabel>
                                        <Textarea
                                            placeholder={t('pholderMesage')}
                                            minH="150px"
                                            maxH="500px"
                                            {...field}
                                        />
                                        <FormErrorMessage>
                                            {form.errors.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Stack direction="row" my={3}>
                                <Button
                                    onClick={props.handleReset}
                                    variant="switch"
                                    bg="red.400"
                                    _hover={{ bg: "red.500" }}
                                >
                                    {t("buttonReset")}
                                </Button>
                                <Spacer />
                                <Button
                                    onClick={props.handleSubmit}
                                    variant="switch"
                                    isLoading={props.isSubmitting}
                                >
                                    {t("buttonSubmit")}
                                </Button>
                            </Stack>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default ContactForm;
