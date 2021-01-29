import React from 'react'
import { Checkbox, Anchor, Label }from "./styles"

const PrivacyPolicy = () => {
    return(        
        <Checkbox>
            <div className="checker" id="privacy">
                <input
                type="checkbox"
                value="0"
                required
                name="privacy"
                autocomplete="off"
                />
                <Label for="privacyInput">
                Acepto <Anchor href="#"> politica de Privacidad</Anchor>
                </Label>
            </div>
        </Checkbox>
    )
}

export default PrivacyPolicy
