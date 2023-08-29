const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Ho completato l'esercizio",
      img: "./img/toman.jpg",
    };
  },
}).mount("#app");
