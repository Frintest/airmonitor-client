# airmonitor

Мониторинг качества воздуха в реальном времени. Проект включает в себя устройство, отслеживающее данные о параметрах водуха, и веб-приложение, визуализирующее данные.

## Глоссарий

1. Веб-приложение - приложение, которое разработано для интернет браузеров. Отличается от сайта наличием большого количества динамической логики.
2. SPA (Single Page Application) - тип веб-приложения, в котором существует только один .html файл, подключающий JavaScript приложение. Все страницы, которые бы могли присутствовать на сайте, в веб-приложении реализованы на JavaScript.
3. VDS (Virtual Dedicated Server) - услуга виртуального хостинга, при которой клиенту выделяется виртуальный сервер целиком с полными административными правами, которые дают возможность установить на сервер любое программное обеспечение.
4. DAL (Data access layer) - слой приложения, обеспечивающий доступ к данным, хранящихся, например, в базе данных.
5. BLL (Business Logic Layer) слой приложения, инкапсулирующий всю бизнес-логику.
6. UI (User interface) - слой приложения, реализующий пользовательский интерфейс.
7. REST API (Representational State Transfer) - это архитектурный подход, который устанавливает ограничения для API: как они должны быть устроены и какие функции поддерживать. Отличительной особенностью REST API является то, что они позволяют наилучшим образом использовать протокол HTTP.
8. WebSocket — протокол связи поверх TCP-соединения, предназначенный для обмена сообщениями между браузером и веб-сервером, используя постоянное соединение.

## Веб-приложение

Ссылка на веб-приложение, размещённое на хостинге GitHub Pages: [https://frintest.github.io/airmonitor-client/](https://frintest.github.io/airmonitor-client/).<br>
Ссылка на веб-приложение, размещённое на vds. [https://airmonitor.servermc.ru/](https://airmonitor.servermc.ru/)

Ссылка на github frontend части приложения: https://github.com/Frintest/airmonitor-client.<br>
Ссылка на github backend части приложения: https://github.com/Frintest/airmonitor-server.

### Frontend

Frontend часть написана на библиотеке на экосистеме react. Архитектурно приложение разделено на 3 слоя:

1. DAL (Data access layer) - Реализован библиотекой socket.io-client.
1. BLL (Business Logic Layer) - Реализован библиотекой redux.
1. UI (User interface) - Реализован библиотекой react.

Клиентская часть приложения является SPA, поэтому данные на сайте изменяются без перезагрузки страницы.

Подготовка проекта к развёртыванию на сервере осуществляется библиотекой webpack. Происходит сборка модулей, в единые файлы (Все .js файлы будут собраны в один .js файл, и т.д.), с их последующей мининизацией.

### Backend

Серверная часть приложения написана на ванильном nodejs. Для работы с базой данных MySQL я использую библиотеку mysql2. Сборка backend части приложения не осуществляется.

### База данных

В качестве базы данных я использую MySQL.

### API

Приложение отображает данные в реальном времени. По этой причине я отказался от использования классического способа описания API приложения - REST API, и использовал Websocket API, предоставляемой библиотекой socket.io.

### Деплой

Развёртывание frontend и backend части приложения на сервере осуществляется сервисом GitHub Actions. Он исполняет .yml конфиг, в котором прописаны правила сборки проекта и его дальнейшего деплоя.

Backend часть попадает на vds и точка входа приложения автоматически перезапускается. Для автономной работы приложения я использую инструмент pm2.

Развёртывание frontend части происходит на том же vds сервере что и backend часть, а также на бесплатном хостинге GitHub Pages.
