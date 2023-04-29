<template>
  <div class="w-50 mx-auto mt-8">
    <img src="/images/vee-validate.png" alt="vee validate picture" class="v-img w-100 mb-4">
    <h1 class="text-h3 text-uppercase text-center">validation</h1>
    <p class="mt-8 text-center">
      front-end validation in forms is able to highlight wrong user input and disable the input button. This is useful to give the user some immediate feedback when entering values in the form
    </p>

    <div class="d-flex mt-8 justify-center">
      <!----------vuetify button------------>
      <RouterLink to="vuetify">
        <v-btn class="text-uppercase mx-4"
               color="dark-blue"
        >
          Vuetify
        </v-btn>
      </RouterLink>
      <!---------common button------------>
      <RouterLink to="common">
        <v-btn class="text-uppercase mx-4"
               color="green"
        >
          Common
        </v-btn>
      </RouterLink>

    </div>
  </div>

</template>

<script setup>

</script>

