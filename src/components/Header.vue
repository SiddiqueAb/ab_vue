
<script>

</script>
<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <router-link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap" />
        </svg>
        <span class="fs-4">AB SIDDIQUE</span>
      </router-link>


      <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="/" class="nav-link active">Home</router-link></li>
        <li class="nav-item"> <router-link to="/education" class="nav-link">Education</router-link></li>
        <li class="nav-item"><router-link to="/pricing" class="nav-link">Pricing</router-link></li>
        <li class="nav-item"><router-link to="/faq" class="nav-link">FAQs</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
      </ul>
    </header>
  </div>
  
</template>
<style>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}</style>