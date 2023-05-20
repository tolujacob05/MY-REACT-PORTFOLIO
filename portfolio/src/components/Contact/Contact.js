import React, { useRef, useState } from "react";
import "./Contact.css"
import EmailJS from "@emailjs/browser"

const Contact = () => {
    const form = useRef();

    const [ done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        EmailJS.sendForm('service_smfsfab', 'template_vh7sze7', form.current, 'px_Y4j4LK3_erTQbh')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
            <div className="contact-form" id="Contact">
                <div className="w-left">
                    <div className="awesome">
                        <span>Get in touch</span>
                        <span>Contact me</span>
                        <div className="blur s-blur1" style={{ background: "#abf1ff94"}}></div>
                    </div>
                </div>

                <div className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="blur c-blur4" style={{ background: "var(--purple)"}}></div>
                        <input type="text" name="user_name" className="user" placeholder="Name"/>
                        <input type="email" name="user_email" className="user" placeholder="Email"/>
                        <div className="blur c-blur9" style={{ background: "var(--purple)"}}></div>
                        <textarea name="message" className="user" placeholder="Message"/>
                        <input type="submit" value="send" className="button" />
                        <span>{done && "Thanks for contacting me! I'll be in touch"}</span>
                        <div className="blur-c-blur1" style={{ background: "var(--purple)"}}></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;