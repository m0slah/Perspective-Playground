let vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rorateZ: 0,
    };
  },
  methods: {
    Reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rorateZ = 0;
    },
  },
  computed: {
    box() {
      return {
        transform: `perspective(${this.perspective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rorateZ}deg)
          `,
      };
    },
  },
}).mount("#app");
