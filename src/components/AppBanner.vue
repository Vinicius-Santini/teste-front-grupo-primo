<script setup>
const props = defineProps({
    bannerTitle: String,
    bannerDescription: String
})
</script>

<template>
    <div class="banner-wrapper">
        <div class="banner-content-wrapper">
            <h1 class="banner-content-title">{{bannerTitle}}</h1>
            <div class="banner-content-description">{{bannerDescription}}</div>
        </div>
    </div>
</template>

<style>
.banner-wrapper {
    background-color: #0B0B0B;
    height: 343px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        height: 270px;
    }

    .banner-content-wrapper {
        height: 100%;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .banner-content-title {
            font-weight: 800;
            font-size: 3rem;
            line-height: 58px;
            color: #FFFFFC;
            margin-bottom: 24px;

            @media (max-width: 1024px) {
                font-size: 1.625rem;
                text-align: left;
                line-height: 30px;
                margin-bottom: 16px;
            }
        }

        .banner-content-description {
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 28px;
            color: var(--banner-title-color);

            @media (max-width: 1024px) {
                font-size: 0.8125rem;
            }
        }
    }
}
</style>