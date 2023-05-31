export default {
  template: `
    <!-- with the :class we use it as a function so we can build in
    -- different themes via an if-clause -->
        <div :class=" {
        'p-4 border rounded-lg': true,
        'bg-white border-gray-300 text-black': theme == 'light',
        'bg-gray-700 border-gray-600 text-white' : theme == 'dark'
    }">
<!--     If we have something for heading, only then render heading -->
            <h2 v-if="$slots.heading" class="font-bold mb-2" >
            <slot name="heading" />
            </h2>

            <slot name="default"/>
<!--       we can call the slots up vie $slots. -->
            <footer v-if="$slots.footer" class="border-t mt-4 pt-4 text-sm">
                <slot name="footer"></slot>
            </footer>
        </div>
    `,

  props: {
    theme: { type: String, default: "dark" },
    heading: String,
  },
};
