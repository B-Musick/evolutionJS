<template>
  <div class="home">
    <FileInput />
  </div>
</template>

<script>
// @ is an alias to /src
import FileInput from '@/components/sections/FileInput.vue'

export default {
  name: 'HomeView',
  components: {
    FileInput
  }
}
</script>
