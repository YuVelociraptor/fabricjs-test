<script setup lang="ts">
import { onMounted, ref } from 'vue'

import * as fabric from "fabric"

let fabric0 = null
let fabric1 = null
const canvas0 = ref(null)
const canvas1 = ref(null)

onMounted(async () => {

  fabric0 = new fabric.Canvas(canvas0.value)
  fabric1 = new fabric.Canvas(canvas1.value)

  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 50,
    height: 50,
  })
  fabric0.add(rect)

  const rect2 = new fabric.Rect({
    left: 150,
    top: 150,
    fill: 'green',
    width: 50,
    height: 50,
  })
  fabric1.add(rect2)

})
</script>

<template>
  <div id="canvas-container" class="layer-wrap" style="position: relative; width: 500px; height: 500px;">
    <canvas id="canvas0" ref="canvas0" width="500" height="500" style="position: absolute; left: 0; top: 0; z-index: 1;"></canvas>
    <canvas id="canvas1" ref="canvas1" width="500" height="500" style="position: absolute; left: 0; top: 0; z-index: 2;"></canvas>
  </div>
</template>

<style scoped>

</style>