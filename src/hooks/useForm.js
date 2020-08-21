import { useState, useEffect, useRef } from "react"

const useForm = ({ initialValues, onSubmit }) => {
    const [values, setValues] = useState(initialValues || {})
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [onSubmitting, setOnSubmitting] = useState(false)
    const [onBlur, setOnBlur] = useState(false)
    const [validated, setValidated] = useState(false)

    const formRendered = useRef(true)

    const handleChange = (event) => {
      const { target } = event
      const { name, value } = target
      // event.persist()
      setValues({ ...values, [name]: value })
    }

    const handleBlur = (event) => {
        const { target } = event
        const { name } = target
        setTouched({ ...touched, [name]: true })
        setErrors({ ...errors })
    }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
        setValidated(false)
      }
  
      if (event) event.preventDefault() 

      setValidated(true)
      setErrors({ ...errors })
      onSubmit({ values, errors })
    }

    useEffect(() => {
        if (formRendered.current) {
          setValues(initialValues)
          setErrors({})
          setTouched({})
          setOnSubmitting(false)
          setOnBlur(false)
        }
        formRendered.current = false
      }, [initialValues])

    return {
        values,
        errors,
        touched,
        validated,
        handleChange,
        handleBlur,
        handleSubmit
      };
}

export default useForm