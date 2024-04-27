<template>
    <div>
        <TheHeader></TheHeader>
        <main>
            <VBreadCrumbs :BreadCrumbs="[{path: '/login', pathTitle: 'Вход в аккаунт'}]"></VBreadCrumbs>
            <section class="main">
                <div class="container">
                    <div class="main__img"><img src="@/assets/img/log.jpeg" alt="Login"></div>
                    <div class="main__info">
                        <h1 class="main__info-title">Войти</h1>
                        <form action="" class="main__form">
                            <div class="main__form-item">
                                <p class="form__item-title">E-mail</p>
                                <input type="text" placeholder="youremail@gmail.com" class="form__item-input">
                            </div>
                            <div class="main__form-item">
                                <p class="form__item-title">Пароль</p>
                                <input type="password" placeholder="************" class="form__item-input" id="form__pass">
                                <button class="pass__button" type="button"><img src="@/assets/img/pass.svg" alt="Pass"></button>
                            </div>
                            <div class="main__form-dop">
                                <div class="main__form-zap">
                                    <input class="main__form-check" type="checkbox" id="formCheck">
                                    <label for="formCheck"></label>
                                    Запомнить меня
                                </div>
                                <a href="#" class="main__form-forgot">Забыли пароль?</a>
                            </div>
                            <button class="main__form-submit button-ui-2" type="submit">Войти</button>
                            <div class="main__form-reg">Нет аккаунта? <a href="reg.html">Зарегистрироваться</a></div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </div>
    
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
import VBreadCrumbs from '@/components/VBreadCrumbs.vue';

export default {
    name: "LoginPage",
    components: { TheHeader, VBreadCrumbs }
}
</script>
<style lang="sass" scoped>
.main
    .container
        display: flex
        justify-content: center
        gap: 20px
    &__img, &__info
        max-width: 630px
        width: 100%
    &__info
        border-radius: 12px
        background: $white
        display: flex
        justify-content: center
        flex-direction: column
        padding: 0px 60px
        &-title
            color: $orange
            font-size: 32px
            font-weight: 700
            margin-bottom: 40px
    &__form
        &-item 
            position: relative
            margin-bottom: 20px
        .form__item-title
            font-size: 14px
            font-weight: 400
            color: $orange
            margin-bottom: 8px
        .form__item-input
            padding: 16px 20px
            width: 100%
            font-size: 16px
            font-weight: 400
            border: 1px solid rgb(204, 204, 204)
            border-radius: 8px
            box-shadow: 0px 1px 3px 0px rgba(10, 10, 10, 0.1)
            background: $white
            &::placeholder
                opacity: 0.7
        .pass__button
            position: absolute
            bottom: 16px
            right: 21px
            width: 17px
        &-dop 
            display: flex
            align-items: center
            justify-content: space-between
        &-zap
            font-size: 16px
            font-weight: 400
            display: flex
            align-items: center
        input[type='checkbox']
            display: none
            &:checked ~ label
                background: $orange
                &::before
                    content: ""
                    width: 10px
                    height: 7px
                    background-size: 10px 7px
                    background-position: center center
                    background-repeat: no-repeat
                    background-image: url('@/assets/img/gal.svg')
                    position: absolute
                    top: 50%
                    left: 50%
                    transform: translateX(-50%) translateY(-50%)
                
        label
            width: 24px
            height: 24px
            display: block
            border-radius: 8px
            border: 1px solid $orange
            margin-right: 10px
            position: relative
            cursor: pointer
        &-forgot
            font-size: 16px
            font-weight: 500
            opacity: 0.7
        &-submit
            padding: 16px 0px
            width: 100%
            text-align: center
            font-size: 16px
            font-weight: 600
            margin-top: 30px
        &-reg 
            display: flex
            align-items: center
            justify-content: center
            margin-top: 30px
            font-size: 16px
            font-weight: 500
            a
                color: $orange
                text-decoration: underline
                margin-left: 20px
@media screen and (max-width: 900px)
    .main
        &__img
            display: none
        &__info
            padding: 30px 20px
@media screen and (max-width: 600px)
    .main__form-dop
        flex-direction: column
        align-items: flex-start
    .main__form-forgot
        margin-top: 20px
    .main__form-reg
        flex-direction: column
        align-items: center
        a
            margin-top: 10px
            margin-left: 0px
</style>