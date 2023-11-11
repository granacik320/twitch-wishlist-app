import {useLocation, useNavigate} from "react-router-dom";
import {useSignIn} from "react-auth-kit";
import axios from "axios";
import {useEffect} from "react";

const AuthPage = () => {
    const signIn = useSignIn()
    const navigate = useNavigate()
    const validateToken = async (token) => {
        console.log("Validating...")
        const response = await axios.get(`https://id.twitch.tv/oauth2/validate`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const { data, status } = response;
        return { data, status };
    };

    const getUserInfo = async (token) => {
        const response = await axios.get(`https://id.twitch.tv/oauth2/userinfo`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const { data, status } = response;
        return { data, status };
    };

    const location = useLocation();

     useEffect(() => {
         if (location.hash) {
             const {access_token} = location.hash
                 .substring(1)
                 .split('&')
                 .reduce((authInfo, s) => {
                     const parts = s.split("=");
                     authInfo[parts[0]] = decodeURIComponent(
                         decodeURIComponent(parts[1])
                     );
                     return authInfo;
                 }, {});
             if (access_token) {
                 validateToken(access_token).then(r => {
                     if (r.status !== 200) {
                         return console.log("Błędny token", r)
                     }
                     localStorage.setItem("user_id", r.data.user_id)
                     localStorage.setItem("login", r.data.login)
                     localStorage.setItem("client_id", r.data.client_id)
                 })


                 getUserInfo(access_token).then(r => {
                     if (r.status !== 200) {
                         return console.log("Błędny token")
                     }
                     console.log(r.data)
                     localStorage.setItem("preferred_username", r.data.preferred_username)
                     localStorage.setItem("profilePictureUrl", r.data.picture)
                 })

                 const validationInterval = setInterval(() => {
                     validateToken(access_token);
                 }, 60 * 60 * 1000);

                 if (signIn({
                     token: access_token,
                     tokenType: 'Bearer',
                     authState: {name: 'React User', uid: 123456},
                     expiresIn: 60
                 })) {
                     navigate('/secure')
                 } else {
                     alert("Wystąpił problem. Spróbuj ponownie")
                 }
             }
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
}

export default AuthPage;