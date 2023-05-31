export default {
  template: `
    <!-- submit.prevent prevents the website to refresh when submit is hit -->

    <form @submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" placeholder="New assignment.." class="p-2" />
        <button type="submit" class="bg-white p-2 border-l">Add</ Button>
      </div>
    </form>
    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      // tells the parent, heyy I have a new Assignment and Assignments.js (as a parent) can look for it
      this.$emit("add", this.newAssignment);

      this.newAssignment = "";
    },
  },
};
