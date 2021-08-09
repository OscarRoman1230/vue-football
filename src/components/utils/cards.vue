<template>
  <div class="mx-auto container">
    <div class="card">
      <div class="card-header">
        <img :src="match.thumbnail" alt="rover" />
      </div>
      <div class="card-body">
        <h3>
          {{match.title}}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cards",
  props: {
    match: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 1040px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 15px;
  border: solid 1px #dedede;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 150px;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
</style>
