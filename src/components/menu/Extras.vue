<template>
  <div class="flex items-center gap-x-2 md:gap-x-4 will-change-auto text-primary" :class="clsx({
  'text-white': route.name === 'home'
  })">
    <CartMenu :type="String(route.name)" />
    <button class="flex items-center gap-x-2" type="button">
      <Search :size="20" stroke-width="1.5"/>
    </button>

    <Separator class="hidden !h-5 lg:block" orientation="vertical"/>
    <template v-if="user">
      <BaseAvatar/>
    </template>
    <template v-else>
      <router-link :to="$router.resolve({name: 'login'})">Login</router-link>
    </template>
    <MenuButton @toggle-menu="emit('toggleMenu')"/>
  </div>
</template>

<script lang="ts" setup>
import BaseAvatar from "@/components/base/avatar/Avatar.vue";
import MenuButton from "@/components/menu/Button.vue";
import {Separator} from '@/components/ui/separator';
import {Search } from "lucide-vue-next"
import {useCurrentUser} from "vuefire";
import CartMenu from "@/components/menu/CartMenu.vue";
import {clsx} from "clsx";
import {useRoute} from "vue-router";

const emit = defineEmits(['toggleMenu']);
const route = useRoute()

const user = useCurrentUser()
</script>

