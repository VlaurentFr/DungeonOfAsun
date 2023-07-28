export const basicClasses = [
  {
    name: `Noble`,
    spe: [4, 0, 2, 1],
    img: `/DungeonOfAsun/Assets/classes/epeiste.webp`,
    desc: `Peut utiliser la magie`,
    spell: ['Feu'],
    
    weapons: ['Epee Rang E', 'Hache Rang E'],
    mastery: ['Gain de 5 pts en pv permanent']
  },
  {
    name: `Roturier`,
    spe: [4, 0, 2, 1],
    img: `/DungeonOfAsun/Assets/classes/roturier.webp`,
    desc: `Ne peut pas utiliser la magie`,
    spell: [],
    
    weapons: ['Aucune'],
    mastery: ['Gain de 5 pts en pv permanent']
  },
  {
    name: `Vagabond`,
    spe: [2, 2, 2, 2],
    img: `/DungeonOfAsun/Assets/classes/Aventurier.webp`,
    desc: `Peut utiliser la magie`,
    spell: ['Feu','Soin'],
    
    weapons: ['Aucune'],
    mastery: ['Gain de 5 pts en pv permanent']
  },
];
export const noviceClasses = [
  {
    name: `Epéiste`,
    spe: [4, 0, 2, 0],
    img: `/DungeonOfAsun/Assets/classes/Noble.png`,
    
    weapons: ['Epée C'],
    mastery: ['Gain de 5 pts en social permanent']
  },
  {
    name: `Guerrier`,
    spe: [3, 0, 3, 0],
    img: `/DungeonOfAsun/Assets/classes/Warrior.png`,
    
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
    img: `/DungeonOfAsun/Assets/classes/lancier.webp`,
    
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
    img: `/DungeonOfAsun/Assets/classes/combattant.webp`,
    
    weapons: ['Masse C'],
    mastery: ['Gain de 5 pts en force permanent']
  },
  {
    name: `Apprenti Pyromancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/pyromancer.webp`,
    
    spell: ['Feu'],
    weapons: ['Magie D'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Apprenti Cryomancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/cryomancer.png`,
    
    weapons: ['Magie D'],
    spell: ['Glacier'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Apprenti Zephyr`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/Zephyr.png`,
    
    weapons: ['Magie D'],
    spell: ['Vent'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Apprenti Mage Gris`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/grey-mage.png`,
    
    weapons: ['Magie D'],
    spell: ['Poison'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Apprenti Druide`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/druid.webp`,
    
    weapons: ['Magie C'],
    spell: ['Plante', 'Terre'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Apprenti Illutionniste`,
    spe: [1, 2, 0, 4],
    weapons: ['Magie D'],
    img: `/DungeonOfAsun/Assets/classes/illutioniste.png`,
    
    spell: ['Illusion'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Apprenti Drakomancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/Drakomancien.png`,
    
    weapons: ['Magie D'],
    spell: ['Foudre'],
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
    name: `Apprenti Chaman`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/chaman.webp`,
    
    weapons: ['Magie D'],
    spell: ['Force Bestial'],
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
  {
    name: `Aventurier`,
    spe: [2, 2, 2, 2],
    img: `/DungeonOfAsun/Assets/classes/Aventurier.webp`,
    
    weapons: ['1 Rang C'],
    mastery: ['Gain de 5 pts en pv permanent']
  },
]
export const avancedClasses = [
  {
    name: `Bretteur`,
    img: `/DungeonOfAsun/Assets/classes/bretteur.webp`,
  },
  {
    name: `Guerrier d'élite`,
    img: `/DungeonOfAsun/Assets/classes/Warrior.png`,
  },
  {
    name: `Archer d'élite`,
    img: `/DungeonOfAsun/Assets/classes/Archer.png`,
  },
  {
    name: `Spadassin`,
    img: `/DungeonOfAsun/Assets/classes/spadassin.png`,
  },{
    name: `Assassin`,
    img: `/DungeonOfAsun/Assets/classes/thief.png`,
  },
  {
    name: `Lancier`,
    img: `/DungeonOfAsun/Assets/classes/lancier.webp`,
  },
  {
    name: `Moine`,
    img: `/DungeonOfAsun/Assets/classes/monk.webp`,
  },
  {
    name: `Pyromancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/pyromancer.webp`,
    
    spell: ['Feu'],
    weapons: ['Magie D'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Cryomancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/cryomancer.png`,
    
    weapons: ['Magie D'],
    spell: ['Glacier'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Zephyr`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/Zephyr.png`,
    
    weapons: ['Magie D'],
    spell: ['Vent'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Mage Gris`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/grey-mage.png`,
    
    weapons: ['Magie D'],
    spell: ['Poison'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Druide`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/druid.webp`,
    
    weapons: ['Magie C'],
    spell: ['Plante', 'Terre'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Illutionniste`,
    spe: [1, 2, 0, 4],
    weapons: ['Magie D'],
    img: `/DungeonOfAsun/Assets/classes/illutioniste.png`,
    
    spell: ['Illusion'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Drakomancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/Drakomancien.png`,
    
    weapons: ['Magie D'],
    spell: ['Foudre'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Mage de Sang`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/necromancer.webp`,
    
    weapons: ['Magie D'],
    spell: ['Miasme'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Necromancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/necromancer.webp`,
    
    weapons: ['Magie D'],
    spell: ['Miasme'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Chaman`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/chaman.webp`,
    
    weapons: ['Magie D'],
    spell: ['Force Bestial'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Alchimiste`,
    spe: [1, 3, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/alchimiste.png`,
    
    weapons: ['Magie D'],
    spell: ['Transmutation Mineur'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Prêtre`,
    spe: [1, 3, 0, 4],
    img: `/DungeonOfAsun/Assets/classes/Clerc.webp`,
    weapons: ['Magie C'],
    spell: ['Soin', 'Lumière'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Croisé`,
    img: `/DungeonOfAsun/Assets/classes/Croise.png`,
  },
  {
    name: `Chevalier Noir`,
    img: `/DungeonOfAsun/Assets/classes/dark-knight.png`,
  },
  {
    name: `Chevalier`,
    img: `/DungeonOfAsun/Assets/classes/Noble.png`,
  },
  {
    name: `Combattant d'élite`,
    img: `/DungeonOfAsun/Assets/classes/combattant.webp`,
  },
  {
    name: `Aventurier Exp.`,
    img: `/DungeonOfAsun/Assets/classes/Aventurier.webp`,
  },
];
export const masterClasses = [
  {
    name: `Maître Epéiste`,
    img: `/DungeonOfAsun/Assets/classes/bretteur.webp`,
  },
  {
    name: `Berserker`,
    img: `/DungeonOfAsun/Assets/classes/Warrior.png`,
  },
  {
    name: `Maître Archer`,
    img: `/DungeonOfAsun/Assets/classes/Archer.png`,
  },
  {
    name: `Grand Spadassin`,
    img: `/DungeonOfAsun/Assets/classes/spadassin.png`,
  },{
    name: `Maître Assassin`,
    img: `/DungeonOfAsun/Assets/classes/thief.png`,
  },
  {
    name: `Grand Lancier`,
    img: `/DungeonOfAsun/Assets/classes/lancier.webp`,
  },
  {
    name: `Grand Moine`,
    img: `/DungeonOfAsun/Assets/classes/monk.webp`,
  },
  {
    name: `Maître Pyromancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/pyromancer.webp`,
    spell: ['Feu'],
    weapons: ['Magie D'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Maître Cryomancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/cryomancer.png`,
    weapons: ['Magie D'],
    spell: ['Glacier'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Maître Zephyr`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/Zephyr.png`,
    
    weapons: ['Magie D'],
    spell: ['Vent'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Maître Mage Gris`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/grey-mage.png`,
    weapons: ['Magie D'],
    spell: ['Poison'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Grand Druide`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/druid.webp`,
    weapons: ['Magie C'],
    spell: ['Plante', 'Terre'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Maître Illutionniste`,
    spe: [1, 2, 0, 4],
    weapons: ['Magie D'],
    img: `/DungeonOfAsun/Assets/classes/illutioniste.png`,
    
    spell: ['Illusion'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Maître Drakomancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/Drakomancien.png`,
    
    weapons: ['Magie D'],
    spell: ['Foudre'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Maître de Sang`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/necromancer.webp`,
    
    weapons: ['Magie D'],
    spell: ['Miasme'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Maître Necromancien`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/necromancer.webp`,
    
    weapons: ['Magie D'],
    spell: ['Miasme'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Grand Chaman`,
    spe: [1, 4, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/chaman.webp`,
    
    weapons: ['Magie D'],
    spell: ['Force Bestial'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Maître Alchimiste`,
    spe: [1, 3, 0, 2],
    img: `/DungeonOfAsun/Assets/classes/alchimiste.png`,
    
    weapons: ['Magie D'],
    spell: ['Transmutation Mineur'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Evêque`,
    spe: [1, 3, 0, 4],
    img: `/DungeonOfAsun/Assets/classes/Clerc.webp`,
    weapons: ['Magie C'],
    spell: ['Soin', 'Lumière'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Elementaliste`,
    spe: [1, 3, 0, 4],
    img: `/DungeonOfAsun/Assets/classes/enchanter.png`,
    weapons: ['Magie S+'],
    spell: ['Soin', 'Lumière'],
    mastery: ['Gain de 5 pts en mental permanent']
  },
  {
    name: `Grand Croisé`,
    img: `/DungeonOfAsun/Assets/classes/Croise.png`,
  },
  {
    name: `Chevalier du Néant`,
    img: `/DungeonOfAsun/Assets/classes/dark-knight.png`,
  },
  {
    name: `Grand Chevalier`,
    img: `/DungeonOfAsun/Assets/classes/Noble.png`,
  },
  {
    name: `Brise'Os`,
    img: `/DungeonOfAsun/Assets/classes/combattant.webp`,
  },
  {
    name: `Grand Aventurier`,
    img: `/DungeonOfAsun/Assets/classes/Aventurier.webp`,
  },
];