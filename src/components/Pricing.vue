<script>
export default {
    data() {
        return {
            count: 0,
            msg: "Count on click button",
            rawHtml: " <span>Message</span>",
        }
    }
}

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <span>Message: {{ msg }}</span>
                    </div>
                    <div class="card-body">

                        <button @mouseover="count++">
                            Count is: {{ count }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <span>Show Row html and only text</span>
                    </div>
                    <div class="card-body">

                        <p>Using text interpolation: {{ rawHtml }}</p>
                        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <span>Message: {{ msg }}</span>
                    </div>
                    <div class="card-body">

                        <button :id="count" @click="count++">
                            Count is: {{ count }}
                        </button>
                        <button :disabled="isButtonDisabled">Button</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="card">
                <div class="card-header">New user entry form</div>
                <div class="card-body">
                    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> 
                </div>
            </div>
        </div>

    </div>
</template>
<style></style>