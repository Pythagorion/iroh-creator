import { CombatTechniqueType, Rolebook } from "./char";

export const TheIron: Rolebook = {
    name: "rolebook.iron",
    stats: {
        creativity: 0,
        focus: 1,
        harmony: -1,
        passion: 1
    },
    balance: {
        black: 'rolebook.iron.balance.black',
        white: 'rolebook.iron.balance.white',
        index: 0
    },
    speciality: {
        name: 'rolebook.iron.speciality.name',
        description: 'rolebook.iron.speciality.description'
    },
    traits: [
        {
            name: 'rolebook.iron.traits.0.name',
            description: 'rolebook.iron.traits.0.description'
        }
    ],
    past: [
        'rolebook.iron.past.0',
        'rolebook.iron.past.1',
    ],
    connections: [
        'rolebook.iron.connections.0',
        'rolebook.iron.connections.1',
    ],
    momentOfEquilibrium: "rolebook.iron.momentOfEquilibrium",
    combatTechnique: {
        name: 'rolebook.iron.combatTechnique.name',
        description: 'rolebook.iron.combatTechnique.description',
        e: true,
        p: true,
        g: true,
        type: CombatTechniqueType.DefenseAndManeuver
    }
};