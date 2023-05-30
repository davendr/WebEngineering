export default {
  template: `
  
  <button 
        :class="{
          'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
          'bg-blue-500 hover:bg-gray-400': type == 'primary',
          'bg-purple-200 hover:bg-gray-400': type == 'secondary',
          'bg-green-200 hover:bg-gray-400': type == 'muted',
          'is-loading': processing
        }" 
        :disabled ="processing"
  >
    <slot />
  </button>
  `,

  props: {
    type: {
      type: String,
      default: "primary",
    },

    //  to get this prop, we just add it on top!
    processing: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      processing: true,
    };
  },
};
