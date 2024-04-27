<template>
    <header>
        <div class="header__main">
            <router-link to="/" class="header__logo">
                <picture>
                    <source media="(max-width: 900px)" srcset="@/assets/img/logo-min.svg">
                    <img src="@/assets/img/logo.svg" alt="Logo">
                </picture>
                
            </router-link>
            <div class="header__right">
                <nav class="header__menu">
                    <button class="header__mobile-search button-ui-2"><img src="@/assets/img/search.svg" alt="Search"> Поиск</button>
                    <ul class="header__menu-block">
                        <li class="header__menu-item"><a href="#" >Предложения Производителей</a></li>
                        <li class="header__menu-item"><a href="#" >Производители</a></li>
                        <li class="header__menu-item"><a href="#" >Станки</a></li>
                        <li class="header__menu-item"><a href="#" >Контакты</a></li>
                    </ul>
                    <div class="header__mobile-footer">
                        <div class="header__mobile-profile">
                            <div class="header__mobile-icon"><img src="@/assets/img/profile.png" alt="Profile"></div>
                            <div class="header__profile-info">
                                <h3 class="header__profile-name ">ИП Николаев Иван</h3>
                                <p class="header__profile-descript">Рейтинг: 4.5 <span>(12)</span></p>
                            </div>
                        </div>
                        <a href="#" class="header__mobile-link button-ui-1">В личный кабинет</a>
                        <button class="header__mobile-button button-ui-2">Создать предложение</button>
                    </div>
                </nav>
                <button class="header__main-search"><i class="ic ic_search"></i></button>
                <div class="header__main-info" v-if="this.USER.HashId">
                    <button class="header__main-button button-ui-1">Создать заявку</button>
                    
                    <div class="header__main-profile" 
                    @click="this.IsHeaderModalOpen= !this.IsHeaderModalOpen"
                    >
                        <!--  Класс -active для момента, когда есть уведомления-->
                        <div class="header__profile-click">
                            <div class="header__profile-icon header__profile-icon-active">
                                <img src="@/assets/img/profile.png" alt="ProfileIcon">
                            </div>
                            <div class="header__profile-info">
                                <h3 class="header__profile-name">ИП Николаев Иван</h3>
                                <p class="header__profile-descript">Рейтинг: 4.5 <span>(12)</span></p>
                            </div>
                            <button class="header__profile-button" :class="{ 'header__profile-button-active': this.IsHeaderModalOpen }"><img src="@/assets/img/arrow__down.svg" alt="ArrowDown"></button>
                        </div>
                        <Transition name="fade">
                            <div class="header__profile-modal" v-if="IsHeaderModalOpen">
                                <a class="header__modal-item" href="#">
                                    <div class="header__modal-icon"><img src="@/assets/img/user.svg" alt="HeaderModalIcon"></div>
                                    <div class="header__modal-title">Личный кабинет</div>
                                </a>
                                <a class="header__modal-item" href="#">
                                    <div class="header__modal-icon"><img src="@/assets/img/chat.svg" alt="HeaderModalIcon"></div>
                                    <div class="header__modal-title">Чаты</div>
                                </a>
                                <a class="header__modal-item" href="#">
                                    <div class="header__modal-icon"><img src="@/assets/img/crown.svg" alt="HeaderModalIcon"></div>
                                    <div class="header__modal-title">Тарифы</div>
                                </a>
                                <a class="header__modal-item" href="#">
                                    <div class="header__modal-icon"><img src="@/assets/img/list.svg" alt="HeaderModalIcon"></div>
                                    <div class="header__modal-title">Заказы</div>
                                </a>
                                <button class="header__modal-exit">
                                    <div class="header__modal-icon"><img src="@/assets/img/LogOut.svg" alt="LogOutIcon"></div>
                                    <div class="header__modal-title">Выход</div>
                                </button>
                            </div>
                        </Transition>
                        
                    </div>
                    
                    <button class="header__mobile-menu"><img src="@/assets/img/menu.svg" alt="BurgerIcon"></button>
                </div>
                <div v-else class="header__main-log">
                    <router-link to="/login">Войти/Зарегистрироваться</router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: "TheHeader",
    data(){
        return {
            IsHeaderModalOpen: false
        }
    },
    computed: {
        ...mapGetters([
            'USER'
        ])
    }
}
</script>
<style lang="sass" scoped>

