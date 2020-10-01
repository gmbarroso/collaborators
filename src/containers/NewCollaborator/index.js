import React, { Fragment, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useRouter, useForm } from '../../hooks'
import { useTranslation } from 'react-i18next'
import {
    Button,
    Form,
    InputGroup
} from 'react-bootstrap'
import {
    postCollaborators,
    updateCollaborator,
    deleteCollaborator
} from '../../requests'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const NewCollaborator = ({ collaborator }) => {
    const { t } = useTranslation('common')
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
        validated,
        handleChange,
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

    const deleteOnClick = (e) => {
        deleteCollaborator(collaborator.id)
        return router.push('/')
    }

    return(
        <Fragment>
            <div className="new">
                <button type="button" className="backBtn" variant="primary" size="sm" onClick={onBack}><strong>{t('newCollaborator.buttons.goBack')}</strong></button>
                <div className="headerNew">
                    <h3>{t('newCollaborator.title')}</h3>
                    {collaborator &&
                        <Button type="button" className="editBtn" size="sm" onClick={handleDisabled} disabled={!hasId}>{t('newCollaborator.buttons.edit')}</Button>
                    }
                </div>
            </div>
            <div className="newContainer">
                <div className="photo">
                    Photo and Logs
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>{t('newCollaborator.labels.name')}</Form.Label>
                        <InputGroup>
                            <Form.Control
                                required
                                name="name"
                                type="text"
                                placeholder={t('newCollaborator.inputs.name')}
                                onChange={handleChange}
                                value={values.name}
                                disabled={hasId}
                            />
                            <Form.Control.Feedback type="invalid">
                                {t('newCollaborator.errorMessages.default')}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="position">
                        <Form.Label>{t('newCollaborator.labels.position')}</Form.Label>
                        <InputGroup>
                            <Form.Control
                                required
                                name="position"
                                type="text"
                                placeholder={t('newCollaborator.inputs.position')}
                                onChange={handleChange}
                                value={values.position}
                                disabled={hasId}
                            />
                            <Form.Control.Feedback type="invalid">
                                {t('newCollaborator.labels.position')}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="cpf">
                        <Form.Label>{t('newCollaborator.labels.cpf')}</Form.Label>
                        <InputGroup>
                        <Form.Control
                            type="text"
                            name="cpf"
                            placeholder={t('newCollaborator.inputs.cpf')}
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                            value={values.cpf}
                            required
                            disabled={hasId}
                        />
                        <Form.Control.Feedback type="invalid">
                            {t('newCollaborator.labels.position')}
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>{t('newCollaborator.labels.email')}</Form.Label>
                        <InputGroup>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder={t('newCollaborator.inputs.email')}
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                            value={values.email}
                            required
                            disabled={hasId}
                        />
                        <Form.Control.Feedback type="invalid">
                            {t('newCollaborator.invalidEmail')}
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>   
                    <div className="submitDiv" style={!hasId ? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'}}>
                        <Button type="button" style={hasId ? {} : {display: 'none'}} className="deleteBtn" variant="primary" size="sm" onClick={deleteOnClick} disabled={!hasId}><strong>{t('newCollaborator.buttons.delete')}</strong></Button>
                        <Button type="submit"  size="sm" className="checkSubmitBtn" onClick={onSubmitAndValid}>
                            {!validated  ? `${t('newCollaborator.buttons.checkValues')}` : `${t('newCollaborator.buttons.submit')}`}
                        </Button>
                    </div>
                </Form>
            </div>
        </Fragment>
    )
}

export default withRouter(NewCollaborator)