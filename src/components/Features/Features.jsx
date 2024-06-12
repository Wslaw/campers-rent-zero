// import React, { forwardRef, useEffect } from "react";
// import campersData from "../../data/campers.json";
// import FormField from "../FormField/FormField";
// import styles from "./features.module.css";

// const Features = forwardRef((props, ref) => {
//   const { camperId } = props;
//   const camper = campersData.find((item) => item._id === camperId);

//   useEffect(() => {
//     // Логика, если необходимо
//   }, []); // Пустой массив зависимостей, чтобы запустить useEffect только при монтировании

//   if (!camper) {
//     return null; // Если кемпер не найден, вернуть null
//   }

//   const features = [
//     { key: "adults", label: "Adults" },
//     { key: "transmission", label: "Transmission" },
//     { key: "airConditioner", label: "Air Conditioner", format: (value) => (value >= 1 ? "AC" : "") },
//     { key: "engine", label: "Engine" },
//     { key: "kitchen", label: "Kitchen" },
//     { key: "beds", label: "Beds" },
//     { key: "CD", label: "CD", format: (value) => (value >= 1 ? "CD" : "") },
//     { key: "radio", label: "Radio", format: (value) => (value >= 1 ? "Radio" : "") },
//     { key: "hob", label: "Hob" },
//   ];

//   return (
//     <div className={styles.wrap}>
//       <div className={styles.features} ref={ref}>
//         <ul className={styles.featuresList}>
//           {features.map((feature) => (
//             <li key={feature.key} className={styles.featureItem}>
//               <span className={styles.featureLabel}>{feature.label}</span>
//               <span className={styles.featureValue}>{feature.format ? feature.format(camper.details[feature.key]) : camper.details[feature.key]}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="vehicleDetails">
//           <h3 className="detailsTitle">Vehicle Details</h3>
//           <ul className="detailsList">
//             <li>
//               <span>Form:</span> <span>{camper.form}</span>
//             </li>
//             <li>
//               <span>Length:</span> <span>{camper.length}</span>
//             </li>
//             <li>
//               <span>Width:</span> <span>{camper.width}</span>
//             </li>
//             <li>
//               <span>Height:</span> <span>{camper.height}</span>
//             </li>
//             <li>
//               <span>Tank:</span> <span>{camper.tank}</span>
//             </li>
//             <li>
//               <span>Consumption:</span> <span>{camper.consumption}</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <FormField />
//     </div>
//   );
// });

// export default Features;

import React, { forwardRef, useEffect } from "react";
import campersData from "../../data/campers.json";
import FormField from "../FormField/FormField";
import styles from "./features.module.css";
import Icon from "../Icon/Icon";

const Features = forwardRef((props, ref) => {
  const { camperId } = props;
  const camper = campersData.find((item) => item._id === camperId);

  useEffect(() => {
    // Логіка, якщо необхідно
  }, []); // Пустий масив залежностей, щоб запустити useEffect лише під час монтажу

  if (!camper) {
    return null; // Якщо кемпер не знайдено, повернути null
  }

  const features = [
    { key: "adults", label: "Adults", icon: "icon-people" },
    { key: "transmission", label: "Transmission", icon: "icon-transmission" },
    { key: "airConditioner", label: "Air Conditioner", icon: "icon-windy", format: (value) => (value >= 1 ? "AC" : "") },
    { key: "engine", label: "Engine", icon: "icon-gas_station" },
    { key: "kitchen", label: "Kitchen", icon: "icon-food" },
    { key: "beds", label: "Beds", icon: "icon-bed" },
    { key: "CD", label: "CD", icon: "icon-cd", format: (value) => (value >= 1 ? "CD" : "") },
    { key: "radio", label: "Radio", icon: "icon-radio", format: (value) => (value >= 1 ? "Radio" : "") },
    { key: "hob", label: "Hob", icon: "icon-hob" },
  ];

  return (
    <div className={styles.features} ref={ref}>
      <ul className={styles.featuresList}>
        {features.map((feature) => (
          <li key={feature.key} className={styles.featureItem}>
            <Icon name={feature.icon} className={styles.featureIcon} />
            <div className={styles.featureText}>
              <span className={styles.featureLabel}>{feature.label}</span>
              <span className={styles.featureValue}>{feature.format ? feature.format(camper.details[feature.key]) : camper.details[feature.key]}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.vehicleDetails}>
        <h3 className={styles.detailsTitle}>Vehicle Details</h3>
        <ul className={styles.detailsList}>
          <li>
            <span>Form:</span> <span>{camper.form}</span>
          </li>
          <li>
            <span>Length:</span> <span>{camper.length}</span>
          </li>
          <li>
            <span>Width:</span> <span>{camper.width}</span>
          </li>
          <li>
            <span>Height:</span> <span>{camper.height}</span>
          </li>
          <li>
            <span>Tank:</span> <span>{camper.tank}</span>
          </li>
          <li>
            <span>Consumption:</span> <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>
      <FormField />
    </div>
  );
});

export default Features;
