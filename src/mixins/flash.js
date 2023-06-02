// it will be mixed in with the single vue components.
// so i can develop global functions here
import swal from 'sweetalert'

export default {
  methods: {
    flash(message) {
      // title, message & level
      swal('Success', message, 'success')
    }
  }
}
