let vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rorateZ: 0,
    };
  },
  //   methods: {},
  computed: {
    box() {
      return {
        transform: `perspective(${this.perspective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)
          `,
      };
    },
  },
}).mount("#app");
