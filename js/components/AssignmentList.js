import Assignment from "./Assignment.js";

export default {
  components: { Assignment },

  template: `
    <section v-show="assignments.length">

    <h2 class="font-bold mb-2"> 
      {{ title }}
      <span>({{ assignments.length }})</span></h2>

      <div class="flex gap-2">
        <button @click="currentTag = tag"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class="{ <!-- this :class can use the tags!! -->
                  'border-blue-500 text-blue-500' : tag == currentTag}"> 
                {{ tag }} 
        </button>
      </div>


    <!--     this devide-y figures out what the borders of each assignment should be -->
    <ul class="border border-gray-600 divide-y divide-gray-600 mt-3">
      <assignment
        v-for="assignment in filteredAssignments"
        :key="assignment.id"
        :assignment="assignment"
        ></assignment>
    </ul>
  </section>
    
    `,

  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag == "all") {
        return this.assignments;
      }
      //where a = a.tag ist vergleichen zu currentTag
      return this.assignments.filter((a) => a.tag == this.currentTag);
    },
    tags() {
      //  map() filters by creating a map of data
      return ["all", ...new Set(this.assignments.map((a) => a.tag))];
      //  new Set is a way to create a set of items where each item is unique
    },
  },
};
