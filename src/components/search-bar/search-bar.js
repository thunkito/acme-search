import React from "react";
import PropTypes from "prop-types";

// Styled components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Services
import services from "../../services";

// CSS styles
import "./search-bar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            hover: false
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onLeave = this.onLeave.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        const { query } = this.state;
        
        const preppedQuery = services.query.prepareQuery(query);
        
        if (preppedQuery) {
            this.props.onSearch( preppedQuery );
            
            // Tracks user query
            services.analytics.queryEvent(preppedQuery[0]);
        }

        // Tracks form submission
        services.analytics.submitEvent("search submit");

        this.setState({ query: "" });
    }

    onChange(e) {
        this.setState( { [e.target.name]: e.target.value } );
    }
    
    onEnter() {
        this.setState({ hover: true });
    }
    
    onLeave() {
        this.setState({ hover: false });
    }

    render() {
        return (
            <Container fluid className="p-3 text-center text-dark">
                <h1 className="display-4 font-weight-lighter">ACME Search</h1>
                <Form 
                    className={"mx-auto d-flex border rounded-pill" + (this.state.hover ? " shadow": "")}
                    onSubmit={this.onFormSubmit}
                 >
                    <Form.Group
                        className="flex-fill mx-3"
                        onMouseEnter={this.onEnter}
                        onMouseLeave={this.onLeave}
                    >
                        <Form.Control
                            className="w-100 border-0"
                            type="text"
                            name="query"
                            onChange={this.onChange}
                            value={this.state.query}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button className="rounded-pill" type="submit" variant="outline-info">Search</Button>
                </Form>
            </Container>
        );
    }
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBar;