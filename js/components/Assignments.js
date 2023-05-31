import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  // thats how he call up the AssignmentList.js, + the us of it at the template below

  template: `

  <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    <!--    (shortcut: @add) This will search at ASsignmentCreate for new Assignments -->
    <assignment-create v-on:add='add'></assignment-create>
  </section>
    `,

  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1, tag: "math" },
        { name: "Read chapter 4 ", complete: false, id: 2, tag: "science" },
        { name: "Turn in homework", complete: false, id: 3, tag: "math" },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => assignment.complete
        ),
        completed: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
      };
    },
  },

  methods: {
    // the parent communicates through props. So it takes the data through the probs from AssignmentCreate and pushes it into the List.
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
