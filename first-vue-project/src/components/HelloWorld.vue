<script setup>
import ExampleComponent from './ExampleComponent.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})

const heightValue = 300
const widthValue = 150
const exampleHtml = '<i>v-html directive example</i>'
const isVisible = false
const anotherCondition = true

const studentsArray = [
  {
    name: 'John Doe',
    age: 25
  },
  {
    name: 'Jane Doe',
    age: 23
  },
  {
    name: 'Jack Doe',
    age: 21
  }
]
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <img
      src="https://picsum.photos/200/300"
      alt="Vue logo"
      v-bind:height="heightValue"
      :width="widthValue"
    />
    <h2>{{ msg }}</h2>
    <h2 v-text="msg"></h2>
    <h3 v-html="exampleHtml"></h3>

    <i v-show="isVisible"
      >Burası 'isVisible' değişkeninin değeri true olduğu zaman görünecektir. Bu yapıyı 'v-show'
      directive'i ile oluşturduk</i
    >

    <i v-if="isVisible">Burası 'isVisible' değişkeni true olduğunda görünür</i>
    <i v-else-if="anotherCondition"
      >if bloğu false dönerse ve else-if bloğu true dönerse burası çalışır.</i
    >
    <i v-else>if bloğu ve else-if bloğu false dönerse burası 'else' bloğu çalışır</i>

    <hr />

    <ul>
      <li v-for="(student, i) in studentsArray" :key="i">
        <span>{{ student.name }} - <i v-text="student.age"></i></span>
      </li>
    </ul>

    <hr />

    <ExampleComponent exampleProp="My first prop" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

img {
  border-radius: 10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
