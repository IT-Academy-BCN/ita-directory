import React from 'react'

const PrivacyPolicy = () => {
    return(        
        <div  className="required checkbox">
            <div className="checker" id="privacy">
                <input
                type="checkbox"
                value="0"
                required
                name="privacy"
                autocomplete="off"
                />
                <label for="privacyInput">
                <a href="#">Acepto politica de Privacidad</a>
                </label>
            </div>
        </div>
    )
}

export default PrivacyPolicy
