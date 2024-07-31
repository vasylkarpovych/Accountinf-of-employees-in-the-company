import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = () => {
   return (
      <un className="app-list list-group">
         <EmployeesListItem />
         <EmployeesListItem />
         <EmployeesListItem />
      </un>
   );
};

export default EmployeesList;
