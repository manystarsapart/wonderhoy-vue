<script setup>

import { reactive, ref } from 'vue'

const message = ref('test')
const counter = reactive({ count: 0 })

const redClass = ref('dynamicId')

</script>


<template>

  <div>
    {{ message }}
  </div>
  <p>count is {{ counter.count }}</p>

  <div v-bind:id=redClass>
    red text    
  </div>

  <div :id=redClass>
    red text but using v-bind shorthand 
  </div>

</template>



<style>

#dynamicId {
  color: red;
  
}

</style>