import React from "react";
import Overview from "./main/overview/overview.js";
import CustomerReview from "./main/customerReview/customerReview.js";
import ForecastAccuracy from './main/ForecastAccuracy/forecastAccuracy'
import POSForcast from './main/POSForecast/posForecast'

export const routes = [
  {
    label: "Overview",
    path: "overview",
    main: () => <Overview />,
  },
  {
    path: 'revenue',
    main: () => <h2>Revenue</h2>
  },
  {
    path: 'itemPerformance',
    main: () => <h2>Item Performance</h2>
  },
  {
    path: 'bostonMatrix',
    main: () => <h2>Boston Matrix</h2>
  },
  {
    label: 'Forcast Accuracy',
    path: 'forcastAccuracy',
    main: () => <ForecastAccuracy/>
  },
  {
    label: 'POS Forcast',
    path: 'POSForeCast',
    main: () => <POSForcast/>
  },
  {
    path: "inventory",
    main: () => <h2>Inventory</h2>,
  },
  {
    path: "employees",
    main: () => <h2>Employees</h2>,
  },
  {
    label: "customerReview",
    path: "customerReview",
    main: () => <CustomerReview />,
  },
];
