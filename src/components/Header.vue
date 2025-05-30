<script setup lang="ts">
import locationIcon from '@/assets/icons/location.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import emailIcon from '@/assets/icons/email.svg'
import callbackIcon from '@/assets/icons/callback.svg'
import logoIcon from '@/assets/icons/logo.svg'
</script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-content">
          <div class="header__address">
            <img :src="locationIcon" alt="Адрес" class="header__icon" />
            г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204
          </div>
          <div class="header__contacts">
            <a href="tel:+73912092557" class="header__phone">
              <img :src="phoneIcon" alt="Телефон" class="header__icon" />
              +7 (391) 209 57-57
            </a>
            <a href="tel:+73912155433" class="header__phone">
              <img :src="phoneIcon" alt="Телефон" class="header__icon" />
              +7 (391) 215 54-33
            </a>
            <a href="mailto:los-bio@mail.ru" class="header__email">
              <img :src="emailIcon" alt="Email" class="header__icon" />
              los-bio@mail.ru
            </a>
            <button class="header__callback">Заказать звонок</button>
          </div>
        </div>
      </div>
    </div>
    <div class="header__main">
      <div class="container">
        <div class="header__content">
          <router-link to="/" class="header__logo">
            <img :src="logoIcon" alt="ЛОС-БИО" />
          </router-link>
          <nav class="header__nav">
            <router-link to="/" class="header__link">Главная</router-link>
            <router-link to="/#advantages" class="header__link">Преимущества</router-link>
            <router-link to="/#projects" class="header__link">Проекты</router-link>
            <router-link to="/#contacts" class="header__link">Контакты</router-link>
          </nav>
          <button class="header__button">Получить КП</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #0b0c10;

  &__top {
    background-color: #0D0F14;
    padding: 10px 0;
    font-size: 14px;
  }

  &__top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__contacts {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__address,
  &__phone,
  &__email {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s;
  }

  &__icon {
    width: 16px;
    height: 16px;
    opacity: 0.8;
  }

  &__callback {
    background: none;
    border: none;
    color: #0066FF;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;

    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url('@/assets/icons/callback.svg') no-repeat center;
      background-size: contain;
    }
  }

  &__main {
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  &__logo {
    display: block;
    flex-shrink: 0;

    img {
      height: 60px;
      width: 240px;
      object-fit: contain;
    }
  }

  &__nav {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  &__link {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: #0066FF;
    }
  }

  &__button {
    background-color: #0066FF;
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    white-space: nowrap;

    &:hover {
      background-color: #0052cc;
    }
  }
}

@media (max-width: 1200px) {
  .header {
    &__contacts {
      gap: 20px;
    }
  }
}

@media (max-width: 991px) {
  .header {
    &__top {
      display: none;
    }

    &__content {
      gap: 20px;
    }

    &__nav {
      gap: 20px;
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__main {
      padding: 15px 0;
    }

    &__content {
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__nav {
      order: 3;
      flex-basis: 100%;
      justify-content: space-between;
      margin-top: 15px;
    }

    &__logo img {
      height: 35px;
    }

    &__button {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
}

@media (max-width: 576px) {
  .header {
    &__content {
      gap: 15px;
    }

    &__nav {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    &__logo img {
      height: 30px;
    }
  }
}
</style>
