import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

const CurrentUserContext = React.createContext({
  
})

export { CurrentTemperatureUnitContext, CurrentUserContext };
