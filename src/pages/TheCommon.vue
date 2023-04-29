<template>

  <div class="w-50 mx-auto mt-8 pa-10 border rounded-xl">

    <Form @submit = "submitForm" :validation-schema="userSchema">
      <div>
        <Field type="text" placeholder="Enter your Fullname" class="custom-input my-4 w-100" name="fullname" />
        <transition>
          <ErrorMessage name="fullname" class="text-red" />
        </transition>
      </div>

      <div>
        <Field type="text" placeholder="Enter your Email" class="custom-input my-4 w-100" name="email" />
        <transition>
          <ErrorMessage name="email" class="text-red" />
        </transition>
      </div>

      <div>
        <Field type="password" placeholder="Enter your password" class="custom-input my-4 w-100" name="password" :rules="userSchema.password" />
        <transition>
          <ErrorMessage name="password" class="text-red" />
        </transition>
      </div>


      <v-btn color="green" class="mt-8 w-100" type="submit">SUBMIT</v-btn>
    </Form>

    <RouterLink to="/">
      <v-btn color="black" class="text-uppercase mt-4 w-100">back</v-btn>
    </RouterLink>

    <div class="pa-10 text-center bg-green mt-10 rounded-xl" v-if="submitFlag">
      congratssss !!
      <br>
      you validate the form Correctly
    </div>


  </div>

</template>

<script setup>
import {Form, Field, ErrorMessage} from "vee-validate";
import {reactive, ref} from "vue";
import * as Yup from "yup";




const submitFlag = ref(false)
const submitForm = (values) => {
  submitFlag.value = true
}

const userSchema = reactive({
  fullname : Yup.string().required("Fullname is required"),
  email : Yup.string().email("Your Email Format Is not Correct").required("Email is Required"),
  password: Yup.string().min(5).required(),
})

</script>

<style scoped>

.custom-input {
  width: 100%;
  padding: 10px;
  border-bottom: 4px solid white;
}
.custom-input:focus {
  outline: none !important;
}

select {
  width: 100%;
  color: white;
  background: inherit;
}
select option {
  background: black;
}
select:focus {
  background: green !important;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>