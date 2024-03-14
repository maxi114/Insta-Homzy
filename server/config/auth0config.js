import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:5000",
    issuerBaseURL: "https://dev-f3olnqmxief3koua.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck