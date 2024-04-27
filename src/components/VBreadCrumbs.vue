<template>
    <section class="breadcrumbs">
        <div class="container">
            <button class="breadcrumbs__button"><img src="@/assets/img/breadcrumbs-arrow.svg" alt="Arrow"></button>
            <div class="breadcrumbs__block">
                <div class="breadcrumbs__block-item">
                    <router-link to="/" class="breadcrumbs__link">Главная</router-link>
                    <div class="breadcrumbs__icon"><img src="@/assets/img/breadcrumbs-arrow.svg" alt="Arrow"></div>
                </div>
                <div class="breadcrumbs__block-item"
                v-for="(BreadCrumbsItem, BreadCrumbsItemId) in this.BreadCrumbs"
                :key="BreadCrumbsItemId"
                >
                    <router-link :to="BreadCrumbsItem.path" class="breadcrumbs__link">{{BreadCrumbsItem.pathTitle}}</router-link>
                    <div class="breadcrumbs__icon" v-if="BreadCrumbsItemId != this.BreadCrumbs.length - 1"><img src="@/assets/img/breadcrumbs-arrow.svg" alt="Arrow"></div>
                </div>
                
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "BreadCrumbsBlock",
    props: {
        BreadCrumbs: {
            type: Array,
            default(){
                return []
            }
        }
    }

}
</script>
<style lang="sass" scoped>
.breadcrumbs
    margin: 50px 0px
    .container
        display: flex
        align-items: center
    &__button
        padding: 16px 19px
        border: 1px solid rgb(204, 204, 204)
        border-radius: 12px
        box-shadow: 0px 1px 3px 0px rgba(10, 10, 10, 0.1)
        margin-right: 40px
        img
            width: 7px
            transform: rotate(180deg)
    &__block
        display: flex
        align-items: center
        &-item 
            display: flex
            align-items: center
    &__icon
        margin: 0px 17px
        width: 7px
    &__link
        font-size: 16px
        font-weight: 500
        opacity: 0.7
        &:last-child
            opacity: 1
@media screen and (max-width: 600px)
    .breadcrumbs
        margin: 30px 0px
        &__button
            padding: 13px 18px
            margin-right: 30px
            img
                width: 5px
</style>