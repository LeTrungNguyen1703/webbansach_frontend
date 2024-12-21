import React from "react";
import {FooterLinkLi} from "./FooterLink-li";

interface FooterLinkProps {
    section: string
}

export  function FooterLink ({section}:FooterLinkProps) {

    return (
        <div className="col-6 col-md-2 mb-3">
            <h5>{section}</h5>
            <ul className="nav flex-column">
                <FooterLinkLi href={"#"} name={"Home"}/>
                <FooterLinkLi href={"#"} name={"Home"}/>
                <FooterLinkLi href={"#"} name={"Home"}/>
                <FooterLinkLi href={"#"} name={"Home"}/>
                <FooterLinkLi href={"#"} name={"Home"}/>
            </ul>
        </div>
    )
}