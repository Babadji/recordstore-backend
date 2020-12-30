<template>
  <div class="max-w-sm m-auto my-8">
    <div class="border p-10 border-grey-light shadow rounded">
      <h3 class="text-2xl mb-6 text-grey-darkest">Sign Up</h3>
      <form @submit.prevent="signup">
        <div class="text-red-500" v-if="error">{{ error }}</div>

        <div class="mb-6">
          <label for="email" class="label">E-mail Address</label><br>
          <input type="email" v-model="email" class="input w-full bg-gray-200 px-4 py-3 mt-2 rounded outline-none focus:outline-none" id="email" placeholder="jean@valjean.com">
        </div>

        <div class="mb-6">
          <label for="password" class="label">Password</label><br>
          <input type="password" v-model="password" class="input w-full bg-gray-200 px-4 py-3 mt-2 rounded outline-none focus:outline-none" id="password" placeholder="Password">
        </div>

        <div class="mb-6">
          <label for="password_confirmation" class="label">Password Confirmation</label><br>
          <input type="password" v-model="password_confirmation" class="input w-full bg-gray-200 py-3 px-4 mt-2 rounded outline-none focus:outline-none" id="password_confirmation" placeholder="Password Confirmation">
        </div>
        <button type="submit" class="font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green-500 hover:bg-green-400 block w-full py-4 text-white items-center justify-center outline-none focus:outline-none">Sign Up</button>

        <div class="my-4"><router-link to="/" class="text-indigo-500">Sign In</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      error: ''
    }
  },
  created () {
    this.checkedSignedIn()
  },
  updated () {
    this.checkedSignedIn()
  },
  methods: {
    signup () {
      this.$http.plain.post('/signup', { email: this.email, password: this.password, password_confirmation: this.password_confirmation })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error))
    },
    signupSuccessful (response) {
      if (!response.data.csrf) {
        this.signupFailed(response)
        return
      }

      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/records')
    },
    signupFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || 'Something went wrong'
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkedSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/records')
      }
    }
  }
}
</script>
