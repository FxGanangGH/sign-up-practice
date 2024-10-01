<template>
  <div
    class="flex size-full min-h-screen flex-col items-center justify-center bg-primary-red bg-mobile px-8 py-20 lg:bg-desktop"
  >
    <div
      class="flex size-full flex-col items-center justify-center lg:w-11/12 lg:max-w-screen-lg lg:flex-row"
    >
      <header
        class="relative flex w-full flex-col items-center justify-center gap-y-5 overflow-hidden md:gap-y-10 lg:items-start"
      >
        <h1
          class="text-center font-poppins text-2xl font-bold text-white md:text-4xl xl:text-5xl"
        >
          Learn to code by <br />
          watching others
        </h1>
        <p
          class="max-w-md text-center font-poppins text-white md:text-lg lg:w-11/12 lg:text-left lg:text-lg xl:w-full"
        >
          See how experienced developers solve problems in real-time. Watching scripted
          tutorials is great, but understanding how developers think is invaluable.
        </p>
      </header>
      <main
        class="mt-16 flex w-full max-w-md flex-col items-center gap-y-8 md:mt-14 xl:max-w-screen-md"
      >
        <div class="flex w-full items-center overflow-hidden rounded-xl">
          <span
            class="mb-2 flex w-full flex-col items-center justify-center rounded-xl bg-accent-blue py-5 text-center font-poppins font-light text-white drop-shadow-2xl md:text-lg xl:flex-row xl:gap-x-1"
          >
            <span>
              <span class="font-semibold">Try it free 7 days </span>
              then
            </span>
            <span> $20/mo. thereafter </span>
          </span>
        </div>
        <div class="relative flex w-full items-center overflow-hidden rounded-xl">
          <div class="absolute top-0 z-0 size-full bg-black/10"></div>
          <div
            class="z-10 mb-2 flex w-full flex-col items-center gap-y-4 rounded-xl bg-white px-5 pb-8 pt-5 lg:px-8 lg:pb-10 lg:pt-8"
          >
            <div class="flex w-full flex-col items-end">
              <div
                class="relative flex w-full items-center rounded-lg border-2 border-black/20 py-3"
                :class="{ 'border-primary-red': emptyFirstName }"
              >
                <input
                  type="text"
                  v-model="firstName"
                  placeholder="First Name"
                  class="w-5/6 px-5 font-medium focus:outline-none"
                  name="First Name"
                />
                <img
                  v-if="emptyFirstName"
                  alt="error"
                  class="ml-1 xl:ml-5"
                  src="/images/icon-error.svg"
                />
              </div>
              <span
                v-if="emptyFirstName"
                class="mr-1 font-poppins text-xs font-medium italic text-primary-red"
              >
                First Name cannot be empty
              </span>
            </div>
            <div class="flex w-full flex-col items-end">
              <div
                class="relative flex w-full items-center rounded-lg border-2 border-black/20 py-3"
                :class="{ 'border-primary-red': emptyLastName }"
              >
                <input
                  placeholder="Last Name"
                  type="text"
                  v-model="lastName"
                  class="w-5/6 px-5 font-medium focus:outline-none"
                />
                <img
                  v-if="emptyLastName"
                  alt="error"
                  class="ml-1 xl:ml-5"
                  src="/images/icon-error.svg"
                />
              </div>
              <span
                v-if="emptyLastName"
                class="mr-1 font-poppins text-xs font-medium italic text-primary-red"
              >
                Last Name cannot be empty
              </span>
            </div>
            <div class="flex w-full flex-col items-end">
              <div
                class="relative flex w-full items-center rounded-lg border-2 border-black/20 py-3"
                :class="{ 'border-primary-red': invalidEmail }"
              >
                <input
                  placeholder="Email Address"
                  type="email"
                  v-model="email"
                  class="w-5/6 px-5 font-medium focus:outline-none"
                />
                <img
                  v-if="invalidEmail"
                  alt="error"
                  class="ml-1 xl:ml-5"
                  src="/images/icon-error.svg"
                />
              </div>
              <span
                v-if="invalidEmail"
                class="mr-1 font-poppins text-xs font-medium italic text-primary-red"
              >
                Looks like this is not an email
              </span>
            </div>
            <div class="flex w-full flex-col items-end">
              <div
                class="relative flex w-full items-center rounded-lg border-2 border-black/20 py-3"
                :class="{ 'border-primary-red': emptyPassword }"
              >
                <input
                  placeholder="Password"
                  type="password"
                  v-model="password"
                  class="w-5/6 px-5 font-medium focus:outline-none"
                />
                <img
                  v-if="emptyPassword"
                  alt="error"
                  class="ml-1 xl:ml-5"
                  src="/images/icon-error.svg"
                />
              </div>
              <span
                v-if="emptyPassword"
                class="mr-1 font-poppins text-xs font-medium italic text-primary-red"
              >
                Password cannot be empty
              </span>
            </div>
            <div class="relative w-full hover:opacity-80">
              <input
                @click="handleSubmit"
                type="submit"
                value="claim your free trial"
                class="relative z-10 w-full rounded-lg bg-primary-green py-4 font-poppins font-medium uppercase tracking-wide text-white md:text-lg"
              />
              <div
                class="absolute top-0 z-0 size-full translate-y-1 rounded-lg bg-green-600"
              ></div>
            </div>
            <span
              class="flex flex-col items-center text-center font-poppins text-xs font-medium text-neutral-dark-blue/50 xl:flex-row"
            >
              <span>By clicking the button, you are agreeing to</span>
              <span class="xl:ml-1">
                our
                <span class="font-bold text-primary-red">Terms and Services</span></span
              >
            </span>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Ref variables to store the email input and the validation error
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const invalidEmail = ref(false);
const emptyFirstName = ref(false);
const emptyLastName = ref(false);
const emptyPassword = ref(false);
const currentWidth = ref(window.innerWidth);

const validateData = () => {
  if (firstName.value === "" || firstName.value === " ") {
    emptyFirstName.value = true;
  } else {
    emptyFirstName.value = false;
  }
  if (lastName.value === "" || lastName.value === " ") {
    emptyLastName.value = true;
  } else {
    emptyLastName.value = false;
  }
  if (password.value === "" || password.value === " ") {
    emptyPassword.value = true;
  } else {
    emptyPassword.value = false;
  }
  validateEmail();
};

// Function to validate the email format
const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    invalidEmail.value = true;
  } else {
    invalidEmail.value = false;
  }
};

// Function to handle button click
const handleSubmit = () => {
  validateData();
};

const updateScreen = () => {
  currentWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreen);
});
</script>
