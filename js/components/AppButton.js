//  each component gets his own .js and they are being imported into the index.html

export default {
  template: `
  
  <button class="bg-gray-200 hover:bg-gray-400 border rounded px-5
  disabled:cursor-not-allowed" :disabled ="processing">
  <slot />
  </button>
  `,

  data() {
    return {
      processing: true,
    };
  },
};
