import './style.scss'
const Checkbox = ({id}) => {
  return (
    <div className="confirmation">
      <div className="confirmation__checkbox">
        <input id={id} type="checkbox" />
        <label htmlFor={id}>Keep me signed in</label>
      </div>
    </div>
  );
};

export default Checkbox;
