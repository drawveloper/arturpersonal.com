import React from "react"
import { FormWrapper } from "./form-element"
import { WhatsAppButton } from "../whatsapp/whatsapp"

export const Form = () => {
  return (
    <FormWrapper>
      <div>
        <p>
          Transformar sua saúde começa com um pequeno passo.
          <br/>
          Use o botão abaixo para <strong>me mandar uma mensagem.</strong> 
          <br/>
          Bora atingir seus objetivos, juntos?
        </p>
      </div>
      <WhatsAppButton/>
    </FormWrapper>
  )
}
