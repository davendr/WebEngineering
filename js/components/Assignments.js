import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  // thats how he call up the AssignmentList.js, + the us of it at the template below

  template: `

  <section class="flex gap-8">
    <assignment-list 
    :assignments="filters.inProgress" 
    title="In Progress">
    <assignment-create @add='add'></assignment-create>
    </assignment-list>

    <!-- Only show this component if showCompleted is completed -->
    <div v-show="showCompleted">
    <assignment-list 
    :assignments="filters.completed" 
    title="Completed" 
    can-toggle
    @toggle="showCompleted = !showCompleted">
    </assignment-list>
    </div>
  </section>
    `,

  data() {
    return {
      assignments: [],
      showCompleted: true,
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  created() {
    //  here is where we use the database data to fill it into the html / props
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
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
