export interface Raid_Dungeon {
  id: number;
  name: string;
  path: string;
  expansion: string;
  imgUrl: string;
  encounters: Encounter[];
  searchEncounters?: Encounter[];
  isExpanded?: boolean;
}

export interface Encounter {
  encounterName: string;
  imgUrl: string;
  path: string;
}

export const raids: Raid_Dungeon[] = [
  {
    id: 0,
    name: "Last Wish",
    expansion: "Forsaken",
    path: "last_wish",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Kalli, the Corrupted",
        imgUrl: "",
        path: "kalli"
      },
      {
        encounterName: "Shuro Chi, the Corrupted",
        imgUrl: "",
        path: "shuro_chi"
      },
      {
        encounterName: "Morgeth, The Spirekeeper",
        imgUrl: "",
        path: "morgeth"
      },
      {
        encounterName: "The Vault",
        imgUrl: "",
        path: "vault"
      },
      {
        encounterName: "Riven of a Thousand Voices",
        imgUrl: "",
        path: "riven"
      },
      {
        encounterName: "Queenswalk",
        imgUrl: "",
        path: "queenswalk"
      }
    ]
  },
  {
    id: 1,
    name: "Garden of Salvation",
    expansion: "Shadowkeep",
    imgUrl: "",
    path: "garden_of_salvation",
    encounters: [
      {
        encounterName: "Evade The Consecrated Mind",
        imgUrl: "",
        path: "evade_consecrated_mind"
      },
      {
        encounterName: "Summon The Consecrated Mind",
        imgUrl: "",
        path: "summon_consecrated_mind"
      },
      {
        encounterName: "Defeat The Consecrated Mind",
        imgUrl: "",
        path: "defeat_consecrated_mind"
      },
      {
        encounterName: "Sanctified Mind",
        imgUrl: "",
        path: "sanctified_mind"
      }
    ]
  },
  {
    id: 2,
    name: "Deep Stone Crypt",
    expansion: "Beyond Light",
    path: "deep_stone_crypt",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Surviving the Blizzard",
        imgUrl: "",
        path: "blizzard"
      },
      {
        encounterName: "Crypt Security",
        imgUrl: "",
        path: "crypt_security"
      },
      {
        encounterName: "Atraks-1, Fallen Exo",
        imgUrl: "",
        path: "atraks"
      },
      {
        encounterName: "Orbital Space Walk",
        imgUrl: "",
        path: "space_walk"
      },
      {
        encounterName: "Descent",
        imgUrl: "",
        path: "descent"
      },
      {
        encounterName: "Taniks, The Abomination",
        imgUrl: "",
        path: "taniks"
      }
    ]
  },
  {
    id: 3,
    name: "Vault of Glass",
    expansion: "Beyond Light",
    path: "vog",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Waking Ruins (Spire)",
        imgUrl: "",
        path: "spire"
      },
      {
        encounterName: "The Trial of Kabr (Confluxes)",
        imgUrl: "",
        path: "confluxes"
      },
      {
        encounterName: "The Templar",
        imgUrl: "",
        path: "templar"
      },
      {
        encounterName: "The Gorgon's Labyrinth",
        imgUrl: "",
        path: "gorgons"
      },
      {
        encounterName: "Awaken The Glass Throne (Gatekeepers)",
        imgUrl: "",
        path: "gatekeepers"
      },
      {
        encounterName: "Atheon, Time's Conflux",
        imgUrl: "",
        path: "atheon"
      }
    ]
  },
  {
    id: 4,
    name: "Vow of the Disciple",
    expansion: "The Witch Queen",
    path: "vow",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Disciple's Bog",
        imgUrl: "",
        path: "bog"
      },
      {
        encounterName: "Acquisition",
        imgUrl: "",
        path: "acquisition"
      },
      {
        encounterName: "The Caretaker",
        imgUrl: "",
        path: "caretaker"
      },
      {
        encounterName: "Exhibition",
        imgUrl: "",
        path: "exhibition"
      },
      {
        encounterName: "Rhulk, Disciple of the Witness",
        imgUrl: "",
        path: "rhulk"
      },
    ]
  },
  {
    id: 5,
    name: "King's Fall",
    expansion: "The Witch Queen",
    path: "kings_fall",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Hall of Souls",
        imgUrl: "",
        path: "hall_of_souls"
      },
      {
        encounterName: "The Crux and Portico",
        imgUrl: "",
        path: "crux_portico"
      },
      {
        encounterName: "Basilica (Totems)",
        imgUrl: "",
        path: "totems"
      },
      {
        encounterName: "The Warpriest",
        imgUrl: "",
        path: "warpriest"
      },
      {
        encounterName: "Golgoroth's Cellar",
        imgUrl: "",
        path: "golgoroth"
      },
      {
        encounterName: "Daughters of Oryx",
        imgUrl: "",
        path: "daughters"
      },
      {
        encounterName: "Oryx, The Taken King",
        imgUrl: "",
        path: "oryx"
      }
    ]
  },
  {
    id: 5,
    name: "Root of Nightmares",
    expansion: "Lightfall",
    path: "ron",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Cataclysm",
        path: "cataclysm",
        imgUrl: ""
      },
      {
        encounterName: "Scission",
        path: "scission",
        imgUrl: ""
      },
      {
        encounterName: "Macrocosm (Explicator of Planets)",
        path: "planets",
        imgUrl: ""
      },
      {
        encounterName: "Nezarec, Final God of Pain",
        path: "nezarec",
        imgUrl: ""
      },
    ]
  },
  {
    id: 6,
    name: "Crota's End",
    expansion: "Lightfall",
    path: "crotas_end",
    imgUrl: "",
    encounters: [
      {
        encounterName: "The Abyss",
        path: "abyss",
        imgUrl: ""
      },
      {
        encounterName: "Cross the Bridge",
        path: "bridge",
        imgUrl: ""
      },
      {
        encounterName: "Ir Yut, the Deathsinger",
        path: "ir_yut",
        imgUrl: ""
      },
      {
        encounterName: "Crota, Son of Oryx",
        path: "crota",
        imgUrl: ""
      },
    ]
  },
  {
    id: 7,
    name: "Salvation's Edge ",
    expansion: "The Final Shape",
    path: "salvations_edge",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Substratum",
        path: "substratum",
        imgUrl: ""
      },
      {
        encounterName: "Herald of Finality",
        path: "herald",
        imgUrl: ""
      },
      {
        encounterName: "Repository",
        path: "repository",
        imgUrl: ""
      },
      {
        encounterName: "Verity",
        path: "verity",
        imgUrl: ""
      },
      {
        encounterName: "The Witness",
        path: "witness",
        imgUrl: ""
      },
    ]
  },
  {
    id: 8,
    name: "The Desert Perpetual",
    expansion: "Edge of Fate",
    path: "dp",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Epoptes, Lord of Quanta (Hydra)",
        path: "hydra",
        imgUrl: ""
      },
      {
        encounterName: "Agraios, Inherent (Hobgoblin)",
        path: "hobgoblin",
        imgUrl: ""
      },
      {
        encounterName: "Iatros, Inward-Turned",
        path: "wyvern",
        imgUrl: ""
      },
      {
        encounterName: "Koregos, The Worldline",
        path: "koregos",
        imgUrl: ""
      },
    ]
  },
  {
    id: 9,
    name: "The Desert Perpetual (Epic)",
    expansion: "Edge of Fate",
    path: "edp",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Epoptes, Lord of Quanta (Hydra)",
        path: "hydra",
        imgUrl: ""
      },
      {
        encounterName: "Agraios, Inherent (Hobgoblin)",
        path: "hobgoblin",
        imgUrl: ""
      },
      {
        encounterName: "Iatros, Inward-Turned",
        path: "wyvern",
        imgUrl: ""
      },
      {
        encounterName: "Koregos, Fractured in Time",
        path: "koregos-f",
        imgUrl: ""
      },
    ]
  }
];

