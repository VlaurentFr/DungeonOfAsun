<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <aside>
      <ul>
        <li>
          <a href="#intro">Introduction</a>
          <ul>
            <li><a href="#intro_objectif">Objectif</a></li>
            <li><a href="#intro_pour-qui">Pour qui ?</a></li>
          </ul>
          <a href="#global">Aperçu Global</a>
          <ul>
            <li><a href="#global_description">Description</a></li>
            <li><a href="#global_base">Principes de base</a></li>
          </ul>
          <a href="#armes-et-comp">Armes & Compétences de base</a>
          <ul>
            <li><a href="#armes-et-comp_types">Types d'armes disponibles</a></li>
            <li><a href="#armes-et-comp_complement">Compléments</a></li>
          </ul>
        </li>
      </ul>
    </aside>
    <div class="wrapper">
      <section id="intro">
        <h2>Introduction</h2>
        <h3 id="intro_objectif">Objectif</h3>
        <p>
          Ce document présente le système de maîtrise d’armes de notre jeu de rôle "DungeonsOfAsun".
          Le système permet aux personnages d'accéder à des classes spécifiques dans l'utilisation
          d'armes, influençant leurs performances en combat et offrant des options stratégiques
          variées.
        </p>
        <h3 id="intro_pour-qui">Pour qui ?</h3>
        <p>
          Ce guide est destiné aux joueurs et maîtres de jeu (MJ) pour faciliter l'intégration et la
          compréhension du système de maîtrise d'armes dans les campagnes de jeu.
        </p>
      </section>
      <section id="global">
        <h2>Aperçu Global</h2>
        <h3 id="global_description">Description</h3>
        <p>
          Le système de maîtrise d’armes divise les armes en plusieurs catégories telles que les
          armes tranchantes, contondantes, perforantes, chacune avec ses propres bonus. La maîtrise
          d’une arme est mesurée en rang, chaque rang offrant de nouvelles améliorations de
          personnage. Les personnages peuvent progresser en maîtrisant leurs armes par
          l'entraînement, l'expérience de combat et l'apprentissage auprès de mentors
        </p>
        <h3 id="global_base">Principes de base :</h3>
        <ul>
          <li>
            <span>Rang de maîtrise :</span> Les personnages peuvent améliorer leur maîtrise d'une
            arme à travers plusieurs rangs, chaque rangs offrant des bonus spécifiques.
          </li>
          <li>
            <span>Bonus d’armes :</span> Des bonus deviennent disponibles à des rangs de maîtrise,
            modifiant les statistiques du personnages tel que ces dégâts, tout en lui offrant la
            possibilité de se spécialiser vers une classe du jeu.
          </li>
        </ul>
      </section>
      <section id="armes-et-comp">
        <h2>Armes & Compétences de base</h2>
        <h3 id="armes-et-comp_types">Types d’armes disponibles :</h3>
        <h4>Tableau des armes</h4>
        <table>
          <thead>
            <th>Armes</th>
            <th>Catégorie</th>
            <th>Description</th>
            <th>Basé sur</th>
          </thead>
          <tbody>
            <tr>
              <td>Epée</td>
              <td>Tranchant</td>
              <td>
                Les épées offrent un bon équilibre entre portée et puissance. Idéales pour les
                combats rapprochés, elles permettent à leur utilisateur de parer et d'attaquer avec
                efficacité
              </td>
              <td>FOR</td>
            </tr>
            <tr>
              <td>Hache</td>
              <td>Tranchant</td>
              <td>
                Conçue pour infliger des coups puissants, la hache est une arme brutale, capable de
                briser les défenses et de couper à travers les armures
              </td>
              <td>FOR</td>
            </tr>
            <tr>
              <td>Masse</td>
              <td>Contondant</td>
              <td>
                Arme lourde et imposante, la masse est parfaite pour écraser les os et les armures.
                Sa force d'impact peut étourdir ou briser la concentration d’un adversaire
              </td>
              <td>FOR</td>
            </tr>
            <tr>
              <td>Poing</td>
              <td>Contondant</td>
              <td>
                Les armes poings sont l'arme ultime pour le combat au corps à corps direct. Utilisés
                par les guerriers, ils offrent une vitesse inégalée et permettent des enchaînements
                rapides. Un utilisateur expert peut exploiter la rapidité et la précision des coups
                pour neutraliser ses adversaires
              </td>
              <td>FOR/DEX</td>
            </tr>
            <tr>
              <td>Bouclier</td>
              <td>Défensif</td>
              <td>
                Le bouclier est l’arme défensive par excellence, offrant une protection accrue
                contre les attaques ennemies. Utilisé en combinaison avec d'autres armes, il permet
                de parer les coups
              </td>
              <td>FOR</td>
            </tr>
            <tr>
              <td>Arc</td>
              <td>Perforant</td>
              <td>
                L’arc est l'arme de prédilection des archers, combinant vitesse et précision. Avec
                une portée considérable, il permet d'attaquer à distance avec des flèches perçantes
              </td>
              <td>DEX</td>
            </tr>
            <tr>
              <td>Arbalète</td>
              <td>Perforant</td>
              <td>
                L'arbalète est une arme de tir précise et puissante, capable de tirer des carreaux à
                haute vitesse. Elle demande plus de temps pour être rechargée que l'arc, mais chaque
                tir est plus perforant
              </td>
              <td>DEX</td>
            </tr>
            <tr>
              <td>Lance</td>
              <td>Perforant</td>
              <td>
                La lance offre une excellente portée, permettant à son porteur de garder ses
                adversaires à distance. Elle est idéale pour les combats en ligne, tout en pouvant
                être lancée pour des attaques à distance
              </td>
              <td>DEX</td>
            </tr>
            <tr>
              <td>Dague</td>
              <td>Tranchant</td>
              <td>
                Légère et rapide, la dague est une arme discrète et mortelle, parfaite pour les
                attaques sournoises ou les combats rapides. Elle permet des attaques rapides et
                précises, mais manque de portée et de puissance brute
              </td>
              <td>DEX</td>
            </tr>
          </tbody>
        </table>
        <h3 id="armes-et-comp_complement">Compléments</h3>
        <p>
          Les dégâts et jet de réussite d’attaque sont basés sur une statistique en fonction de la
          catégorie de l’arme. Les armes de combat plus brutales comme la plupart des armes
          tranchantes, contondantes dépendent de la force du personnage tandis que les armes plus
          techniques et rapides sont basées sur la dextérité du personnage.
        </p>
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  position: relative;
  overflow: scroll;
  height: 100vh;
}

