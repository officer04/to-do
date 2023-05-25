import getApi from "./base/getApi"

const registerUser = (user, onSuccess) => {
  const res = getApi('http://localhost:5000/health-check')
  .then((response => {
    onSuccess(response);
  }))
}

export default registerUser