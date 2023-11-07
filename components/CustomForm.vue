<template>
  <form ref="form">
    <slot name="default" />
  </form>
</template>

<script>
export default {
  mounted () {
    this.$refs.form.validate = this.validate
    this.$refs.form.reset = this.reset
  },
  methods: {
    validate () {
      let response
      for (const i in this.$refs.form) {
        if (this.$refs.form[i] && this.$refs.form[i].mapRules) {
          const out = this.$refs.form[i].mapRules()
          if (out) {
            response = out
          }
        }
      }
      return !response
    },
    reset () {
      for (const i in this.$refs.form) {
        if (this.$refs.form[i] && this.$refs.form[i].resetInput) {
          this.$refs.form[i].resetInput()
        }
      }
    }
  }
}
</script>
