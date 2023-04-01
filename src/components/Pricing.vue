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


    </div>
</template>
<style></style>