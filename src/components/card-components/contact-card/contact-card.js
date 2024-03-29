import React from "react";
import PropTypes from "prop-types";

// Info components
import DateInfo from "../../info-components/date-info";
import EmailInfo from "../../info-components/email-info";
import PhoneInfo from "../../info-components/phone-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardHeading from "../../styled-components/card-heading";
import CardSubHeading from "../../styled-components/card-subheading";

/* Contact Schema {
        "name": String,
        "company": String,
        "emails": [String],
        "phones": [String],
        "lastContact": String
    }
 */

function ContactCard({name, company, emails, phones, lastContact, ...props}) {
    return (
        <Card { ...props } className="shadow" bg="white">
            <Card.Body>
                <CardHeading data-testid="card-heading" heading={name} />
                {company && <CardSubHeading data-testid="card-subheading" heading={company} />}
                {emails && <EmailInfo data-testid="email-info" emails={emails} />}
                {phones && <PhoneInfo data-testid="phone-info" phones={phones} />}
            </Card.Body>
            <Card.Footer data-testid="card-footer" className="bg-white">
                <DateInfo title={"Last Contacted"} date={lastContact} />
            </Card.Footer>
        </Card>
    );
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    company: PropTypes.string,
    emails: PropTypes.arrayOf(PropTypes.string),
    phones: PropTypes.arrayOf(PropTypes.string),
    lastContact: PropTypes.string.isRequired
};

export default ContactCard;