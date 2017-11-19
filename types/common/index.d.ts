type Hotel = {
  id: number,
  name: string,
  img: string,
  address:string,
  phone:  string,
  weather: Weather,
  social: Social,   
  type: string
};

type Weather = {
  icon: string,
  water: number,
  temperature: number
};


type Social = {
  img: string,
  followers: number,
  following: number

};