aside {
  position: sticky;
  width: 320px;
  top: 0;
}
.wrapper {
  max-width: 60ch;
}
.wrapper section {
  margin-bottom: 40px;
}
.wrapper section h2 {
  margin-bottom: 20px;
}
.wrapper section h3 {
  margin-bottom: 10px;
}
.wrapper section h4 {
  text-align: center;
  background-color: green;
  width: 100%;
  color: black;
  margin: 0;
  font-weight: bold;
}

/*************
    TABLE
**************/
.wrapper section table {
  border-collapse: collapse;
}
/*************
    TABLE HEAD
**************/
.wrapper section table thead {
  text-align: left;
  background-color: grey;
  color: black;
  border-collapse: collapse;
  border-bottom: solid white 1px;
  border-top: solid white 1px;
}
.wrapper section table thead th {
  border-collapse: collapse;
  border: solid white 1px;
  padding: 0px 10px;
  font-weight: bold;
}
.wrapper section table thead th:last-child {
  border-collapse: collapse;
  border-right: none;
}
.wrapper section table thead th:first-child {
  border-collapse: collapse;
  border-left: none;
}
/*************
    TABLE ROW
**************/
.wrapper section table tr {
  border-collapse: collapse;
  border-bottom: solid white 1px;
}
.wrapper section table tr td {
  border-collapse: collapse;
  border: solid white 1px;
  padding: 0px 10px;
}
.wrapper section table tr td:last-child {
  border-collapse: collapse;
  border-right: none;
}
.wrapper section table tr td:first-child {
  border-collapse: collapse;
  border-left: none;
}
</style>
