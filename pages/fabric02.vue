<script setup lang="ts">
import { onMounted, ref } from 'vue'

import * as fabric from "fabric"

let canvas1 = null
let canvas2 = null
const cvs1 = ref(null)
const cvs2 = ref(null)

onMounted(async () => {
  canvas1 = new fabric.Canvas(cvs1.value)
  canvas2 = new fabric.Canvas(cvs2.value)

  //レイヤー1
  const r = new fabric.Rect({
    left: 50,
    top: 50,
    fill: '#ffddff',
    width: 100,
    height: 100,
    angle: 0,
  })
  canvas1.add(r)

  canvas2.add(r)
})
</script>

<template>
  <div class="layer-wrap">
    <canvas id="cvs1" width="300" height="240"></canvas>
    <canvas id="cvs2" width="300" height="240"></canvas>
  </div>
</template>

<style scoped>
.layer-wrap {
  width: 300px;
  height: 240px;
  position: relative;
}
.layer-wrap > div.canvas-container   {
  position: absolute !important;
}
.layer-wrap > canvas {
  position: absolute !important;
}

#cvs1   {
  border-right: 20px solid orangered;
  border-left: 30px solid orangered;
}

#cvs2   {
  border-left: 20px solid royalblue;
}
</style>