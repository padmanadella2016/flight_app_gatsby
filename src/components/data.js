const FLIGHT_DATA = [
    {
      id: "IA-11",
      airline: "Jetstar",
      from: "MEL",
      to: "SYD",
      date: "2020-01-16",
      depart: "18:00",
      arrive: "6:00",
      fair: 180,
      stops: "1"
    },
    {
      id: "IA-12",
      airline: "Virgin",
      from: "PER",
      to: "MEL",
      date: "2020-02-16",
      depart: "18:00",
      arrive: "6:00",
      fair: 200,
      stops: "3"
    },
    {
      id: "JE-11",
      airline: "JetStar",
      from: "SYD",
      to: "BRI",
      date: "2020-10-06",
      depart: "18:00",
      arrive: "6:00",
      fair: 300,
      stops: "2"
    },
    {
      id: "JE-12",
      airline: "JetStar",
      from: "BRI",
      to: "MEL",
      date: "2020-1-20",
      depart: "18:00",
      arrive: "6:00",
      fair: 100,
      stops: "2"
    }
  ];
  
  const CITIES = {
    BRI: "Brisbane",
    MEL: "Melbourne",
    SYD: "Sydney",
    ADL: "Adelaide ",
    PER: "Perth ",
    CAN: "Canberra "
  };
  
  export { FLIGHT_DATA, CITIES };
  