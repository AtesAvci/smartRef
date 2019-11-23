import React, {Component} from "react"
import {
    ModalHeader,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap"

import "Appointment.css"

export default class Appointment extends Componen {
    render() {
        return(
            <Modal>
                <ModalHeader>
                    <h1>
                        Appointment
                    </h1>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="SpecName">
                                To:
                            </Label>
                            <Input name="SpecName" type="text"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Subject">
                                Subject:
                            </Label>
                            <Input name="Subject" type="text"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Message">
                                Message:
                            </Label>
                            <Input name="Message" type="textarea"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="PhysicianName">
                                Referenced By:
                            </Label>
                            <Input name="PhysicianName" type="text"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Availability">
                                Availability: 
                            </Label>
                            <Input name="Availability" type="date"/>
                        </FormGroup>

                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}