<template>
    <div class="header-wrapper">
        <div class="header-logo-wrapper">
            <img src="../assets/logo-grupo-primo.svg" />
        </div>
    </div>
</template>

<style>
.header-wrapper {
    width: 100%;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--secondary-application-color);

    @media (max-width: 1024px) {
        font-size: 85px;
    }

    .header-logo-wrapper {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
}
</style>