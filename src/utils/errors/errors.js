class Errors {
  constructor () {
    errors: {}
  }

  get (field) {
    if (this.errors[field]) {
      this.errors[field][0]
    }
  }

  record (errors) {
    this.errors = errors
  }
}
export default Errors
