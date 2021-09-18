---
sidebar_position: 2
---

# Folder structure 

In this section, we will cover only the directory structure of the front-end section in react js. And we will give a brief explanation of some of the most important folders.

## Frontend directory
```
frontend
├── node_modules
├── public
├── src
├── package.json
└── package-lock.json

```
## SRC directory
The following directory tree should be complied for new implementations.
```jsx title="frontend/"
src
├── api
├── assets
├── components
├── hooks
├── screens
├── theme
├── utils
├── App.js
├── index.js
└── index.css

```
**Assets:** This folder contains all the media assets, such as images, videos, json files, etc...

**Hooks:** This folder contains reusable utility hooks.

**Screens:** This folder contains the group of screens of our application that are used in the route definition.

**Theme:** This folder is contains the files responsible for generating the global styles of the application, such as colors, fonts, dimensions of the margins...

**Utils:** This folder contains utility functions and constants that are used in different parts of the application.

**Assets:** This folder contains all the media assets, such as images, videos, json files, etc...
```
src
├── assets
│   ├── css
│   ├── fonst
│   └── images

```
**Components:** This folder consists of individual components, which are atomic in nature and doesn't compose any other components. 
```
src
├── components
│   ├── composed
│   │   ├── Card
│   │   ├── Map
│   │   ├── Galery
│   │   ├── Charts
│   │   └── ...
│   │ 
│   ├── layout
│   │   ├── Body
│   │   ├── Footer
│   │   └── Header
│   └── units
│       ├── Button
│       ├── InputNumber
│       ├── PrivacyPolicy
│       └── ...

```

