import styled from 'styled-components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0px;

    position: relative;
`
export const InputComp = styled.input<InputProps>`
    height: 21px;
    width: 100%;
    border: 1px solid;
    border-color: #C9D9F0;
`
export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    position: absolute;
    bottom: -15px;
`
export const LabelBody3 = styled.label`
    font-size: 13px;
    margin: 4px 0px;
    color: #404040

`
