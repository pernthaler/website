<i18n>
{
  "en": {
    "subtitle": "This website is not in its final state and is constantly being improved."
  },
  "de": {
    "subtitle": "Diese Website ist nicht im finalen Zustand und wird stetig verbessert."
  }
}
</i18n>

<template>
  <div>
    <h1>Sebastian Pernthaler</h1>
    <p>{{ $t("subtitle") }}</p>
    <div id="three"/>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  created() {
    this.$store.commit("SET_TITLE", "");
  },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cube: null
    };
  },
  methods: {
    init: function() {
      const div = document.getElementById("three");

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, div.clientWidth / div.clientHeight, 0.1, 1000);

      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize(div.clientWidth, div.clientHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      div.appendChild(this.renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);

      this.camera.position.z = 5;
    },
    animate: function() {
      requestAnimationFrame(this.animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
}
</script>

<style lang="less" scoped>
#three {
  width: 500px;
  height: 500px;
}
</style>