import React from 'react'
import { currency } from '../../helpers/masks'
import { Container, InputComp, ErrorMessage, LabelBody3 } from './styles'

type InputProps = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>

interface IProps extends InputProps {
  error?: any
  label?: string
  handleOnChange?: (value: any) => void
}

const Input = React.forwardRef<HTMLInputElement, IProps>((props, ref) => {
  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    !(props.handleOnChange == null) && props.handleOnChange(e.target.value)
  }

  return (
    <Container>
      <LabelBody3>{props.label}</LabelBody3>
      <InputComp {...props} ref={ref} onChange={handleChange} />
      {props.error && <ErrorMessage>Este campo é obrigatório.</ErrorMessage>}
    </Container>
  )
})

export default Input
