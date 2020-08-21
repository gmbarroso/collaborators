import React, { Fragment, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useRouter, useForm } from '../../hooks'
import {
    Button,
    Form,
    InputGroup
} from 'react-bootstrap'
import { postCollaborators, updateCollaborator } from '../../requests'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const NewCollaborator = ({ collaborator }) => {
    const [ hasId, setHasId ] = useState(collaborator ? true : false)
    const router = useRouter()
    const initialValues = {
        name: collaborator ? collaborator.name : "",
        position: collaborator ? collaborator.position : "",
        cpf: collaborator ? collaborator.cpf : "",
        email: collaborator ? collaborator.email : ""
    }
    const {
        values,
        // errors,
        // touched,
        validated,
        handleChange,
        // handleBlur,
        handleSubmit
    } = useForm({
        initialValues,
        onSubmit: values => ({ values })
    })

    const handleDisabled = () => {
        if(hasId) {
            setHasId(false)
        }
    }

    const onBack = (e) => router.push('/')

    const onSubmitAndValid = (e) => {
        const entries = Object.values(values)
        const findEmpty = entries.find(value => value === "")

        if(!collaborator) {
            if(findEmpty === undefined && validated) {
                postCollaborators(values)
                return router.push('/')
            }
        } else {
            if(findEmpty === undefined && validated) {
                updateCollaborator(collaborator.id, values)
                return router.push('/')
            }
        }
    }

    return(
        <Fragment>
            <div className="new">
                <span type="button" className="backBtn" variant="primary" size="sm" onClick={onBack}><strong>Go back</strong></span>
                <div className="headerNew">
                    <h3>New Collaborator</h3>
                    <Button type="button" className="editBtn" size="sm" onClick={handleDisabled} disabled={!hasId}>Edit Collaborator</Button>
                </div>
            </div>
            <div className="newContainer">
                <div className="photo">
                    Photo and Logs
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                required
                                name="name"
                                type="text"
                                placeholder="Type the collaborator name"
                                onChange={handleChange}
                                value={values.name}
                                disabled={hasId}
                            />
                            <Form.Control.Feedback type="invalid">
                                This name is not valid
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="position">
                        <Form.Label>Position</Form.Label>
                        <InputGroup>
                            <Form.Control
                                required
                                name="position"
                                type="text"
                                placeholder="Type the collaborator position"
                                onChange={handleChange}
                                value={values.position}
                                disabled={hasId}
                            />
                            <Form.Control.Feedback type="invalid">
                                This position is not valid
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <InputGroup>
                        <Form.Control
                            type="text"
                            name="cpf"
                            placeholder="His / Her CPF"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                            value={values.cpf}
                            required
                            disabled={hasId}
                        />
                        <Form.Control.Feedback type="invalid">
                            This CPF is not valid
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="What about his / her e-mail"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                            value={values.email}
                            required
                            disabled={hasId}
                        />
                        <Form.Control.Feedback type="invalid">
                            This e-mail is not valid
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>   
                    <div className="submitDiv">
                        <Button type="submit" size="sm" className="checkSubmitBtn" onClick={onSubmitAndValid}>
                            {!validated  ? 'Check values' : 'Submit changes'}
                        </Button>
                    </div>
                </Form>
            </div>
        </Fragment>
    )
}

export default withRouter(NewCollaborator)