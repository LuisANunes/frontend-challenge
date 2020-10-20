<template>
  <header>
    <div class="container">
      <h1>Transcriptions</h1>
      <div class="header-actions">
        <button>Upload data</button>
        <button>Get Data</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
}

.container {
  width: 960px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

h1 {
  margin: 0;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  color: #414c5e;
}
</style>
