export default {
  template: `
    <li>
        <label class="p-2 flex justify-between items-center">
          {{ assignment.name }}
                                            <!--    ml-2 margin-left 2 -->
          <input type="checkbox" v-model="assignment.complete" class="ml-3" />
        </label>
      </li>
      `,

  props: {
    assignment: Object,
  },
};
