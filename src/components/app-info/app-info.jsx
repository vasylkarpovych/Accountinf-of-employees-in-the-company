import './app-info.css';

const AppInfo = ({ data }) => {
   return (
      <div className="app-info">
         <h1>Облік співробітникув в компанії "Рога і Копита"</h1>
         <h2>Загальна кількість співробтників: {data.length}</h2>
         <h2>
            Премію отримують:{' '}
            {data.filter((riseUser) => riseUser.rise === true).length}
         </h2>
      </div>
   );
};

export default AppInfo;
