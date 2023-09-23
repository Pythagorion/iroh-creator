export interface Character {
    name: string;
    rolebook: string;
    background: Background;
    education: Education[];
    fightingStyle: string;
    status: Status;
    stats: Stats;
    balance: Balance;
    conditions: Conditions;
    speciality: Speciality;
    traits: Trait[];
    appearance: string;
    hometown: string;
    past: {[key: string]: string};
    connections: string[];
    growth: number;
    growthDevelopment: {[key: string]: number};
    combatTechniques: CombatTechnique[];
}

export interface Status {
    positive: PositiveStatus;
    negative: NegativeStatus;
}

export interface PositiveStatus {
    empowered: boolean;
    favored: boolean;
    inspired: boolean;
    prepared: boolean;
}

export interface NegativeStatus {
    lost: boolean;
    impaired: boolean;
    restrained: boolean;
    dazed: boolean;
}

export interface Conditions {
    frightened: boolean;
    angry: boolean;
    guilty: boolean;
    unsecure: boolean;
    agitated: boolean;
    ridOfConditions: Map<"frightened"|"angry"|"guilty"|"unsecure"|"agitated", string>;
}

export enum Background {
    Army = "army",
    Criminal = "criminal",
    City = "city",
    Order = "order",
    Privileged = "privileged",
    Wilderness = "wilderness",
}

export enum Education {
    Water = "water",
    Earth = "earth",
    Fire = "fire",
    Air = "air",
    Weapon = "weapon",
    Technology = "technology",
}

export interface Rolebook {
    name: string;
    stats: Stats;
    balance: Balance;
    speciality: Speciality;
    traits: Trait[];
    past: string[];
    connections: string[];
    momentOfEquilibrium: string;
    combatTechnique: CombatTechnique;
}

export interface Stats {
    creativity: number;
    focus: number;
    harmony: number;
    passion: number;
}

export interface Balance {
    black: string;
    white: string;
    index: number
}

export interface Speciality {
    name: string;
    description: string;
}

export interface Trait {
    name: string;
    description: string;
}

export interface CombatTechnique {
    name: string;
    description: string;
    e: boolean;
    p: boolean;
    g: boolean;
    type: CombatTechniqueType;
}

export enum CombatTechniqueType {
    DefenseAndManeuver = "defenseAndManeuver",
    ChargeAndAttack = "chargeAndAttack",
    DodgeAndObserve = "dodgeAndObserve",
}