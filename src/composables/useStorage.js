import { ref, watch } from 'vue'
//            by default this is null, so you don't have to input it
export function useStorage(key, val = null) {
  let storedVal = read()

  if (storedVal) {
    val = ref(storedVal)
  } else {
    val = ref(val)

    write()
  }

  /*  watch(val, () => {
   *    write()
   *  })
   *             deep:true will work with bigger data. Better performance */
  watch(val, write, { deep: true })

  function read() {
    //    JSON.parse needs to be set cause of JSON.stringify
    return JSON.parse(localStorage.getItem(key))
  }

  function write() {
    if (val.value == null || val.value == '') {
      localStorage.removeItem(key)
      //            makes sure it is a string / will turn it into one
    } else localStorage.setItem(key, JSON.stringify(val.value))
  }

  return val
}
