# Eser Sahiner's Homepage

[Click here](https://www.esersahiner.com/) to see it live!

# Stack

 - [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
 - [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
 - [Framer Motion](https://www.framer.com/motion/) - An animation library for React
 - [i18next](https://www.i18next.com/) - An internationalization framework for JavaScript

# Contact Me - EmailJS

To make form work

```
$PROJECT_ROOT
│
├── components
    ├──contact-form.js
```

Starts at line 17

```

const ContactForm = () => {
    const { t } = useTranslation("contact");
    const sendForm = (values, actions) => {
        setTimeout(() => {
            emailjs
                .send(
                    "change_me", //service_ID
                    "change_me", //template_ID
                    values,
                    "change_me" //user_ID
                )
```

change the "change_me" areas with your IDs from [EmailJS](https://dashboard.emailjs.com/) dashboard.

# Important Note(s)

Differences between live version and this repo are;

 - Live has resume download counter. (Firebase integration)
 
 - Live has a video at home page.
 
 - Live's contact form works well :)

# License

MIT License.

You can create your own homepage for free without notifying me under the following condition(s):

 - Add a link to my homepage
 - Do not use my logo
 - Do not use the svg animation where is in homepage

Check out [LICENSE](https://github.com/esershnr/esersahiner-homepage/blob/main/License) for more detail.
