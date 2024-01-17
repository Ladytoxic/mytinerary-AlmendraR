import axios from "axios";
import { useEffect, useRef } from "react";
import apiUrl from "../../api";

export const GoogleSignIn = () => {
    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post(`${apiUrl}/auth/google_signin`, data);
        console.log(userResponse)
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "735789767947-3rdeucfgm5p0ppqfvse90434qh1bbs3l.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                {
                    type: 'standard',
                    shape: 'pill',
                    size: "large",
                    text: 'signin_with'
                }
            );
        }
    },
        []
    )

    return (
        <div className="google-signin" style={{ colorScheme: 'light' }} ref={googleButton}></div>
    )
}