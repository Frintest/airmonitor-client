import s from "./GeneralData.module.scss";

const GeneralData = (props) => {
   return (
      <ul>
         <li className={s.item}>
            <p className={s.name}>Текущее время</p>
            <p className={s.value}>11:22</p>
         </li>
         <li className={s.item}>
            <p className={s.name}>Текущая дата</p>
            <p className={s.value}>10/08/2023</p>
         </li>
         <li className={s.item}>
            <p className={s.name}>Обновление данных через</p>
            <p className={s.value}>04 мин. 35 сек.</p>
         </li>
      </ul>
   );
};

export default GeneralData;
