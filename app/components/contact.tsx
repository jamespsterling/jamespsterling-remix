import { Link } from "@remix-run/react";
import LinkedInLogo from "~/components/icons/brands/LinkedInLogo";

export default function Contact() {
	return (
		<div id="contact">
			<h2 className="heading">Get in Touch</h2>

			<div id="contact-form">
				<Link to="https://www.linkedin.com/in/jamespsterling/" target="_blank" rel="noopener">
					<button className="linked-in-button">
						Message me on <LinkedInLogo />
					</button>
				</Link>
				<form method="POST" action="https://formspree.io/jamespsterling@gmail.com">
					<input type="hidden" name="_subject" value="Contact request from portfolio website" />
					<input type="email" name="_replyto" placeholder="Your email" required />
					<textarea name="message" placeholder="Your message" required></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
}
