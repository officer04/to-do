import getApi from "./base/getApi"

const authenticateUser = () => {
  const res = getApi('http://localhost:5000/health-check2');
}
export default authenticateUser

