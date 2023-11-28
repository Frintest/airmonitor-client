import React from "react";
import s from "./AirProp.module.scss";

export const AirProp = (props) => {
   React.useEffect(() => {
      props.updateAirStateThunk(0);
   });

   const getAirPropByName = () => {
      const el = props.state.data.find(
         (el) => `/${el.sensor_name}` === props.router.location.pathname
      );

      if (el) {
         // console.log(el.ui_name); // TODO это хороший индикатор того, что нужно обновлять state.data если данные изменились, а не каждые 3 секунды
         return el;
      }
   };

   return <section>{{ ...getAirPropByName() }.ui_name}</section>;
};