.header
    &__top
        border-top: 2px solid $black
        border-bottom: 2px solid $black
        padding: 15px 0px
        overflow: hidden
        &-list
            text-transform: uppercase
            font-size: 20px
            font-weight: 700
        span
            width: 8px
            height: 8px
            border-radius: 100%
            background: $black
            margin: 0px 10px
            display: inline-block
            margin-bottom: 4px
        &-active 
            display: none
    &__main
        display: flex
        align-items: center
        justify-content: space-between
        padding: 10px 20px
        background: $white
        &-log 
            margin-left: 113px
        &-scroll 
            position: fixed
            top: 0
            left: 0
            width: 100%
            z-index: 2
            box-shadow: 0px 0px 5px 1px #00000024
        &-search 
            display: flex
            align-items: center
            justify-content: center
            background: $orange
            padding: 13px
            border-radius: 12px
            transition: .3s
            border: 1px solid $white
            &:hover
                background: $white
                border-color: $orange
                .ic_search
                    background: $orange
        &-button
            padding: 16px 32px
            margin-left: 113px
        &-info
            display: flex
            align-items: center
        &-profile 
            display: flex
            align-items: center
            margin-left: 20px
            position: relative
    &__logo
        width: 221px
    &__right
        display: flex
        align-items: center
    &__menu
        &-block 
            display: flex
            align-items: center
            margin-right: 30px
        &-item 
            font-size: 16px
            font-weight: 400
            margin-right: 20px
            text-transform: uppercase
            position: relative
            transition: .3s
            &:hover
                color: $orange
            &:last-child
                margin-right: 0px
    &__profile
        &-click
            display: flex
            align-items: center
            cursor: pointer
        &-icon 
            position: relative
            min-width: 50px
            width: 50px
            height: 50px
            margin-right: 12px
            img
                border-radius: 100%
            &-active 
                &::before
                    content: ""
                    position: absolute
                    top: 0
                    right: 0
                    background: $orange
                    width: 8px
                    height: 8px
                    border-radius: 100%
        &-name 
            font-size: 12px
            font-weight: 500
            margin-bottom: 4px
        &-descript
            font-size: 12px
            font-weight: 400
            span
                font-weight: 500
        &-button 
            margin-left: 14px
            width: 15px
            transition: .3s
            &-active 
                transform: rotate(180deg)
        &-modal 
            position: absolute
            top: 60px
            left: -0px
            max-width: 208px
            width: 208px
            z-index: 1
            background: $white
            transition: .3s
            box-shadow: 0px 1px 5px 0px rgba(10, 10, 10, 0.2)
            border-radius: 8px
    &__modal
        &-item 
            padding: 12px 20px
            display: flex
            align-items: center
            transition: .3s
            border-radius: 8px
            &:hover
                background: $orange
                .header__modal-title
                    color: $white
        &-icon
            width: 20px
            margin-right: 12px
            display: flex
            align-items: flex-end
        &-title 
            font-size: 16px
            font-weight: 500
            transition: .3s
        &-exit 
            display: flex
            align-items: center
            padding: 12px 20px
            .header__modal-title
                color: $red
    &__mobile
        &-menu 
            display: none
        &-search 
            display: none
        &-footer
            display: none
.fade-enter-active, .fade-leave-active 
  transition: opacity 0.3s ease
.fade-enter-from, .fade-leave-to
  opacity: 0

@media screen and (max-width: $container)
    .header__main-button, .header__main-log
        margin-left: 40px
    .header__menu-item
        font-size: 14px
@media screen and (max-width: 1400px)
    .header
        &__main-button, &__main-log
            margin-left: 0px
        &__main-search
            display: none
        &__menu
            position: fixed
            top: 74px
            left: -110%
            width: 100%
            max-width: 600px
            height: calc(100dvh - 74px)
            background: $bg
            z-index: 3
            padding: 30px 20px
            transition: .6s
            display: flex
            flex-direction: column
            justify-content: space-between
            overflow: auto
            &-active 
                left: 0px
            &-block 
                flex-direction: column
                align-items: flex-start
                margin-top: 34px
                margin-right: 0px
            &-item 
                padding: 20px 0px
                margin-right: 0px
                font-size: 16px
                border-top: 1px solid rgb(204, 204, 204)
                border-bottom: 1px solid rgb(204, 204, 204)
                width: 100%

        &__mobile
            &-link 
                padding: 16px 0px
                text-align: center
                width: 100%
                margin-bottom: 10px
            &-button  
                padding: 16px 0px
                text-align: center
                width: 100%
            &-menu 
                display: block 
                width: 32px
                margin-left: 20px
            &-footer 
                display: block
                margin-top: 20px
            &-search 
                display: flex
                width: 100%
                display: flex
                padding: 16px 0px
                justify-content: center
                align-items: center
                img
                    width: 15px
                    margin-right: 12px
            &-profile
                display: flex
                align-items: center
                margin-bottom: 25px
                .header__profile-name
                    font-size: 16px
                .header__profile-descript
                    font-size: 14px
            &-icon 
                width: 50px
                height: 50px
                border-radius: 100%
                margin-right: 12px
                img
                    border-radius: 100%
        &__main
            transition: .3s
            &-active 
                top: 0px
                z-index: 3
                position: fixed
                left: 0px
                width: 100%
                background: $white
@media screen and (max-width: 900px)
    .header__logo
        width: 45px
    .header__main-profile
        display: none
@media screen and (max-width: 500px)
    .header__main-button
        font-size: 15px
        padding: 10px 20px
    .header
        &__menu
            height: calc(100dvh - 66px)
            top: 66px
    
</style>