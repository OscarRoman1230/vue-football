<template>
  <section>
    <label for="competitionSelect">Competición:</label>
    <select name="competitionSelect" id="competitionSelect" v-model="league" @change="selectLeague">
      <option value="off" disabled selected>Seleccione una opcion</option>
      <option v-for="(item, index) in competition" :key="index" :value="item.competition.id">{{item.competition.name}}</option>
    </select>
    <br />
    <label for="teamSelect">Equipo:</label>
    <select name="teamSelect" id="teamSelect" v-model="team" @change="selectTeam">
      <option value="off" disabled selected>Seleccione una opcion</option>
      <option v-for="(item, index) in teams" :key="index" :value="item.team.name">{{item.team.name}}</option>
    </select>
    <matches-list :matches="matches" />
  </section>
</template>

<script>
import matchesList from "./matchesList"

export default {
  name: "home",
  components: {
    matchesList
  },
  data: () => ({
    matches: [],
    competition: [],
    league: 'off',
    teams: [],
    team: 'off'
  }),
  mounted() {
    this.getMatches()
  },
  methods: {
    getMatches () {
      this.$store.dispatch('getMatches').then(() => {
        let myMatches = this.$store.state.matches
        this.competition = myMatches.map((item) => {
          return {
            competition: item.competition
          }
        })
        this.teams = myMatches.map((item) => {
          return {
            team: item.side1
          }
        })
        myMatches = myMatches.sort(() => {
          return Math.random() - 0.5
        })
        myMatches.some((item, index) => {
          if (index !== 5) {
            this.matches.push(item)
          } else {
            return true
          }
        })
      })
    },
    selectLeague () {
      this.matches = []
      this.team = 'off'
      this.$store.dispatch('getMatches').then(() => {
        let myMatches = this.$store.state.matches
        this.matches = myMatches.filter((item) => item.competition.id === this.league)
      });
    },
    selectTeam () {
      this.matches = []
      this.league = 'off'
      this.$store.dispatch('getMatches').then(() => {
        let myMatches = this.$store.state.matches
        this.matches = myMatches.filter((item) => item.side1.name === this.team)
      });
    }
  }
}
</script>

<style scoped>
select {
  background: transparent;
  border-radius: 15px;
  border: solid 1px black;
  font-size: 14px;
  height: 30px;
  padding: 5px;
  margin: 0.5rem;
  width: 250px;
}
</style>
