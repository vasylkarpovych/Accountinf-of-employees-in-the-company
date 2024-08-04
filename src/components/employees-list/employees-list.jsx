import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const elements = data.map((item) => {
    return <EmployeesListItem {...item} />;
    // name={item.name} salary={item.salary} ---- таке буде, якщо використати спред оператор, як ми і використовуємо, написавши: ...item
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
