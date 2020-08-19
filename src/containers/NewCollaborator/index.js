import React, { Fragment } from 'react'
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
                <Button type="button" className="backBtn" variant="primary" size="sm" onClick={onBack}> Voltar </Button>
                <h3>New Collaborator</h3>
            </div>
            <div className="newContainer">
                <div className="photo">
                    Foto
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                required
                                name="name"
                                type="text"
                                placeholder="Digite seu nome"
                                onChange={handleChange}
                                value={values.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
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
                                placeholder="Qual a posição dele/a na equipe?"
                                onChange={handleChange}
                                value={values.position}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <InputGroup>
                        <Form.Control
                            type="text"
                            name="cpf"
                            placeholder="CPF"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                            value={values.cpf}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="E o e-mail?"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                            value={values.email}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>   
                    <div className="submitDiv">
                        <Button type="submit" onClick={onSubmitAndValid}>Submit form</Button>
                    </div>
                </Form>
            </div>
        </Fragment>
    )
}

export default withRouter(NewCollaborator)