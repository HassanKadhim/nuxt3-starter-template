<template>
    <form bg="black" flex="lg:~ row" border="rounded-lg" justify="lg:center" w="lg:full" @submit.prevent="handleLogin">
        <div flex="lg:~ col">
            <h1 text="green">Supabase + Nuxt 3</h1>
            <p text="white">Sign in via Email and password</p>
            <div>
                <MazInput type="email" placeholder="Your email" v-model="email" />
                <MazInput class="mt-2" type="password" placeholder="Your password" v-model="password" />
            </div>
            <div m="y-2" w="full">
                <MazBtn block outline color="secondary" size="md" type="submit">Sign</MazBtn>
                <MazBtn class="mt-2" block outline color="white" size="md" type="submit">
                    <UiIcon bg="white hover:black" icon="i-akar-icons:google-fill" />
                </MazBtn>

            </div>
        </div>
    </form>
</template>

<script  setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref("");
const password = ref("");
const handleLogin = async () => {
    try {
        loading.value = true;
        const { error } = await supabase.auth.signIn({ email: email.value, password: password.value });
        if (error) throw error;
        alert("Check your email for the login link!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};
</script>