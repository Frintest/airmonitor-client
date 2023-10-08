import s from "./Header.module.scss";

const Header = () => {
   return (
      <header className={s.header}>
         <div className={"container " + s.container}>
            <div className={s.menu}>
               <div className={s.menuLine + " " + s.menuLineTop}></div>
               <div className={s.menuLine + " " + s.menuLineCenter}></div>
               <div className={s.menuLine + " " + s.menuLineBottom}></div>
            </div>
            <div className={s.logo}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="40"
                  viewBox="0 0 66 40"
                  fill="none"
               >
                  <circle cx="11" cy="26" r="10.5" stroke="#001437" />
                  <circle cx="20" cy="8" r="5.5" stroke="#001437" />
                  <path
                     d="M43.8411 18.048C43.5371 18.048 43.2251 18.04 42.9051 18.024C42.5851 18.008 42.2571 17.992 41.9211 17.976C41.9211 17.24 41.8971 16.52 41.8491 15.816C41.8171 15.112 41.7451 14.44 41.6331 13.8C41.5371 13.16 41.3771 12.576 41.1531 12.048C40.9451 11.504 40.6731 11.04 40.3371 10.656C40.1611 10.448 39.9531 10.288 39.7131 10.176C39.4891 10.048 39.2651 9.976 39.0411 9.96V9.552L42.2331 1.368C42.5531 1.288 42.8651 1.24 43.1691 1.224C43.4731 1.192 43.7371 1.176 43.9611 1.176C44.9051 1.176 45.2891 1.4 45.1131 1.848L42.3771 8.376C43.2571 9.192 43.9051 10.384 44.3211 11.952C44.7531 13.52 44.9691 15.368 44.9691 17.496C44.9691 17.704 44.8971 17.848 44.7531 17.928C44.6251 18.008 44.3211 18.048 43.8411 18.048ZM36.8811 18V1.68C36.8811 1.52 36.9211 1.408 37.0011 1.344C37.0811 1.28 37.3051 1.24 37.6731 1.224C38.0571 1.208 38.7051 1.2 39.6171 1.2V17.52C39.6171 17.68 39.5771 17.792 39.4971 17.856C39.4331 17.92 39.2091 17.96 38.8251 17.976C38.4411 17.992 37.7931 18 36.8811 18ZM51.6098 18.24C50.6658 18.24 49.9058 18.112 49.3298 17.856C48.7698 17.6 48.3378 17.256 48.0338 16.824C47.7458 16.376 47.5538 15.864 47.4578 15.288C47.3618 14.696 47.3138 14.064 47.3138 13.392V1.704C47.3138 1.528 47.3538 1.408 47.4338 1.344C47.5138 1.28 47.7458 1.24 48.1298 1.224C48.5138 1.208 49.1698 1.2 50.0978 1.2V13.488C50.0978 13.872 50.1138 14.208 50.1458 14.496C50.1938 14.784 50.2738 15.024 50.3858 15.216C50.4978 15.408 50.6498 15.552 50.8418 15.648C51.0498 15.728 51.3058 15.768 51.6098 15.768C51.8818 15.768 52.1378 15.744 52.3778 15.696C52.6338 15.632 52.8418 15.56 53.0018 15.48V1.704C53.0018 1.528 53.0418 1.408 53.1218 1.344C53.2018 1.28 53.4258 1.24 53.7938 1.224C54.1778 1.208 54.8258 1.2 55.7378 1.2V17.328C55.4498 17.52 54.9458 17.72 54.2258 17.928C53.5058 18.136 52.6338 18.24 51.6098 18.24ZM61.0689 18.24C59.9969 18.24 59.2049 18.08 58.6929 17.76C58.1809 17.424 57.9249 17.048 57.9249 16.632C57.9249 16.36 57.9729 16.048 58.0689 15.696C58.1649 15.328 58.3169 14.992 58.5249 14.688C58.7809 14.912 59.1089 15.104 59.5089 15.264C59.9089 15.408 60.3249 15.48 60.7569 15.48C61.4129 15.48 61.8689 15.312 62.1249 14.976C62.3809 14.64 62.5089 14.192 62.5089 13.632C62.5089 13.216 62.4289 12.824 62.2689 12.456C62.1249 12.088 61.8449 11.632 61.4289 11.088L59.2449 8.16C58.7009 7.424 58.3409 6.784 58.1649 6.24C57.9889 5.696 57.9009 5.16 57.9009 4.632C57.9009 3.544 58.2609 2.664 58.9809 1.992C59.7009 1.304 60.7649 0.959999 62.1729 0.959999C63.3889 0.959999 64.2369 1.08 64.7169 1.32C65.1969 1.56 65.4369 1.888 65.4369 2.304C65.4369 2.528 65.3889 2.776 65.2929 3.048C65.1969 3.304 65.0369 3.56 64.8129 3.816C64.6849 3.72 64.4209 3.616 64.0209 3.504C63.6209 3.392 63.1889 3.336 62.7249 3.336C62.1329 3.336 61.6689 3.44 61.3329 3.648C60.9969 3.84 60.8289 4.144 60.8289 4.56C60.8289 4.928 60.8929 5.272 61.0209 5.592C61.1649 5.896 61.3889 6.264 61.6929 6.696L63.9969 9.648C64.5729 10.384 64.9569 11.048 65.1489 11.64C65.3409 12.232 65.4369 12.872 65.4369 13.56C65.4369 14.36 65.3089 15.12 65.0529 15.84C64.8129 16.544 64.3809 17.12 63.7569 17.568C63.1329 18.016 62.2369 18.24 61.0689 18.24ZM43.8411 37.048C43.5371 37.048 43.2251 37.04 42.9051 37.024C42.5851 37.008 42.2571 36.992 41.9211 36.976C41.9211 36.24 41.8971 35.52 41.8491 34.816C41.8171 34.112 41.7451 33.44 41.6331 32.8C41.5371 32.16 41.3771 31.576 41.1531 31.048C40.9451 30.504 40.6731 30.04 40.3371 29.656C40.1611 29.448 39.9531 29.288 39.7131 29.176C39.4891 29.048 39.2651 28.976 39.0411 28.96V28.552L42.2331 20.368C42.5531 20.288 42.8651 20.24 43.1691 20.224C43.4731 20.192 43.7371 20.176 43.9611 20.176C44.9051 20.176 45.2891 20.4 45.1131 20.848L42.3771 27.376C43.2571 28.192 43.9051 29.384 44.3211 30.952C44.7531 32.52 44.9691 34.368 44.9691 36.496C44.9691 36.704 44.8971 36.848 44.7531 36.928C44.6251 37.008 44.3211 37.048 43.8411 37.048ZM36.8811 37V20.68C36.8811 20.52 36.9211 20.408 37.0011 20.344C37.0811 20.28 37.3051 20.24 37.6731 20.224C38.0571 20.208 38.7051 20.2 39.6171 20.2V36.52C39.6171 36.68 39.5771 36.792 39.4971 36.856C39.4331 36.92 39.2091 36.96 38.8251 36.976C38.4411 36.992 37.7931 37 36.8811 37ZM51.6098 37.24C50.6658 37.24 49.9058 37.112 49.3298 36.856C48.7698 36.6 48.3378 36.256 48.0338 35.824C47.7458 35.376 47.5538 34.864 47.4578 34.288C47.3618 33.696 47.3138 33.064 47.3138 32.392V20.704C47.3138 20.528 47.3538 20.408 47.4338 20.344C47.5138 20.28 47.7458 20.24 48.1298 20.224C48.5138 20.208 49.1698 20.2 50.0978 20.2V32.488C50.0978 32.872 50.1138 33.208 50.1458 33.496C50.1938 33.784 50.2738 34.024 50.3858 34.216C50.4978 34.408 50.6498 34.552 50.8418 34.648C51.0498 34.728 51.3058 34.768 51.6098 34.768C51.8818 34.768 52.1378 34.744 52.3778 34.696C52.6338 34.632 52.8418 34.56 53.0018 34.48V20.704C53.0018 20.528 53.0418 20.408 53.1218 20.344C53.2018 20.28 53.4258 20.24 53.7938 20.224C54.1778 20.208 54.8258 20.2 55.7378 20.2V36.328C55.4498 36.52 54.9458 36.72 54.2258 36.928C53.5058 37.136 52.6338 37.24 51.6098 37.24ZM61.0689 37.24C59.9969 37.24 59.2049 37.08 58.6929 36.76C58.1809 36.424 57.9249 36.048 57.9249 35.632C57.9249 35.36 57.9729 35.048 58.0689 34.696C58.1649 34.328 58.3169 33.992 58.5249 33.688C58.7809 33.912 59.1089 34.104 59.5089 34.264C59.9089 34.408 60.3249 34.48 60.7569 34.48C61.4129 34.48 61.8689 34.312 62.1249 33.976C62.3809 33.64 62.5089 33.192 62.5089 32.632C62.5089 32.216 62.4289 31.824 62.2689 31.456C62.1249 31.088 61.8449 30.632 61.4289 30.088L59.2449 27.16C58.7009 26.424 58.3409 25.784 58.1649 25.24C57.9889 24.696 57.9009 24.16 57.9009 23.632C57.9009 22.544 58.2609 21.664 58.9809 20.992C59.7009 20.304 60.7649 19.96 62.1729 19.96C63.3889 19.96 64.2369 20.08 64.7169 20.32C65.1969 20.56 65.4369 20.888 65.4369 21.304C65.4369 21.528 65.3889 21.776 65.2929 22.048C65.1969 22.304 65.0369 22.56 64.8129 22.816C64.6849 22.72 64.4209 22.616 64.0209 22.504C63.6209 22.392 63.1889 22.336 62.7249 22.336C62.1329 22.336 61.6689 22.44 61.3329 22.648C60.9969 22.84 60.8289 23.144 60.8289 23.56C60.8289 23.928 60.8929 24.272 61.0209 24.592C61.1649 24.896 61.3889 25.264 61.6929 25.696L63.9969 28.648C64.5729 29.384 64.9569 30.048 65.1489 30.64C65.3409 31.232 65.4369 31.872 65.4369 32.56C65.4369 33.36 65.3089 34.12 65.0529 34.84C64.8129 35.544 64.3809 36.12 63.7569 36.568C63.1329 37.016 62.2369 37.24 61.0689 37.24Z"
                     fill="#001437"
                  />
               </svg>
            </div>
            <span></span>
         </div>
      </header>
   );
};

export default Header;
