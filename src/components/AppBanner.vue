<script setup>
// const props = defineProps([
//     bannerTitle: String,
//     bannerDescription: String
// ])
</script>

<template>
    <div class="banner-wrapper">
        <div class="banner-content-wrapper">
            <div class="banner-content-title">Simulador de investimento</div>
            <div class="banner-content-description">Descubra o quanto você pode economizar.</div>
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
            font-size: 48px;
            line-height: 58px;
            color: #FFFFFC;
            margin-bottom: 24px;

            @media (max-width: 1024px) {
                font-size: 26px;
                text-align: left;
                line-height: 30px;
                margin-bottom: 16px;
            }
        }

        .banner-content-description {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            color: #BFBDB6;

            @media (max-width: 1024px) {
                font-size: 13px;
            }
        }
    }
}
</style>