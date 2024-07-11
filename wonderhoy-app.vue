<script setup>

import { reactive, ref, computed } from 'vue'

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

const showHeading = computed(() => text.value === 'open sesame')

</script>


<template>

  <div>
    {{ message }}
  </div>

  <div v-bind:id=redClass>red text shown using "v-bind:id" in full </div>
  <div :id=redClass>red text but using ":id" shorthand</div>

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

  <hr>

  <p>the heading below will only show if input box contains "open sesame"</p>
  <h1 v-if="showHeading">woah! you found the secret</h1>
  <h1 v-else>nothing to see here</h1>
  
</template>



<style>

#dynamicId {
  color: red;
  
}

</style>