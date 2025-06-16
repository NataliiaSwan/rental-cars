export const iconMapping = {
  Automatic: 'automatic',
  Manual: 'transmission',
  Diesel: 'engine',
  Petrol: 'engine',
  AC: 'AC',
  Kitchen: 'kitchen',
  TV: 'TV',
  Bathroom: 'bathroom',
  Radio: 'radio',
  Van: 'van',
  FullyIntegrated: 'fully-integrated',
  Alcove: 'alcove',
};

// Об'єкт з ключами для фільтрації пошуку
export const searchObjectName = {
  location: 'location',
  transmission: ['Automatic', 'Manual'],
  engine: ['Diesel', 'Petrol'],
  bathroom: 'bathroom',
  kitchen: 'kitchen',
  TV: 'TV',
  AC: 'AC',
  radio: 'radio',
  van: 'Van',
  fullyIntegrated: 'Fully Integrated',
  alcove: 'Alcove',
  panelTruck: 'Panel Truck',
};

// Опції для фільтрів обладнання
export const equipmentOptions = [
  { main: 'AC', defaultText: 'AC' },
  {
    main: 'Automatic',
    defaultText: 'Automatic',
    options: ['Automatic', 'Manual'],
  },
  { main: 'Kitchen', defaultText: 'Kitchen' },
  { main: 'TV', defaultText: 'TV' },
  { main: 'Bathroom', defaultText: 'Bathroom' },
  { main: 'Radio', defaultText: 'Radio' },
  // {
  //   main: 'Engine',
  //   defaultText: 'Diesel',
  //   options: ['Diesel', 'Petrol'],
  // },
];

// Опції для типу транспортного засобу
export const vehicleTypeOptions = ['Van', 'Fully-Integrated', 'Alcove'];
