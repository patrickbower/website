// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https:/patrickbower.com/", // Always put "/" at the end of the URL
    author: "Patrick Bower",
    desc: "A personal portfolio",
    title: "Patrick Bower Product Design",
    ogImage: "images/pb-logo.png",
    keywords:
        "Personal portfolio, landing page, page template, developer portfoliom designer portfolio",
    postPerPage: 4
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "LinkedIn",
        href: "www.linkedin.com/in/patrick-bower",
        icon: "ph:linkedin-logo-duotone",
        title: `Follow ${SITE.title} on LinkedIn`,
        active: true
    },
    {
        name: "Github",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:github-logo-duotone",
        title: `Follow ${SITE.author} on Github`,
        active: false
    },
    {
        name: "Mail",
        href: "mailto:yourmail@gmail.com",
        title: `Send an email to ${SITE.title}`,
        icon: "",
        active: false
    },
    {
        name: "Twitter",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:twitter-logo-duotone",
        title: `Follow ${SITE.author} on Twitter`,
        active: false
    },
    {
        name: "YouTube",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on YouTube`,
        active: false
    },
    {
        name: "WhatsApp",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on WhatsApp`,
        active: false
    },
    {
        name: "Snapchat",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on Snapchat`,
        active: false
    },
    {
        name: "CodePen",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on CodePen`,
        active: false
    },
    {
        name: "Discord",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "",
        title: `${SITE.title} on Discord`,
        active: false
    },
    {
        name: "Facebook",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:facebook-logo-duotone",
        title: `Follow ${SITE.title} on Facebook`,
        active: false
    },
    {
        name: "Instagram",
        href: "https://github.com/christian-luntok/astro-lane/",
        icon: "ph:instagram-logo-duotone",
        title: `Follow ${SITE.author} on Instagram`,
        active: false
    }
];
