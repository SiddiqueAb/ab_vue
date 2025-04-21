<template>
    <div class="container mt-5" style="max-width: 400px;">
      <h3 class="text-center mb-4">Login</h3>
      <div class="card p-4 shadow">
        <form @submit.prevent="loginUser">
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" v-model="email" class="form-control" placeholder="Enter email" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" v-model="password" class="form-control" placeholder="Enter password" required />
          </div>
          <button type="submit" class="btn btn-primary w-100" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
          <p class="text-danger mt-2" v-if="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "LoginPage",
    data() {
      return {
        email: '',
        password: '',
        loading: false,
        error: ''
      };
    },
    methods: {
      async loginUser() {
        this.loading = true;
        this.error = '';
  
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: this.email,
            password: this.password
          });
  
          // Save token in localStorage or cookie
          localStorage.setItem('api_token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
  
          // Redirect to dashboard
          this.$router.push('/dashboard');
        } catch (err) {
          this.error = 'Login failed. Please check your credentials.';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  