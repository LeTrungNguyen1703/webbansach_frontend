import React from "react";
import {FooterLink} from "./footer-components/FooterLink";
import {FooterSubscribe} from "./footer-components/FooterSubscribe";
import {FooterSocialLink} from "./footer-components/FooterSocialLink";

function Footer() {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <FooterLink section={"Section"}/>
                    <FooterLink section={"Section"}/>
                    <FooterLink section={"Section"}/>

                    <FooterSubscribe/>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <FooterSocialLink href={"#"} icon={"fab fa-twitter"}/>
                        <FooterSocialLink href={"#"} icon={"fab fa-facebook"}/>
                        <FooterSocialLink href={"#"} icon={"fab fa-instagram"}/>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;