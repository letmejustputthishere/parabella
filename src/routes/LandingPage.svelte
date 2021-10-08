<script>
    import { Link } from "svelte-routing";
    import { onMount } from "svelte";
    export let language: string;

    onMount(() => {
        window.document.body.className = "landing-page";
    });
</script>

<div class="flex flex-col items-center justify-center h-full">
    <img class="w-2/4" src="/logo.png" alt="" />
    <h1 class="text-4xl text-white font-bold text-center">
        {language === "english"
            ? "Digitization and Sustainability tool"
            : "Digitalisierungs- und Nachhaltigkeitstool"}
    </h1>
    <button class="border text-2xl text-white mt-4 p-2 px-3"
        ><Link to="survey"
            >{language === "english" ? "START NOW" : "JETZT STARTEN"}</Link
        ></button
    >
</div>
