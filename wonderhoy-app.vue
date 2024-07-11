<script setup>

import { reactive, ref } from 'vue'

const message = ref('test')
const counter = reactive({ count: 0 })

const redClass = ref('dynamicId')

function increment() {
  counter.count++;
}

</script>


<template>

  <div>
    {{ message }}
  </div>

  <div v-bind:id=redClass>
    red text    
  </div>

  <div :id=redClass>
    red text but using v-bind shorthand 
  </div>

  <hr>

  <div>
    <button @click="increment">click me to increase count</button>
  </div>

  <p>count is {{ counter.count }}</p>


</template>



<style>

#dynamicId {
  color: red;
  
}

</style>