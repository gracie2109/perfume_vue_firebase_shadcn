<template>
  <div class="border p-2 rounded-lg ">
      <div class="flex gap-x-4 items-center text-sm">
        <div id="media" class=" w-[50px] h-[50px]">
          <template v-if="props.data.type ==='order_discount'">
            <img :src="couponImage" alt="props.data.name"  class="w-full h-full">
          </template>
          <template v-if="props.data.type ==='free_shipping'">
            <img :src="freeshipImage" alt="props.data.name" class="w-full h-full">
          </template>
          <template v-if="props.data.type ==='product_discount'">
            <img :src="cashImage" alt="props.data.name" class="w-full h-full">
          </template>
        </div>
        <div id="content" class="flex-1 grid gap-3">
           <div id="first" class="flex justify-between items-start">
              <div class="grid gap-y-1">
                <p class="font-semibold">{{props.data.name}}</p>
                <small class="inline-block">{{props.data.condition}}</small>
              </div>
             <div>
               <TooltipProvider :key="props.data.id" placement="left">
                 <Tooltip>
                   <TooltipTrigger><Info  class="w-4 h-4" /></TooltipTrigger>
                   <TooltipContent class="text-black bg-white border p-3 px-5" >
                     <div class="min-w-40 space-y-3">
                       <div class="flex justify-between items-center"><p>Code: </p> <b>{{props.data.code}}</b>  </div>
                       <div class="flex justify-between items-center"><p>Start Date: </p> <span>{{props.data.startDate}}</span>  </div>
                       <div class="flex justify-between items-center"><p>End Date: </p> <span>{{props.data.endDate}}</span>  </div>
                       <div class="px-3 list-disc" v-html="props.data.description">
                       </div>
                     </div>
                   </TooltipContent>
                 </Tooltip>
               </TooltipProvider>
             </div>
           </div>
          <div id="last" class="flex justify-between items-center">
            <div class="grid gap-y-1">
              <p>Code: <span class="font-semibold">{{props.data.code}}</span></p>
              <small class="inline-block" v-if="props.data.endDate">HSD: {{props.data.endDate }}</small>
              <small class="inline-block" v-else>HSD: Unlimited</small>
            </div>
            <div v-if="isSupported">
              <button @click="copy(props.data.code)" class="bg-primary text-white py-0.5 px-1.5 rounded-lg flex items-center hover:bg-primary/85 ">
                <Copy class="w-3 h-3 mr-1"/>
                <span class="text-[10px]" v-if="text === props.data.code">Copied</span>
                <span class="text-[10px]" v-else>Copy</span>
              </button>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>


<script lang="ts" setup>
  import couponImage from "@/assets/images/vouchers/coupon.webp"
  import freeshipImage from "@/assets/images/vouchers/freeship.webp"
  import cashImage from "@/assets/images/vouchers/cash.webp";

  import { Info, Copy } from 'lucide-vue-next';
  import { useClipboard } from '@vueuse/core'

  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from '@/components/ui/tooltip';


  const { text, isSupported, copy } = useClipboard()

  const props = defineProps<{
    data:any
  }>();


</script>

<style>
</style>