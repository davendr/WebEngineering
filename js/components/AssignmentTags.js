export default {
  template: `
    <div class="flex gap-2">    <!-- Update needs to be set to work to notify the parent!-->
    <button @click="$emit('update:modelTag', tag)"
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs"
            :class="{ <!-- this :class can use the tags!! -->
              'border-blue-500 text-blue-500' : tag == modelTag}"> 
            {{ tag }} 
    </button>
  </div>
  `,

  props: {
    initialTags: Array,
    //default prop name for using v-model on a custom component AssignmentList
    modelTag: String,
  },

  computed: {
    tags() {
      //  map() filters by creating a map of data
      return ["all", ...new Set(this.initialTags)];
      //  new Set is a way to create a set of items where each item is unique
    },
  },
};
