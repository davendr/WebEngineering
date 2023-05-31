export default {
  template: `
    <div class="flex gap-2">
    <button @click="$emit('change', tag)"
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs"
            :class="{ <!-- this :class can use the tags!! -->
              'border-blue-500 text-blue-500' : tag == currentTag}"> 
            {{ tag }} 
    </button>
  </div>
  `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      //  map() filters by creating a map of data
      return ["all", ...new Set(this.initialTags)];
      //  new Set is a way to create a set of items where each item is unique
    },
  },
};