## Project structure 
```
├─ frontend
│  ├─ .dockerignore
│  ├─ .env.development
│  ├─ .env.production
│  ├─ .eslintrc
│  ├─ .gitignore
│  ├─ .prettierignore
│  ├─ .prettierrc
│  ├─ craco.config.js
│  ├─ Dockerfile.dev
│  ├─ jsconfig.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ src
│  │  ├─ api
│  │  │  ├─ ads.js
│  │  │  ├─ data
│  │  │  │  └─ db.json
│  │  │  └─ user.js
│  │  ├─ App.js
│  │  ├─ assets
│  │  │  ├─ css
│  │  │  │  └─ normalize.css
│  │  │  ├─ data.json
│  │  │  ├─ fonts
│  │  │  │  ├─ HelveticaNeue
│  │  │  │  │  └─ Pragmatica-ExtraLight.ttf
│  │  │  │  ├─ Inter
│  │  │  │  │  ├─ Inter-Bold.ttf
│  │  │  │  │  ├─ Inter-Regular.ttf
│  │  │  │  │  └─ Inter-SemiBold.ttf
│  │  │  │  └─ Korb
│  │  │  │     └─ KorbBold.otf
│  │  │  ├─ images
│  │  │  │  ├─ bedroom-t-sm.jpg
│  │  │  │  ├─ bedroom-t.jpg
│  │  │  │  ├─ bedroom.jpg
│  │  │  │  ├─ bedroom2-t-sm.jpg
│  │  │  │  ├─ bedroom2-t.jpg
│  │  │  │  ├─ bedroom2.jpg
│  │  │  │  ├─ bedroomSqred-sm.jpg
│  │  │  │  ├─ bedroomSqred.jpg
│  │  │  │  ├─ casaPiscina-t.jpg
│  │  │  │  ├─ casaPiscina.jpg
│  │  │  │  ├─ casaPiscinaAd.jpg
│  │  │  │  ├─ index.js
│  │  │  │  ├─ map-icons
│  │  │  │  │  ├─ apartment.png
│  │  │  │  │  ├─ bed_breakfast.png
│  │  │  │  │  ├─ condominium.png
│  │  │  │  │  ├─ hostel_0star.png
│  │  │  │  │  ├─ hotel_0star.png
│  │  │  │  │  ├─ house.png
│  │  │  │  │  ├─ lodging.png
│  │  │  │  │  ├─ motel.png
│  │  │  │  │  ├─ office-building.png
│  │  │  │  │  ├─ reception.png
│  │  │  │  │  ├─ resort.png
│  │  │  │  │  ├─ townhouse.png
│  │  │  │  │  ├─ villa.png
│  │  │  │  │  └─ youthhostel.png
│  │  │  │  ├─ people13b.jpg
│  │  │  │  ├─ people1b.jpg
│  │  │  │  ├─ people4b.jpg
│  │  │  │  ├─ pisoCocinaAbierta-sm.jpg
│  │  │  │  ├─ pisoCocinaAbierta.jpg
│  │  │  │  ├─ pisoConDespacho-sm.jpg
│  │  │  │  ├─ pisoConDespacho.jpg
│  │  │  │  ├─ pisoConHamaca-sm.jpg
│  │  │  │  ├─ pisoConHamaca.jpg
│  │  │  │  ├─ pisoModerno-sm.jpg
│  │  │  │  ├─ pisoModerno.jpg
│  │  │  │  ├─ pisoVerde-sm.jpg
│  │  │  │  ├─ pisoVerde.jpg
│  │  │  │  └─ select-arrow.svg
│  │  │  └─ usuarios.json
│  │  ├─ components
│  │  │  ├─ composed
│  │  │  │  ├─ Card
│  │  │  │  │  ├─ Card.js
│  │  │  │  │  └─ Card.style.js
│  │  │  │  ├─ Charts
│  │  │  │  │  ├─ BarChart
│  │  │  │  │  │  ├─ BarChart.js
│  │  │  │  │  │  ├─ BarGraphic.js
│  │  │  │  │  │  ├─ BarGraphic.styles.js
│  │  │  │  │  │  └─ defaultOptions.js
│  │  │  │  │  ├─ ChartFormatter.js
│  │  │  │  │  ├─ LineChart
│  │  │  │  │  │  ├─ defaultOptions.js
│  │  │  │  │  │  ├─ LineChart.js
│  │  │  │  │  │  ├─ LineChart.styles.js
│  │  │  │  │  │  └─ LineGraphic.js
│  │  │  │  │  └─ PieChart
│  │  │  │  │     ├─ defaultOptions.js
│  │  │  │  │     ├─ PieChart.js
│  │  │  │  │     ├─ PieChart.styles.js
│  │  │  │  │     └─ PieGraphic.js
│  │  │  │  ├─ ContactModal
│  │  │  │  │  ├─ ContactModal.js
│  │  │  │  │  └─ ContactModal.style.js
│  │  │  │  ├─ DeleteModal
│  │  │  │  │  ├─ DeleteModal.js
│  │  │  │  │  └─ DeleteModal.style.js
│  │  │  │  ├─ EditProfileModal
│  │  │  │  │  ├─ EditProfile.js
│  │  │  │  │  └─ EditProfile.style.js
│  │  │  │  ├─ FilterList
│  │  │  │  │  ├─ FilterList.js
│  │  │  │  │  └─ FilterList.styles.js
│  │  │  │  ├─ Gallery
│  │  │  │  │  ├─ Gallery.js
│  │  │  │  │  └─ Gallery.styles.js
│  │  │  │  ├─ GlobalFilters
│  │  │  │  │  ├─ defaultOptions.js
│  │  │  │  │  ├─ GlobalFilters.js
│  │  │  │  │  └─ GlobalFilters.styles.js
│  │  │  │  ├─ Map
│  │  │  │  │  ├─ CustomMap.css
│  │  │  │  │  ├─ CustomMap.js
│  │  │  │  │  ├─ CustomMapAd.css
│  │  │  │  │  ├─ CustomMapAd.js
│  │  │  │  │  ├─ CustomMapIcons.js
│  │  │  │  │  ├─ Filter.styles.js
│  │  │  │  │  ├─ Icons.js
│  │  │  │  │  ├─ IconSelector
│  │  │  │  │  │  ├─ CustomIcon
│  │  │  │  │  │  │  └─ CustomIcon.js
│  │  │  │  │  │  ├─ IconSelector.js
│  │  │  │  │  │  └─ IconsSelector.styles.js
│  │  │  │  │  ├─ Map.css
│  │  │  │  │  ├─ Map.js
│  │  │  │  │  ├─ MapaFiltro.js
│  │  │  │  │  ├─ MapIcon.js
│  │  │  │  │  ├─ MapMarkers.js
│  │  │  │  │  ├─ MapPopup.css
│  │  │  │  │  ├─ MapPopup.js
│  │  │  │  │  ├─ MapPopUp.Style.js
│  │  │  │  │  ├─ MapView.css
│  │  │  │  │  └─ MapView.js
│  │  │  │  ├─ Modal
│  │  │  │  │  ├─ Modal.js
│  │  │  │  │  └─ Modal.styles.js
│  │  │  │  ├─ ModalGraphic
│  │  │  │  │  ├─ ModalGraphic.js
│  │  │  │  │  └─ ModalGraphic.styles.js
│  │  │  │  ├─ ProtectedRoute
│  │  │  │  │  └─ index.js
│  │  │  │  └─ UserModal
│  │  │  │     ├─ UserModal.js
│  │  │  │     └─ UserModal.style.js
│  │  │  ├─ layout
│  │  │  │  ├─ Body
│  │  │  │  │  ├─ Body.js
│  │  │  │  │  └─ Body.styles.js
│  │  │  │  ├─ Footer
│  │  │  │  │  ├─ Footer.js
│  │  │  │  │  └─ Footer.styles.js
│  │  │  │  └─ Header
│  │  │  │     ├─ Header.js
│  │  │  │     └─ Header.styles.js
│  │  │  └─ units
│  │  │     ├─ Button
│  │  │     │  ├─ Button.js
│  │  │     │  └─ Button.styles.js
│  │  │     ├─ IconWithLabel
│  │  │     │  ├─ IconWithLabel.js
│  │  │     │  └─ IconWithLabel.styles.js
│  │  │     ├─ Input
│  │  │     │  ├─ Input.js
│  │  │     │  └─ Input.styles.js
│  │  │     ├─ InputNumber
│  │  │     │  ├─ InputNumber.js
│  │  │     │  └─ InputNumber.styles.js
│  │  │     ├─ PrivacyPolicy
│  │  │     │  ├─ PrivacyPolicy.js
│  │  │     │  └─ PrivacyPolicy.styles.js
│  │  │     ├─ SimplifiedButton
│  │  │     │  ├─ SimplifiedButton.js
│  │  │     │  └─ SimplifiedButton.styles.js
│  │  │     └─ TextArea
│  │  │        ├─ TextArea.js
│  │  │        └─ TextArea.styles.js
│  │  ├─ hooks
│  │  │  ├─ useInput.js
│  │  │  └─ useOptionSelectMonth.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ screens
│  │  │  ├─ Ad
│  │  │  │  ├─ Ad.js
│  │  │  │  └─ Ad.styles.js
│  │  │  ├─ AdList
│  │  │  │  ├─ AdCard
│  │  │  │  │  ├─ AdCard.js
│  │  │  │  │  └─ AdCard.style.js
│  │  │  │  ├─ AdList.js
│  │  │  │  ├─ AdList.style.js
│  │  │  │  └─ AdListFilter
│  │  │  │     ├─ AdListFilter.js
│  │  │  │     └─ AdListFilter.style.js
│  │  │  ├─ CreateNewAd
│  │  │  │  ├─ CreateNewAd.js
│  │  │  │  └─ CreateNewAd.styles.js
│  │  │  ├─ Dashboard
│  │  │  │  ├─ Dashboard.js
│  │  │  │  └─ Dashboard.style.js
│  │  │  ├─ EditAd
│  │  │  │  ├─ EditAd.js
│  │  │  │  └─ EditAd.styles.js
│  │  │  ├─ Home
│  │  │  │  └─ Home.js
│  │  │  ├─ ListaUsuariosAdmins
│  │  │  │  ├─ ListaUsuariosAdmins.js
│  │  │  │  └─ ListaUsuariosAdmins.style.js
│  │  │  ├─ MyBills
│  │  │  │  ├─ Bill.js
│  │  │  │  ├─ Bill.styles.js
│  │  │  │  ├─ billsData.json
│  │  │  │  ├─ DocumentComponent.js
│  │  │  │  ├─ modelBillData.json
│  │  │  │  ├─ MyBills.js
│  │  │  │  └─ MyBills.styles.js
│  │  │  ├─ Sales
│  │  │  │  ├─ CardWrapper.js
│  │  │  │  ├─ SalesByMonth.js
│  │  │  │  ├─ SalesByType.js
│  │  │  │  ├─ SalesLineChart.js
│  │  │  │  └─ SalesLineChart.styles.js
│  │  │  ├─ UserAds
│  │  │  │  ├─ AdCard
│  │  │  │  │  ├─ AdCard.js
│  │  │  │  │  └─ AdCard.style.js
│  │  │  │  ├─ EditAdModal
│  │  │  │  │  ├─ EditAdModal.js
│  │  │  │  │  └─ EditAdModal.style.js
│  │  │  │  ├─ UserAds.js
│  │  │  │  └─ UserAds.style.js
│  │  │  └─ UserFlow
│  │  │     ├─ Login
│  │  │     │  ├─ Login.js
│  │  │     │  └─ Login.styles.js
│  │  │     ├─ Profile
│  │  │     │  ├─ Profile.js
│  │  │     │  └─ Profile.styles.js
│  │  │     ├─ RecoverPassword
│  │  │     │  ├─ RecoverPassword.js
│  │  │     │  └─ RecoverPassword.styles.js
│  │  │     └─ Registration
│  │  │        ├─ Registration.js
│  │  │        └─ Registration.styles.js
│  │  ├─ setupTests.js
│  │  ├─ theme
│  │  │  ├─ Colors.js
│  │  │  └─ GlobalStyles.js
│  │  └─ utils
│  │     ├─ constant.js
│  │     ├─ generalFilter.js
│  │     ├─ generateData.js
│  │     └─ index.js
│  └─ tailwind.config.js
```

