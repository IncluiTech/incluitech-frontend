const config = {
  API_SSP_URL: process.env.REACT_APP_API_SSP_URL || 'http://localhost:8080',
  MAILING_AUTH: {
    user: process.env.REACT_APP_MAILING_AUTH_USER,
    pass: process.env.REACT_APP_MAILING_AUTH_PASS
  }
}
export default config