export const dungeons: Raid_Dungeon[] = [
  {
    id: 0,
    name: "Shattered Throne",
    expansion: "Forsaken",
    path: "shattered_throne",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Erebus",
        path: "erebus",
        imgUrl: ""
      },
      {
        encounterName: "Vorgeth, the Boundless Hunger",
        path: "vorgeth",
        imgUrl: ""
      },
      {
        encounterName: "Dul Incaru, The Eternal Return",
        path: "dul_incaru",
        imgUrl: ""
      },
    ]
  },
  {
    id: 1,
    name: "Pit of Heresy",
    expansion: "Shadowkeep",
    path: "pit_of_heresy",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Necropolis",
        path: "necropolis",
        imgUrl: ""
      },
      {
        encounterName: "Tunnels of Despair",
        path: "tunnels_of_despair",
        imgUrl: ""
      },
      {
        encounterName: "Chamber of Suffering",
        path: "chamber_of_suffering",
        imgUrl: ""
      },
      {
        encounterName: "Harrow",
        path: "harrow",
        imgUrl: ""
      },
    ]
  },
  {
    id: 2,
    name: "Prophecy",
    expansion: "Shadowkeep",
    path: "prophecy",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Phalanx Echo",
        imgUrl: "",
        path: "phalanx_echo"
      },
      {
        encounterName: "Wasteland",
        imgUrl: "",
        path: "wasteland"
      },
      {
        encounterName: "The Hexahedron",
        imgUrl: "",
        path: "hexahedron"
      },
      {
        encounterName: "Singularity",
        imgUrl: "",
        path: "singularity"
      },
      {
        encounterName: "Kell Echo",
        imgUrl: "",
        path: "kell_echo"
      },
    ]
  },
  {
    id: 3,
    name: "Grasp of Avarice",
    expansion: "Bungie 30th Anniversary",
    path: "grasp_of_avarice",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Skywatch",
        path: "skywatch",
        imgUrl: ""
      },
      {
        encounterName: "Rusted Gangplank",
        path: "rusted_gangplank",
        imgUrl: ""
      },
      {
        encounterName: "Phry'zhia The Insatiable",
        path: "ogre",
        imgUrl: ""
      },
      {
        encounterName: "Sparrow Race",
        path: "sparrow_race",
        imgUrl: ""
      },
      {
        encounterName: "Fallen Shield",
        path: "fallen_shield",
        imgUrl: ""
      },
      {
        encounterName: "Captain Avarokk, The Covetous",
        path: "avarokk",
        imgUrl: ""
      },
    ]
  },
  {
    id: 4,
    name: "Duality",
    expansion: "The Witch Queen",
    path: "duality",
    imgUrl: "",
    encounters: [
      {
        encounterName: "The Nightmare of Gahlran, Sorrow Bearer",
        path: "gahlran",
        imgUrl: ""
      },
      {
        encounterName: "Unlock the Vault",
        path: "vault",
        imgUrl: ""
      },
      {
        encounterName: "Nightmare of Caiatl",
        path: "caiatl",
        imgUrl: ""
      },
    ]
  },
  {
    id: 5,
    name: "Spire of the Watcher",
    expansion: "The Witch Queen",
    path: "spire_of_the_watcher",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Reestablish Power",
        path: "reestablish_power",
        imgUrl: ""
      },
      {
        encounterName: "Ascend the Spire",
        path: "ascend_spire",
        imgUrl: ""
      },
      {
        encounterName: "Akelous, the Siren's Current",
        path: "akelous",
        imgUrl: ""
      },
      {
        encounterName: "Descend",
        path: "descend",
        imgUrl: ""
      },
      {
        encounterName: "Persys, Primordial Ruin",
        path: "persys",
        imgUrl: ""
      },
    ]
  },
  {
    id: 6,
    name: "Ghosts of the Deep",
    expansion: "Lightfall",
    path: "ghosts_of_the_deep",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Hive Ritual",
        path: "hive_ritual",
        imgUrl: ""
      },
      {
        encounterName: "Deep Methane",
        path: "deep_methane",
        imgUrl: ""
      },
      {
        encounterName: "Ecthar, the Shield of Savathun",
        path: "ecthar",
        imgUrl: ""
      },
      {
        encounterName: "Simmumah ur-Nokru, Lucent Necromancer",
        path: "simmumah",
        imgUrl: ""
      },
    ]
  },
  {
    id: 7,
    name: "Warlord's Ruin",
    expansion: "",
    path: "",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Rathil, First Broken Knight of Fikrul",
        path: "ratil",
        imgUrl: ""
      },
      {
        encounterName: "Imprisoned",
        path: "imprisoned",
        imgUrl: ""
      },
      {
        encounterName: "Wailing Tempest (Locus of Wailing Grief)",
        path: "wailing_tempest",
        imgUrl: ""
      },
      {
        encounterName: "Vengeful Peak",
        path: "vengeful_peak",
        imgUrl: ""
      },
      {
        encounterName: "Hefnd's Vengeance, Blighted Chimera",
        path: "hefnds_vengeance",
        imgUrl: ""
      },
    ]
  },
  {
    id: 8,
    name: "Vesper's Host",
    expansion: "The Final Shape",
    path: "vespers_host",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Embarkation",
        path: "embarkation",
        imgUrl: ""
      },
      {
        encounterName: "Activation",
        path: "activation",
        imgUrl: ""
      },
      {
        encounterName: "Infiltration",
        path: "infiltration",
        imgUrl: ""
      },
      {
        encounterName: "Raneiks Unified",
        path: "raneiks",
        imgUrl: ""
      },
      {
        encounterName: "The Corrupted Puppeteer",
        path: "corrupted_puppeteer",
        imgUrl: ""
      },
    ]
  },
  {
    id: 9,
    name: "Sundered Doctrine",
    expansion: "The Final Shape",
    path: "sundered_doctrine",
    imgUrl: "",
    encounters: [
      {
        encounterName: "Solve the Riddle",
        path: "riddle",
        imgUrl: ""
      },
      {
        encounterName: "Zoetic Lockset",
        path: "zoetic_lockset",
        imgUrl: ""
      },
      {
        encounterName: "Locate the Vault",
        path: "locate_vault",
        imgUrl: ""
      },
      {
        encounterName: "Kerrev, the Erased",
        path: "kerrev",
        imgUrl: ""
      },
    ]
  },
  {
    id: 10,
    name: "Equilibrium",
    expansion: "Renegades",
    path: "",
    imgUrl: "",
    encounters: [
      {
        encounterName: "The Temple Grounds",
        path: "temple_grounds",
        imgUrl: ""
      },
      {
        encounterName: "Harrow, Dredgen Apprentice",
        path: "harrow",
        imgUrl: ""
      },
      {
        encounterName: "Dredgen Sere",
        path: "dredgen_sere",
        imgUrl: ""
      },
    ]
  }
];

