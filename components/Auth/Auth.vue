<template>
    <form bg="black" flex="lg:~ row" border="rounded-lg" justify="lg:center" w="lg:full" @submit.prevent="() => (isSignUp ? signUp() : login())">
        <div flex="lg:~ col">
            <h1 text="green">Supabase + Nuxt 3</h1>
            <p v-if="!isSignUp" text="white">Sign in via Email and password</p>
            <p v-else text="white">SignUp in via Email and password</p>
            <div>
                <MazInput type="email" placeholder="Your email" v-model="email" />
                <MazInput class="mt-2" type="password" placeholder="Your password" v-model="password" />
            </div>
            <div m="y-2" w="full">
                <MazBtn block outline color="secondary" size="md" type="submit"><span v-if="isSignUp"> Sign up </span>
                    <span v-else> Log in </span>
                </MazBtn>
                <MazBtn @click="signInWithGithub()" class="mt-2" block outline color="white" size="md" type="submit">
                    <UiIcon bg="white hover:black" icon="i-akar-icons:github-fill" />
                </MazBtn>
                <button @click="isSignUp = !isSignUp" class="w-full mt-8 text-sm text-center underline text-slate-300">
                    <span v-if="isSignUp"> Have an account? Log in instead </span>
                    <span v-else> Create a new account </span>
                </button>
            </div>
        </div>
    </form>
</template>

<script  setup>

const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()


const signUp = async () => {
    const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value
    })

}

async function signInWithGithub() {
    const { user, session, error } = await client.auth.signIn({
        provider: 'github',
    })

    if (error) {
        console.log('error', error)
    }
}

const login = async () => {
    const { user, error } = await client.auth.signIn({
        email: email.value,
        password: password.value
    })

}
const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/')
        }
    })
})
</script>