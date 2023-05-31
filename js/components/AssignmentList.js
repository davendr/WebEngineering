import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `
    <section v-show="assignments.length">

    <h2 class="font-bold mb-2"> 
      {{ title }}
      <span>({{ assignments.length }})</span></h2>

      <assignment-tags 
        v-model:modelTag="currentTag"
        :initialTags="assignments.map(a => a.tag)">
      </assignment-tags>

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
  },
};
