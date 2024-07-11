<script setup>

import { reactive, ref } from 'vue'

// note:
// ref is used when defining primitive obeject, 
// ref is limited to .value property

// reactive is best for objects with multiple properties




const message = ref('test')
const counter = reactive({ count: 0, message: 'ball' })

const redClass = ref('dynamicId')

function increment() {
  counter.count++;
}

const text = ref('')


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

  <hr>
  <input v-model="text" placeholder="Type here">
  <!-- v-model automatically syncs input value with the bound state -->
  <!-- v-model works for other input types as well -->
  <p>{{ text }}</p>



</template>



<style>

#dynamicId {
  color: red;
  
}

</style>