export interface Strategy {
  user: string;
  userImg: string;
  content: string;
  rating: number;
  mostValuedWeapons: Weapon[]; // get these from bungie api in backend. v
  mostValuedAbilities: Ability[];
}

export interface Weapon {
  name: string;
  apiPath: string;
  imgUrl: string;
}

export interface Ability {
  name: string;
  apiPath: string;
  imgUrl: string;
}
