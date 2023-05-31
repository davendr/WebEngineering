import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  //  this component object needs to be set first!
  components: { Assignments, Panel },

  template: `
    <div class="grid gap-6">
      <assignments></assignments>

      <!-- the panes are communicating to panel.js for their form and looks
      -- via the v-slot: -->

      <panel>
      <template v-slot:heading>
        This is my heading content.
      </template>

      <template v-slot:default>
        This is my default content.
      </template>

      <template v-slot:footer>
        This is my footer content.
      </template>
      </panel>

      <panel theme="light">
      <template v-slot:heading>
        This is my heading content.
      </template>

      <template v-slot:default>
        This is my default content.
      </template>
      </panel>

      

    </div>
  `,
};
