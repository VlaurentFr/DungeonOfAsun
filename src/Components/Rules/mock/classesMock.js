export const basicClasses = [
  {
    name: `Noble`,
    spe: [4, 0, 2, 1],
    img: `/DungeonOfAsun/Assets/classes/Noble.png`,
    desc: `Peut utiliser la magie`,
    spell: ['Feu'],
    
    weapons: ['Aucune'],
    mastery: ['Gain de 5 pts en pv permanent']
  },
  {
    name: `Roturier`,
    spe: [4, 0, 2, 1],
    img: `/DungeonOfAsun/Assets/classes/roturier.png`,
    desc: `Ne peut pas utiliser la magie`,
    weapons: ['Aucune'],
    mastery: ['Gain de 5 pts en pv permanent']
  },
];
export const noviceClasses = [
  {
    name: `Epéiste`,
    spe: [4, 0, 2, 0],
    img: `/DungeonOfAsun/Assets/classes/epeiste.webp`,
    
    weapons: ['Epée C'],
    mastery: ['Gain de 5 pts en social permanent']
  },
  {
    name: `Brigand`,
    spe: [3, 0, 3, 0],
    img: `/DungeonOfAsun/Assets/classes/Warrior.webp`,
    
    weapons: ['Hache C'],
    mastery: ['Gain de 5 pts en force permanent']
  },
  {
    name: `Archer`,
    spe: [4, 0, 0, 3],
    img: `/DungeonOfAsun/Assets/classes/Archer.png`,
    
    weapons: ['Arc C'],
    mastery: ['Gain de 5 pts en social permanent']
  },
  {
    name: `Voleur`,
    spe: [4, 0, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/thief.png`,
    
    weapons: ['Dague C'],
    mastery: ['Gain de 5 pts en force permanent']
  },
  {
    name: `Soldat`,
    spe: [3, 0, 4, 0],
    img: `/DungeonOfAsun/Assets/classes/lancier.png`,
    
    weapons: ['Lance C'],
    mastery: ['Gain de 5 pts en social permanent']
  },
  {
    name: `Pugiliste`,
    spe: [4, 0, 2, 0],
    img: `/DungeonOfAsun/Assets/classes/monk.webp`,
    
    weapons: ['Poing C'],
    mastery: ['Gain de 5 pts en force permanent']
  },
  {
    name: `Combattant`,
    spe: [4, 0, 3, 0],
    img: `/DungeonOfAsun/Assets/classes/combattant.png`,
    
    weapons: ['Masse C'],
    mastery: ['Gain de 5 pts en force permanent']
  },
  {
    name: `Apprenti mage`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/Zephyr.png`,
    spell: ['Archetype 1'],
    weapons: ['Magie D'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Mage Noir`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/necromancer.webp`,
    
    weapons: ['Magie D'],
    spell: ['Miasme'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Apprenti Alchimiste`,
    spe: [1, 3, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/alchimiste.png`,
    
    weapons: ['Magie D'],
    spell: ['Transmutation Mineur'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Clerc`,
    spe: [1, 3, 0, 4],
    img: `/DungeonOfAsun/Assets/classes/Clerc.webp`,
    weapons: ['Magie C'],
    spell: ['Soin', 'Lumière'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
]
export const avancedClasses = [
  {
    name: `Bretteur`,
    img: `/DungeonOfAsun/Assets/classes/epeiste2.png`,
    weapons: ['Epee A'],
    mastery: ['+ 10 de Réussite a l\'épée']
  },
  {
    name: `Guerrier`,
    img: `/DungeonOfAsun/Assets/classes/Warrior2.png`,
    weapons: ['Hache A'],
    mastery: ['+ 10 de Réussite a la hache']
  },
  {
    name: `Archer d'élite`,
    img: `/DungeonOfAsun/Assets/classes/Archer2.png`,
    weapons: ['Arc A'],
    mastery: ['+ 10 de Réussite a l\'arc']
  },
  {
    name: `Assassin`,
    img: `/DungeonOfAsun/Assets/classes/thief2.png`,
    weapons: ['Dague A'],
    mastery: ['+ 10 de Réussite a la dague']
  },
  {
    name: `Lancier`,
    img: `/DungeonOfAsun/Assets/classes/lancier2.webp`,
    weapons: ['Lance A'],
    mastery: ['+ 10 de Réussite a la lance']
  },
  {
    name: `Moine`,
    img: `/DungeonOfAsun/Assets/classes/monk.webp`,
    weapons: ['Poing A'],
    mastery: ['+ 10 de Réussite aux poings']
  },
  {
    name: `Mercenaire`,
    img: `/DungeonOfAsun/Assets/classes/combattant2.png`,
    weapons: ['Masse A'],
    mastery: ['+ 10 de Réussite a la masse']
  },
  {
    name: `Mage`,
    img: `/DungeonOfAsun/Assets/classes/pyromancer.webp`,
    spell: ['Archetype 1', 'Archetype 2'],
    mastery: ['+ 10 de Réussite a la magie']
  },
  {
    name: `Mage de Sang`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/bloodMage.png`,
    
    weapons: ['Magie A'],
    spell: ['Sang', 'Sangsue'],
    mastery: ['+ 10 de Réussite a la magie']
  },
  {
    name: `Necromancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/necromancer2.png`,
    
    weapons: ['Magie A'],
    spell: ['Miasme', 'Mort'],
    mastery: ['+ 10 de Réussite a la magie']
  },
  {
    name: `Alchimiste`,
    spe: [1, 3, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/alchimiste.png`,
    
    weapons: ['Magie A'],
    spell: ['Transmutation Mineur', 'Transmutation'],
    mastery: ['+ 10 de Réussite a la magie']
  },
  {
    name: `Prêtre`,
    spe: [1, 3, 0, 4],
    img: `/DungeonOfAsun/Assets/classes/Clerc2.png`,
    weapons: ['Magie A'],
    spell: ['Soin', 'Lumière','Nosferatu','Remède'],
    mastery: ['+ 10 de Réussite a la magie']
  },
  {
    name: `Croisé`,
    img: `/DungeonOfAsun/Assets/classes/Croise.png`,
    weapons: ['1 Rang B, Magie C'],
    spell: ['Soin', 'Lumière','Sagitae','Remède'],
    mastery: ['+ 5 Force']
  },
  {
    name: `Chevalier Noir`,
    img: `/DungeonOfAsun/Assets/classes/dark-knight.png`,
    weapons: ['1 Rang B, Magie C'],
    spell: ['Miasme', 'Piques Noirs'],
    mastery: ['+ 5 Force']
  },
];
export const masterClasses = [
  {
    name: `Maître Epéiste`,
    img: `/DungeonOfAsun/Assets/classes/epeiste3.png`,
    weapons: ['Epee S'],
    mastery: ['+ 10 de Critique a l\'épée']
  },
  {
    name: `Berserker`,
    img: `/DungeonOfAsun/Assets/classes/Warrior3.png`,
    weapons: ['Hache S'],
    mastery: ['+ 10 de Critique a la hache']
  },
  {
    name: `Maître Archer`,
    img: `/DungeonOfAsun/Assets/classes/Archer3.webp`,
    weapons: ['Arc S'],
    mastery: ['+ 10 de Critique a l\'arc']
  },
  {
    name: `Maître Assassin`,
    img: `/DungeonOfAsun/Assets/classes/thief3.png`,
    weapons: ['Dague S'],
    mastery: ['+ 10 de Critique a la dague']
  },
  {
    name: `Grand Lancier`,
    img: `/DungeonOfAsun/Assets/classes/lancier3.webp`,
    weapons: ['Lance S'],
    mastery: ['+ 10 de Critique a la lance']
  },
  {
    name: `Grand Moine`,
    img: `/DungeonOfAsun/Assets/classes/monk.webp`,
    weapons: ['Poing S'],
    mastery: ['+ 10 de Critique aux poings']
  },
  {
    name: `Brise'Os`,
    img: `/DungeonOfAsun/Assets/classes/combattant3.png`,
    weapons: ['Masse S'],
    mastery: ['+ 10 de Critique a la masse']
  },
  {
    name: `Archimage`,
    img: `/DungeonOfAsun/Assets/classes/astromancien.png`,
    spell: ['Archetype 1', 'Archetype 2', 'Archetype 3'],
    weapons: ['Magie S'],
    mastery: ['+ 10 de Critique en magie']
  },
  {
    name: `Maître de Sang`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/bloodMage2.png`,
    
    weapons: ['Magie S'],
    spell: ['Sang', 'Sangsue', 'Hades'],
    mastery: ['+ 10 de Critique en magie']
  },
  {
    name: `Maître Necromancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/necromancer3.png`,
    
    weapons: ['Magie S'],
    spell: ['Miasme', 'Mort', 'Banshee'],
    mastery: ['+ 10 de Critique en magie']
  },
  {
    name: `Maître Alchimiste`,
    spe: [1, 3, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/alchimiste.png`,
    
    weapons: ['Magie S'],
    spell: ['Transmutation Mineur', 'Transmutation', 'Transmutation Majeur'],
    mastery: ['+ 10 de Critique en magie']
  },
  {
    name: `Evêque`,
    spe: [1, 3, 0, 4],
    img: `/DungeonOfAsun/Assets/classes/Clerc3.png`,
    weapons: ['Magie S'],
    spell: ['Soin', 'Lumière','Nosferatu','Remède','Aura','Sagitae','Abraxas'],
    mastery: ['+ 10 de Critique en magie']
  },
  {
    name: `Grand Croisé`,
    img: `/DungeonOfAsun/Assets/classes/Croise2.png`,
    weapons: ['1 Rang A+, Magie A'],
    spell: ['Soin', 'Lumière','Sagitae','Remède', 'Fortification', 'Abraxas'],
    mastery: ['+ 5 PV']
  },
  {
    name: `Chevalier du Néant`,
    img: `/DungeonOfAsun/Assets/classes/dark-knight2.png`,
    weapons: ['1 Rang A+, Magie A'],
    mastery: ['+ 10 de Critique en magie'],
    spell: ['Miasme', 'Piques Noirs', 'Hades'],
  },
];