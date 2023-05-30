import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  // thats how he call up the AssignmentList.js, + the us of it at the template below

  template: `

  <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

<!-- submit.prevent prevents the website to refresh when submit is hit -->

    <form @submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" placeholder="New assignment.." class="p-2" />
        <button type="submit" class="bg-white p-2 border-l">Add</ Button>
      </div>
    </form>
  </section>
    `,

  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter 4 ", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
      ],

      newAssignment: [],
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
    add() {
      //this e method would do the same as submit.prevent
      //add(e) {} above

      //e.preventDefault();

      //alert(this.newAssignment);

      //adding new assignments
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length,
      });

      this.newAssignment = "";
    },
  },
};
