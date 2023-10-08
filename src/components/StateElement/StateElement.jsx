import s from "./StateElement.module.scss";

const StateElement = (props) => {
   return (
      <li className={s.block}>
         <div className={s.nameWrap}>
            <p className={s.name}>Температура</p>
         </div>

         <p className={s.value}>
            9,9<span className={s.measureUnit}>°C</span>
         </p>

         <div className={s.moreinfo}>
            <p className={s.perday}>За день:</p>
            <div className={s.infoWrap}>
               <div className={s.max}>max: 14.9</div>
               <div className={s.min}>min: 4.9</div>
            </div>
         </div>
         {/* {props.name} = {props.value} */}
      </li>
   );
};

export default StateElement;
