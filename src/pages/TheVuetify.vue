<template>
  <div class="pa-8 rounded-xl main-box w-50 mx-auto mt-8">

    <img src="public/images/vuetify-logo-v3-slim-text-light.svg" class="v-img w-100" alt="vuetify logo">

    <Form as="v-form" @submit="onSubmit" :validation-schema="schema" >
<!--      name field-->
      <Field name="name" v-slot="{ field, errors }">
        <v-text-field v-bind="field" label="Name" class="my-4" :error-messages="errors" />
      </Field>
<!--      email field-->
      <Field name="email" v-slot="{ field, errors, name }">
        <v-text-field v-bind="field" label="Email" class="my-4" :error-messages="errors" />
      </Field>
<!--      password field-->
      <Field name="password" v-slot="{ field, errors, name }">
        <v-text-field v-bind="field" label="Password" class="my-4" :error-messages="errors" type="password" />
      </Field>
<!--checkbox-->
      <Field
          name="terms"
          :value="true"
          type="checkbox"
          v-slot="{ value, handleChange, errors }"
      >
        <v-checkbox
            :model-value="value"
            @update:modelValue="handleChange"
            label="Do you agree?"
            color="primary"
            class="mb-4"
            :error-messages="errors"
        />
      </Field>

    <v-btn type="submit" class="w-100"
           color="blue"
    >Submit
    </v-btn>
    <RouterLink to="/">
      <v-btn color="black" class="text-uppercase mt-4 w-100">back</v-btn>
    </RouterLink>
    </Form>

    <div class="w-100 rounded-lg text-center bg-green mt-8 pa-4" v-if="flag">
      You Validate the Form Correctly!
    </div>

  </div>

</template>

<script setup>

import * as yup from "yup";
import { Field, Form } from 'vee-validate';
import {ref} from "vue";

const schema = yup.object({
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().min(6).required(),
  terms: yup
      .boolean()
      .required()
      .oneOf([true], 'You must agree to terms and conditions'),
});

const flag = ref(false);
function onSubmit(values) {
  flag.value = true;
}

</script>

<style scoped>

</style>