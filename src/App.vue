<script setup lang="ts">
  import {ref} from 'vue'

  interface Anime{
    initial:{ 
      opacity: number,   
      y: number 
    },
    enter:{
      opacity:number,
      y:number,
      transition:{
        duration:number,
        easing:string,
      }
    }
  }

  let page_load = ref<Anime>({
    initial:{ 
        opacity: 0,  
        y: -200, 
    },
    enter:{ 
      opacity: 1, 
      y:0,
      transition:{ 
         duration: 275,
         easing:'ease-in'
       }
    }
  })

  let nav_animate = ref({
    initial:{ 
        opacity: 0,  
        y: -100, 
    },
    enter:{ 
      opacity: 1, 
      y:0,
      transition:{ 
        delay: 575,
        type: 'spring',
        stiffness: 175,
      }
    }
  })

  let document_animate = ref({
    initial:{ 
        opacity: 0,  
        y: 100, 
    },
    enter:{ 
      opacity: 1, 
      y:0,
      transition:{ 
        delay: 600,
        type: 'spring',
        stiffness: 175,
      }
    }
  })

  let btn_animate = ref({
    initial:{ 
      opacity: 0,  
      y: 100, 
    },
    enter:{ 
      opacity: 1, 
      y:0,
      transition:{ 
        delay: 675,
        type: 'spring',
        stiffness: 175,
      }
    }
  })


</script>

<template>
  <section
    v-motion="page_load"
    class="w-full min-h-screen flex flex-col bg-green-50 font-mono"
  >

    <div
     v-motion="nav_animate"
     class="w-full  bg-white py-2 lg:px-4 px-2 flex"
    >
      <div 
       class="w-full rounded-md bg-teal-50 flex flex-col lg:space-y-1.5 space-y-2 justify-center items-center text-center
       lg:text-3xl text-2xl text-teal-700 font-medium border-2 border-teal-700  shadow-3xl py-1"
      >
        <h1> Manifesto 2024-2028 </h1>

        <h2 class="lg:text-xl text-lg"> 
          PDF Document
        </h2>
      </div>
    </div>

    <div 
     v-motion="document_animate"
     class="hidden md:flex justify-center items-center w-full p-4"
    >
      <object 
        data="/manifesto7 final.pdf" 
        class="rounded-md border-2 border-dashed border-green-500
        lg:h-[32rem] h-[26rem] w-[34rem] lg:w-[80rem]"
      ></object>
    </div>

    <div
     v-motion="document_animate"
     class="flex md:hidden justify-center items-center w-full p-4"
    >
      <img 
       src="/file.png" 
       class="h-[20rem]"
      /> 
    </div>

    <div
     v-motion="btn_animate" 
     class="w-full lg:px-16 px-8 py-8 lg:py-4 flex justify-center items-center"
    >
      <a
       class="flex justify-center items-start space-x-1 py-2 w-full border-2 rounded-md transition-all ease-in-out duration-700
       lg:hover:shadow-3xl lg:hover:border-green-500 lg:hover:text-green-500 lg:hover:scale-105
       lg:hover:bg-white"
       href="/manifesto7 final.pdf"
       target="_blank" rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>

        <h2 class="font-semibold">
          Download PDF File
        </h2>
      </a>
    </div>

  </section>
</template>

