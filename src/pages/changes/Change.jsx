import Button from "../../components/UI/button/Button";
import AuthenticationForm from "../../components/authenticationForm/AuthenticationForm";
import './style.scss'

const Change = () => {
  return (  
    <section className="section-change">
      <div className="container">
        <div className="section-change__wrapper">
          <div className="section-change__content">
            <h1 className="section-change__title">Редактирование личных данных</h1>

            <AuthenticationForm/>
           
            {/* <Button text='Save change'/> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Change;