import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
  components: { Assignment, AssignmentTags, Panel },

  template: `
<!--    I can Use my prefixed Panel like a section or any else!! -->  
    <Panel v-show="assignments.length" class="w-60">
    <div class="flex justify-between items-start">

      <h2 class="font-bold mb-2"> 
        {{ title }}
        <span>({{ assignments.length }})</span>
      </h2>

      <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
    </div>

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

    <slot></slot>

<!--    this is the same as v-slot -->
    <template #footer>
      my footer goes here
    </template>
  </panel>
    
    `,

  props: {
    assignments: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
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
