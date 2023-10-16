import s from "./GeneralData.module.scss";

const GeneralData = () => {
   return (
      <div className={s.wrap}>
         <div className={s.element}>
            <p className={s.name}>Текущая дата</p>
            <p className={s.value}>10/08/2023</p>
         </div>

         <div className={s.element}>
            <p className={s.name}>Текущее время</p>
            <p className={s.value}>11:22</p>
         </div>

         <div className={s.element}>
            <p className={s.name}>Обновление данных через</p>
            <p className={s.value}>04 мин. 35 сек.</p>
         </div>
      </div>
   );
};

export default GeneralData;
