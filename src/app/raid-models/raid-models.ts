interface Raid {
  id: string;
  name: string;
  encounters: Encounter[];
}

interface Encounter {
  encounterNum: number;
  encounterName: string;
}
