<template>
    <div>
        <TheHeader></TheHeader>
        <main>
            <section class="main" >
                <div class="container">
                    <h1 class="main__title">Размещение заявки на бирже с целью нахождения надежных партнеров для сотрудничества в рамках проекта комплексного обеспечения ресурсами</h1>
                    <button class="main__button button-ui-2">Создать заявку на бирже</button>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';

    export default {
    components: { TheHeader }
}
</script>
<style lang="sass" scoped>
.main
    background-image: url('@/assets/img/main.jpeg')
    background-size: cover
    background-position: center center
    background-repeat: no-repeat
    padding: 243px 0px
    &__title
        max-width: 705px
        width: 100%
        margin: 0 auto
        text-align: center
        color: $white
        margin-bottom: 20px
        font-size: 24px
        font-weight: 700
    &__button
        padding: 16px 48px
        display: flex
        justify-self: center
        margin: 0 auto
</style>