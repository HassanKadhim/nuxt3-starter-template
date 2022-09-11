<template>
    <nav bg="gray" p="y-2 x-2" border="~ rounded-lg gray-100 ">
        <div flex="lg:~ row" justify="between">
            <NuxtLink to="/">
                <UiIcon font="semibold" text="2xl" w="80px" icon="i-logos:nuxt" />
            </NuxtLink>
            <div flex="lg:~ row" justify="between">
                <UiIcon v-if="$colorMode.preference == 'dark'" @click="$colorMode.preference = 'light' " font="semibold" text="2xl" w="40px" icon="i-emojione-monotone:crescent-moon" />
                <UiIcon v-if="$colorMode.preference == 'light'" @click="$colorMode.preference = 'dark' " font="semibold" text="2xl" w="40px" icon="i-bi:sun" />
                <a href="https://github.com/HassanKadhim/nuxt3-starter-template" target="_blank">
                    <UiIcon font="semibold" text="2xl" w="40px" icon="i-akar-icons:github-fill" />
                </a>
                <MazBtn size="xs" :to="{path:'/login'}" color="transparent" outline>signIn</MazBtn>
            </div>
        </div>
    </nav>
</template>

<script setup>
const colorMode = useColorMode()

colorMode.preference = ref('light')


const menu = ref([
    {
        name: 'Dashboard',
        url: '/',
        icon: 'i-logos-nuxt'
    },
    {
        name: 'Settings',
        url: '/',
        icon: 'i-logos-nuxt'
    },
    {
        name: 'About',
        url: '/',
        icon: 'i-logos-nuxt'
    },
])

</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>