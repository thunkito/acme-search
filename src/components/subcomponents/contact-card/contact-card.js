import React from "react";

// Subcomponents
import DateInfo from "../date-info";
import EmailInfo from "../email-info";
import PhoneInfo from "../phone-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardHeading from "../../styled-components/card-heading";
import CardSubHeading from "../../styled-components/card-subheading";

/**
    "name": "John Doe",
    "company": "Acme Inc",
    "emails": [
        "john@acme.co",
        "doe@gmail.com"
    ],
    "phones": [
        "650-555-5555",
        "+44 171 5555 5555"
    ],
    "last_contact"
 */

function ContactCard({name, company, emails, phones, lastContact, ...props}) {
    return (
        <Card { ...props } className="shadow" bg="white">
            <Card.Body>
                <CardHeading heading={name} />
                {company && <CardSubHeading heading={company} />}
                {emails && <EmailInfo emails={emails} />}
                {phones && <PhoneInfo phones={phones} />}
            </Card.Body>
            <Card.Footer className="bg-white">{lastContact
                ? <DateInfo title={"Last Contacted"} date={lastContact} />
                : <p className="text-muted">You have never contacted {name}.</p>}</Card.Footer>
        </Card>
    );
}

export default ContactCard;