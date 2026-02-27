export interface Raid_Dungeon {
  id: number;
  name: string;
  path: string;
  expansion: string;
  imgUrl: string;
  encounters: Encounter[];
  searchEncounters?: Encounter[];
  isExpanded?: boolean;
  colorName: string;
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
    imgUrl: "/raids/last_wish/last_wish_icon.jpeg",
    colorName: "teal-400",
    encounters: [
      {
        encounterName: "Kalli, the Corrupted",
        imgUrl: "/raids/last_wish/kalli.jpg",
        path: "kalli"
      },
      {
        encounterName: "Shuro Chi, the Corrupted",
        imgUrl: "/raids/last_wish/shuro_chi.jpg",
        path: "shuro_chi"
      },
      {
        encounterName: "Morgeth, The Spirekeeper",
        imgUrl: "/raids/last_wish/morgeth.jpg",
        path: "morgeth"
      },
      {
        encounterName: "The Vault",
        imgUrl: "/raids/last_wish/vault.jpg",
        path: "vault"
      },
      {
        encounterName: "Riven of a Thousand Voices",
        imgUrl: "/raids/last_wish/riven.jpg",
        path: "riven"
      },
      {
        encounterName: "Queenswalk",
        imgUrl: "/raids/last_wish/queenswalk.jpg",
        path: "queenswalk"
      }
    ]
  },
  {
    id: 1,
    name: "Garden of Salvation",
    expansion: "Shadowkeep",
    imgUrl: "/raids/garden_of_salvation/garden_of_salvation.jpg",
    path: "garden_of_salvation",
    colorName: "green-600",
    encounters: [
      {
        encounterName: "Evade The Consecrated Mind",
        imgUrl: "/raids/garden_of_salvation/evade_consecrated.jpg",
        path: "evade_consecrated_mind"
      },
      {
        encounterName: "Summon The Consecrated Mind",
        imgUrl: "/raids/garden_of_salvation/summon_consecrated.jpg",
        path: "summon_consecrated_mind"
      },
      {
        encounterName: "Defeat The Consecrated Mind",
        imgUrl: "/raids/garden_of_salvation/defeat_consecrated.jpg",
        path: "defeat_consecrated_mind"
      },
      {
        encounterName: "Sanctified Mind",
        imgUrl: "/raids/garden_of_salvation/sanctified.jpg",
        path: "sanctified_mind"
      }
    ]
  },
  {
    id: 2,
    name: "Deep Stone Crypt",
    expansion: "Beyond Light",
    path: "deep_stone_crypt",
    imgUrl: "/raids/dsc/dsc.jpg",
    colorName: "black",
    encounters: [
      {
        encounterName: "Surviving the Blizzard",
        imgUrl: "/raids/dsc/blizzard.jpg",
        path: "blizzard"
      },
      {
        encounterName: "Crypt Security",
        imgUrl: "/raids/dsc/crypt_security.jpg",
        path: "crypt_security"
      },
      {
        encounterName: "Atraks-1, Fallen Exo",
        imgUrl: "/raids/dsc/atraks.jpg",
        path: "atraks"
      },
      {
        encounterName: "Orbital Space Walk",
        imgUrl: "/raids/dsc/spacewalk.jpg",
        path: "space_walk"
      },
      {
        encounterName: "Descent",
        imgUrl: "/raids/dsc/descent.jpg",
        path: "descent"
      },
      {
        encounterName: "Taniks, The Abomination",
        imgUrl: "/raids/dsc/taniks.jpg",
        path: "taniks"
      }
    ]
  },
  {
    id: 3,
    name: "Vault of Glass",
    expansion: "Beyond Light",
    path: "vog",
    imgUrl: "/raids/vog/vog.jpg",
    colorName: "amber-500",
    encounters: [
      {
        encounterName: "Waking Ruins (Spire)",
        imgUrl: "/raids/vog/waking_ruins.jpg",
        path: "spire"
      },
      {
        encounterName: "The Trial of Kabr (Confluxes)",
        imgUrl: "/raids/vog/confluxes.jpg",
        path: "confluxes"
      },
      {
        encounterName: "The Templar",
        imgUrl: "/raids/vog/templar.jpg",
        path: "templar"
      },
      {
        encounterName: "The Gorgon's Labyrinth",
        imgUrl: "/raids/vog/gorgons.jpg",
        path: "gorgons"
      },
      {
        encounterName: "Awaken The Glass Throne (Gatekeepers)",
        imgUrl: "/raids/vog/gatekeepers.jpg",
        path: "gatekeepers"
      },
      {
        encounterName: "Atheon, Time's Conflux",
        imgUrl: "/raids/vog/atheon.jpg",
        path: "atheon"
      }
    ]
  },
  {
    id: 4,
    name: "Vow of the Disciple",
    expansion: "The Witch Queen",
    path: "vow",
    imgUrl: "/raids/vow/vow.jpg",
    colorName: "gray-600",
    encounters: [
      {
        encounterName: "Disciple's Bog",
        imgUrl: "/raids/vow/bog.jpg",
        path: "bog"
      },
      {
        encounterName: "Acquisition",
        imgUrl: "/raids/vow/acquisition.jpg",
        path: "acquisition"
      },
      {
        encounterName: "The Caretaker",
        imgUrl: "/raids/vow/caretaker.jpg",
        path: "caretaker"
      },
      {
        encounterName: "Exhibition",
        imgUrl: "/raids/vow/exhibition.jpg",
        path: "exhibition"
      },
      {
        encounterName: "Rhulk, Disciple of the Witness",
        imgUrl: "/raids/vow/rhulk.jpg",
        path: "rhulk"
      },
    ]
  },
  {
    id: 5,
    name: "King's Fall",
    expansion: "The Witch Queen",
    path: "kings_fall",
    imgUrl: "/raids/kings_fall/kings_fall.jpg",
    colorName: "yellow-400",
    encounters: [
      {
        encounterName: "Hall of Souls",
        imgUrl: "/raids/kings_fall/hall_of_souls.jpg",
        path: "hall_of_souls"
      },
      {
        encounterName: "The Crux and Portico",
        imgUrl: "/raids/kings_fall/portico.jpg",
        path: "crux_portico"
      },
      {
        encounterName: "Basilica (Totems)",
        imgUrl: "/raids/kings_fall/totems.png",
        path: "totems"
      },
      {
        encounterName: "The Warpriest",
        imgUrl: "/raids/kings_fall/warpriest.jpg",
        path: "warpriest"
      },
      {
        encounterName: "Golgoroth's Cellar",
        imgUrl: "/raids/kings_fall/golgoroth.jpg",
        path: "golgoroth"
      },
      {
        encounterName: "Daughters of Oryx",
        imgUrl: "/raids/kings_fall/daughters.jpg",
        path: "daughters"
      },
      {
        encounterName: "Oryx, The Taken King",
        imgUrl: "/raids/kings_fall/oryx.jpg",
        path: "oryx"
      }
    ]
  },
  {
    id: 5,
    name: "Root of Nightmares",
    expansion: "Lightfall",
    path: "ron",
    imgUrl: "/raids/ron/ron.png",
    colorName: "blue-300",
    encounters: [
      {
        encounterName: "Cataclysm",
        path: "cataclysm",
        imgUrl: "/raids/ron/cataclysm.jpg",
      },
      {
        encounterName: "Scission",
        path: "scission",
        imgUrl: "/raids/ron/scission.jpg",
      },
      {
        encounterName: "Macrocosm (Explicator of Planets)",
        path: "planets",
        imgUrl: "/raids/ron/planets.jpg"
      },
      {
        encounterName: "Nezarec, Final God of Pain",
        path: "nezarec",
        imgUrl: "/raids/ron/nezarec.jpg"
      },
    ]
  },
  {
    id: 6,
    name: "Crota's End",
    expansion: "Lightfall",
    path: "crotas_end",
    imgUrl: "/raids/crotas_end/crotas_end.jpg",
    colorName: "green-900",
    encounters: [
      {
        encounterName: "The Abyss",
        path: "abyss",
        imgUrl: "/raids/crotas_end/abyss.jpg",
      },
      {
        encounterName: "Cross the Bridge",
        path: "bridge",
        imgUrl: "/raids/crotas_end/bridge.jpg",
      },
      {
        encounterName: "Ir Yut, the Deathsinger",
        path: "ir_yut",
        imgUrl: "/raids/crotas_end/ir_yut.jpg",
      },
      {
        encounterName: "Crota, Son of Oryx",
        path: "crota",
        imgUrl: "/raids/crotas_end/crota.jpg",
      },
    ]
  },
  {
    id: 7,
    name: "Salvation's Edge ",
    expansion: "The Final Shape",
    path: "salvations_edge",
    imgUrl: "/raids/se/salvations_edge.jpg",
    colorName: "orange-900",
    encounters: [
      {
        encounterName: "Substratum",
        path: "substratum",
        imgUrl: "/raids/se/substratum.jpg",
      },
      {
        encounterName: "Herald of Finality",
        path: "herald",
        imgUrl: "/raids/se/herald.jpg"
      },
      {
        encounterName: "Repository",
        path: "repository",
        imgUrl: "/raids/se/repository.jpg"
      },
      {
        encounterName: "Verity",
        path: "verity",
        imgUrl: "/raids/se/verity.jpg"
      },
      {
        encounterName: "The Witness",
        path: "witness",
        imgUrl: "/raids/se/witness.jpg"
      },
    ]
  },
  {
    id: 8,
    name: "The Desert Perpetual",
    expansion: "Edge of Fate",
    path: "dp",
    imgUrl: "/raids/dp/dp.jpg",
    colorName: "amber-200",
    encounters: [
      {
        encounterName: "Epoptes, Lord of Quanta (Hydra)",
        path: "hydra",
        imgUrl: "/raids/dp/hydra.jpg"
      },
      {
        encounterName: "Agraios, Inherent (Hobgoblin)",
        path: "hobgoblin",
        imgUrl: "/raids/dp/hobgoblin.jpg"
      },
      {
        encounterName: "Iatros, Inward-Turned (Wyvern)",
        path: "wyvern",
        imgUrl: "/raids/dp/wyvern.jpg"
      },
      {
        encounterName: "Koregos, The Worldline",
        path: "koregos",
        imgUrl: "/raids/dp/koregos.jpg"
      },
    ]
  },
  {
    id: 9,
    name: "The Desert Perpetual (Epic)",
    expansion: "Edge of Fate",
    path: "edp",
    imgUrl: "/raids/dp/edp.jpg",
    colorName: "border-slate-400",
    encounters: [
      {
        encounterName: "Epoptes, Lord of Quanta (Hydra)",
        path: "hydra",
        imgUrl: "/raids/dp/hydra.jpg"
      },
      {
        encounterName: "Agraios, Inherent (Hobgoblin)",
        path: "hobgoblin",
        imgUrl: "/raids/dp/hobgoblin.jpg"
      },
      {
        encounterName: "Iatros, Inward-Turned (Wyvern)",
        path: "wyvern",
        imgUrl: "/raids/dp/wyvern.jpg"
      },
      {
        encounterName: "Koregos, Fractured in Time",
        path: "koregos_f",
        imgUrl: "/raids/dp/koregos_f.jpg"
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
    imgUrl: "/dungeons/shattered_throne/shattered_throne.jpg",
    colorName: "black",
    encounters: [
      {
        encounterName: "Erebus",
        path: "erebus",
        imgUrl: "/dungeons/shattered_throne/erebus.jpg"
      },
      {
        encounterName: "Vorgeth, the Boundless Hunger",
        path: "vorgeth",
        imgUrl: "/dungeons/shattered_throne/vorgeth.jpg"
      },
      {
        encounterName: "Dul Incaru, The Eternal Return",
        path: "dul_incaru",
        imgUrl: "/dungeons/shattered_throne/dul_incaru.jpg"
      },
    ]
  },
  {
    id: 1,
    name: "Pit of Heresy",
    expansion: "Shadowkeep",
    path: "pit_of_heresy",
    imgUrl: "/dungeons/pit/pit.jpg",
    colorName: "red-800",
    encounters: [
      {
        encounterName: "Necropolis",
        path: "necropolis",
        imgUrl: "/dungeons/pit/necropolis.jpeg"
      },
      {
        encounterName: "Tunnels of Despair",
        path: "tunnels_of_despair",
        imgUrl: "/dungeons/pit/tunnels.png"
      },
      {
        encounterName: "Chamber of Suffering",
        path: "chamber_of_suffering",
        imgUrl: "/dungeons/pit/chamber.jpg"
      },
      {
        encounterName: "Zulmak, Instrument of Torment (Harrow)",
        path: "zulmak",
        imgUrl: "/dungeons/pit/zulmak.jpg"
      },
    ]
  },
  {
    id: 2,
    name: "Prophecy",
    expansion: "Shadowkeep",
    path: "prophecy",
    imgUrl: "/dungeons/prophecy/prophecy.jpg",
    colorName: "cyan-300",
    encounters: [
      {
        encounterName: "Phalanx Echo",
        imgUrl: "/dungeons/prophecy/phalanx.jpg",
        path: "phalanx_echo"
      },
      {
        encounterName: "Wasteland",
        imgUrl: "/dungeons/prophecy/wastelands.jpg",
        path: "wasteland"
      },
      {
        encounterName: "The Hexahedron",
        imgUrl: "/dungeons/prophecy/prophecy.jpg",
        path: "hexahedron"
      },
      {
        encounterName: "Singularity",
        imgUrl: "/dungeons/prophecy/singularity.jpg",
        path: "singularity"
      },
      {
        encounterName: "Kell Echo",
        imgUrl: "/dungeons/prophecy/kell_echo.jpg",
        path: "kell_echo"
      },
    ]
  },
  {
    id: 3,
    name: "Grasp of Avarice",
    expansion: "Bungie 30th Anniversary",
    path: "grasp_of_avarice",
    imgUrl: "/dungeons/grasp/grasp.jpg",
    colorName: "purple-700",
    encounters: [
      {
        encounterName: "Skywatch",
        path: "skywatch",
        imgUrl: "/dungeons/grasp/skywatch.jpg"
      },
      {
        encounterName: "Rusted Gangplank",
        path: "rusted_gangplank",
        imgUrl: "/dungeons/grasp/gangplank.jpg"
      },
      {
        encounterName: "Phry'zhia The Insatiable (Ogre)",
        path: "ogre",
        imgUrl: "/dungeons/grasp/phryzhia.jpg"
      },
      {
        encounterName: "Sparrow Race",
        path: "sparrow_race",
        imgUrl: "/dungeons/grasp/sparrow.jpg"
      },
      {
        encounterName: "Fallen Shield",
        path: "fallen_shield",
        imgUrl: "/dungeons/grasp/fallen_shield.jpg"
      },
      {
        encounterName: "Captain Avarokk, The Covetous",
        path: "avarokk",
        imgUrl: "/dungeons/grasp/captain_avarokk.jpg"
      },
    ]
  },
  {
    id: 4,
    name: "Duality",
    expansion: "The Witch Queen",
    path: "duality",
    imgUrl: "/dungeons/duality/duality.jpg",
    colorName: "red-600",
    encounters: [
      {
        encounterName: "The Nightmare of Gahlran, Sorrow Bearer",
        path: "gahlran",
        imgUrl: "/dungeons/duality/gahlran.jpeg"
      },
      {
        encounterName: "Unlock the Vault",
        path: "vault",
        imgUrl: "/dungeons/duality/unlock_vault.jpg"
      },
      {
        encounterName: "Nightmare of Caiatl",
        path: "caiatl",
        imgUrl: "/dungeons/duality/caiatl.jpg"
      },
    ]
  },
  {
    id: 5,
    name: "Spire of the Watcher",
    expansion: "The Witch Queen",
    path: "spire_of_the_watcher",
    imgUrl: "/dungeons/spire/spire.jpg",
    colorName: "amber-950",
    encounters: [
      {
        encounterName: "Reestablish Power",
        path: "reestablish_power",
        imgUrl: "/dungeons/spire/reestablish_power.jpg"
      },
      {
        encounterName: "Ascend the Spire",
        path: "ascend_spire",
        imgUrl: "/dungeons/spire/ascend_spire.jpg"
      },
      {
        encounterName: "Akelous, the Siren's Current",
        path: "akelous",
        imgUrl: "/dungeons/spire/akelous.jpg"
      },
      {
        encounterName: "Descend",
        path: "descend",
        imgUrl: "/dungeons/spire/descend.jpg"
      },
      {
        encounterName: "Persys, Primordial Ruin",
        path: "persys",
        imgUrl: "/dungeons/spire/persys.jpg"
      },
    ]
  },
  {
    id: 6,
    name: "Ghosts of the Deep",
    expansion: "Lightfall",
    path: "ghosts_of_the_deep",
    imgUrl: "/dungeons/gotd/gotd.jpg",
    colorName: "sky-600",
    encounters: [
      {
        encounterName: "Hive Ritual",
        path: "hive_ritual",
        imgUrl: "/dungeons/gotd/hive_ritual.jpg"
      },
      {
        encounterName: "Deep Methane",
        path: "deep_methane",
        imgUrl: "/dungeons/gotd/deep_methane.jpg"
      },
      {
        encounterName: "Ecthar, the Shield of Savathun",
        path: "ecthar",
        imgUrl: "/dungeons/gotd/ecthar.jpg"
      },
      {
        encounterName: "Simmumah ur-Nokru, Lucent Necromancer",
        path: "simmumah",
        imgUrl: "/dungeons/gotd/simmumah.jpg"
      },
    ]
  },
  {
    id: 7,
    name: "Warlord's Ruin",
    expansion: "",
    path: "warlords_ruin",
    imgUrl: "/dungeons/warlords/warlords.jpg",
    colorName: "zinc-950",
    encounters: [
      {
        encounterName: "Rathil, First Broken Knight of Fikrul",
        path: "ratil",
        imgUrl: "/dungeons/warlords/rathil.png"
      },
      {
        encounterName: "Imprisoned",
        path: "imprisoned",
        imgUrl: "/dungeons/warlords/imprisoned.jpg"
      },
      {
        encounterName: "Wailing Tempest (Locus of Wailing Grief)",
        path: "wailing_tempest",
        imgUrl: "/dungeons/warlords/locus.jpg"
      },
      {
        encounterName: "Vengeful Peak",
        path: "vengeful_peak",
        imgUrl: "/dungeons/warlords/vengeful_peak.jpg"
      },
      {
        encounterName: "Hefnd's Vengeance, Blighted Chimera",
        path: "hefnds_vengeance",
        imgUrl: "/dungeons/warlords/hefnd.jpg"
      },
    ]
  },
  {
    id: 8,
    name: "Vesper's Host",
    expansion: "The Final Shape",
    path: "vespers_host",
    imgUrl: "/dungeons/vespers_host/vespers_host.jpg",
    colorName: "amber-500",
    encounters: [
      {
        encounterName: "Embarkation",
        path: "embarkation",
        imgUrl: "/dungeons/vespers_host/embarkation.jpg"
      },
      {
        encounterName: "Activation",
        path: "activation",
        imgUrl: "/dungeons/vespers_host/activation.jpg"
      },
      {
        encounterName: "Infiltration",
        path: "infiltration",
        imgUrl: "/dungeons/vespers_host/infiltration.jpg"
      },
      {
        encounterName: "Raneiks Unified",
        path: "raneiks",
        imgUrl: "/dungeons/vespers_host/raneiks.jpg"
      },
      {
        encounterName: "The Corrupted Puppeteer",
        path: "corrupted_puppeteer",
        imgUrl: "/dungeons/vespers_host/corrupted_puppeteer.jpg"
      },
    ]
  },
  {
    id: 9,
    name: "Sundered Doctrine",
    expansion: "The Final Shape",
    path: "sundered_doctrine",
    imgUrl: "/dungeons/sundered/sundered.jpg",
    colorName: "stone-900",
    encounters: [
      {
        encounterName: "Solve the Riddle",
        path: "riddle",
        imgUrl: "/dungeons/sundered/riddle.jpg"
      },
      {
        encounterName: "Zoetic Lockset",
        path: "zoetic_lockset",
        imgUrl: "/dungeons/sundered/zoetic.png"
      },
      {
        encounterName: "Locate the Vault",
        path: "locate_vault",
        imgUrl: "/dungeons/sundered/locate_vault.jpg"
      },
      {
        encounterName: "Kerrev, the Erased",
        path: "kerrev",
        imgUrl: "/dungeons/sundered/kerrev.jpg"
      },
    ]
  },
  {
    id: 10,
    name: "Equilibrium",
    expansion: "Renegades",
    path: "equilibrium",
    imgUrl: "/dungeons/equilibrium/equilibrium.jpg",
    colorName: "blue-600",
    encounters: [
      {
        encounterName: "The Temple Grounds",
        path: "temple_grounds",
        imgUrl: "/dungeons/equilibrium/temple_grounds.jpg"
      },
      {
        encounterName: "Harrow, Dredgen Apprentice",
        path: "harrow",
        imgUrl: "/dungeons/equilibrium/harrow.jpg"
      },
      {
        encounterName: "Dredgen Sere",
        path: "dredgen_sere",
        imgUrl: "/dungeons/equilibrium/dredgen_sere.jpg"
      },
    ]
  }
];

export const raidDungeons = [...raids, ...dungeons];

