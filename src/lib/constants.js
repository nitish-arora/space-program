export const FILTERS = [
  {
    label: "Launch Year",
    options: new Array(new Date().getFullYear() - 2005)
      .fill()
      .map((elem, index) => (2006 + index).toString()),
    name: "launch_year"
  },
  {
    label: "Successful Launch",
    options: ["true", "false"],
    name: "launch_success"
  },
  {
    label: "Successful Landing",
    options: ["true", "false"],
    name: "land_success"
  }
];
