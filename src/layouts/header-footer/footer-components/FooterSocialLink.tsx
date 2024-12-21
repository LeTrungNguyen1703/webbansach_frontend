import React from "react";

interface FooterSocialLinkProps {
    href: string,
    icon: string
}

export function FooterSocialLink({href, icon}: FooterSocialLinkProps) {

    return (
        <>
            <li className="ms-3 text-primary">
                <a className="link-body-emphasis" href={href}><i className={icon}></i></a>
            </li>
        </>
    )

}