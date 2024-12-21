import React from "react";

interface FooterLinkLiProps {
    href : string,
    name : string
}

export function FooterLinkLi({href,name}:FooterLinkLiProps) {
    return (
        <li className="nav-item mb-2"><a href={href} className="nav-link p-0 text-body-secondary">{name}</a></li>
    )
}