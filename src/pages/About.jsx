import React from "react";
import {Button, Form} from 'react-bootstrap';

export class About extends React.Component {
    render() {
        return (
            <>
                <h4 className="">About us...</h4>
                <Button variant="danger">Test button</Button>
                <Form.Group>
                    <Form.Control placeholder="Test"></Form.Control>
                </Form.Group>
            </>
        )
    }
}