<template>
  <label class="block">
    <input
      type="checkbox"
      class="sr-only flag-1"
      v-model="checked"
    />
    <div
      :class="[
        'border-4 box-content w-20 h-10 rounded-full',
        'bg-yellow-400 flag-1-checked:bg-blue-900',
        'flag-1-checked:border-gray-600',
        'transition-all duration-300'
      ]"
    >
      <div
        :class="[
          'rounded-full w-1/2 h-full scale-75',
          'translate-x-0 flag-1-checked:translate-x-full',
          'bg-white/75 flag-1-checked:bg-white/50',
          'transition-all duration-300',
          'flex justify-center items-center'
        ]"
      >
        <svg xmlns="http://www.w3.org/2000/svg"
          :class="[
            'h-7 w-7',
            'text-yellow-500 flag-1-checked:text-white'
          ]"
          viewBox="0 0 20 20" fill="currentColor"
        >
          <path class="flag-1-checked:opacity-0 transition-all duration-300" fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          <path class="opacity-0 flag-1-checked:opacity-100 transition-all duration-300" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: "DarkModeSwitcher",
  data() {
    return {
      checked: false,
    }
  },
  mounted() {
    const matchMedia =  window.matchMedia('(prefers-color-scheme: dark)')
    
    if(matchMedia.matches){
      this.checked = true
    }
  },
  watch: {
    checked(){
      document.body.classList.toggle('dark')
    }
  }
}
</script>