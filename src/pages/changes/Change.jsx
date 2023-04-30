import Button from "../../components/UI/button/Button";
import AuthenticationForm from "../../components/authenticationForm/AuthenticationForm";

const Change = () => {
  return (  
    <section className="section">
      <div className="container">
        <div className="section__wrapper">
          <div className="section__content">
            <h1 className="section__title">Редактирование личных данных</h1>

            <AuthenticationForm/>
           
            <Button text='Save change'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Change;