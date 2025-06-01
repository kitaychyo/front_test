<script setup lang="ts">
import logoIcon from '@/assets/icons/logo.svg'
</script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-content">
          <div class="header__contacts">
            <span class="header__contact">
              <i class="header__icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.48 14.4 1.6 11.52 1.6 8C1.6 4.48 4.48 1.6 8 1.6C11.52 1.6 14.4 4.48 14.4 8C14.4 11.52 11.52 14.4 8 14.4Z" fill="#0066FF"/>
                  <path d="M8.8 4H7.2V8.8L11.2 11.2L12 9.92L8.8 8V4Z" fill="#0066FF"/>
                </svg>
              </i>
              г.Красноярск, ул. Телевизорная 1 стр. 16, оф. 204
            </span>
            <a href="tel:+73912295757" class="header__contact">
              <i class="header__icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.5 12.5L12.1 9.1C11.8 8.8 11.3 8.8 11 9.1L9.3 10.8C8.8 10.6 7.8 10.1 6.9 9.2C6 8.3 5.5 7.3 5.3 6.8L7 5.1C7.3 4.8 7.3 4.3 7 4L3.6 0.6C3.3 0.3 2.8 0.3 2.5 0.6L0.7 2.4C0.6 2.5 0 3.2 0 4.4C0 5.9 0.8 8.2 4.2 11.6C7.6 15 9.9 15.8 11.4 15.8C12.6 15.8 13.3 15.2 13.4 15.1L15.2 13.3C15.5 13 15.5 12.5 15.5 12.5Z" fill="#0066FF"/>
                </svg>
              </i>
              +7 (391) 229-57-57
            </a>
            <a href="tel:+73912154433" class="header__contact">
              <i class="header__icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.5 12.5L12.1 9.1C11.8 8.8 11.3 8.8 11 9.1L9.3 10.8C8.8 10.6 7.8 10.1 6.9 9.2C6 8.3 5.5 7.3 5.3 6.8L7 5.1C7.3 4.8 7.3 4.3 7 4L3.6 0.6C3.3 0.3 2.8 0.3 2.5 0.6L0.7 2.4C0.6 2.5 0 3.2 0 4.4C0 5.9 0.8 8.2 4.2 11.6C7.6 15 9.9 15.8 11.4 15.8C12.6 15.8 13.3 15.2 13.4 15.1L15.2 13.3C15.5 13 15.5 12.5 15.5 12.5Z" fill="#0066FF"/>
                </svg>
              </i>
              +7 (391) 215-44-33
            </a>
            <a href="mailto:los-bio@mail.ru" class="header__contact">
              <i class="header__icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.4 2H1.6C0.72 2 0 2.72 0 3.6V12.4C0 13.28 0.72 14 1.6 14H14.4C15.28 14 16 13.28 16 12.4V3.6C16 2.72 15.28 2 14.4 2ZM14.4 4.8V5.44L8 9.04L1.6 5.44V4.8L8 8.4L14.4 4.8ZM1.6 12.4V7.36L7.36 10.56C7.76 10.8 8.24 10.8 8.64 10.56L14.4 7.36V12.4H1.6Z" fill="#0066FF"/>
                </svg>
              </i>
              los-bio@mail.ru
            </a>
          </div>
          <router-link to="/callback" class="header__callback">Заказать звонок</router-link>
        </div>
      </div>
    </div>

    <div class="header__main">
      <div class="container">
        <div class="header__main-content">
          <router-link to="/" class="header__logo">
            <img :src="logoIcon" alt="ЛОС-БИО">
          </router-link>

          <nav class="header__nav">
            <router-link to="/about" class="header__nav-link">О компании</router-link>
            <router-link to="/projects" class="header__nav-link">Проекты</router-link>
            <router-link to="/catalog" class="header__nav-link">Каталог</router-link>
            <router-link to="/contacts" class="header__nav-link">Контакты</router-link>
          </nav>

          <router-link to="/quote" class="header__cta">Получить КП</router-link>
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
  z-index: 100;
  background: #02040D;

  &__top {
    padding: 12px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__contacts {
    display: flex;
    gap: 32px;
  }

  &__contact {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__callback {
    color: #0066FF;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }

  &__main {
    padding: 20px 0;
  }

  &__main-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
    width: 180px;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__nav {
    display: flex;
    gap: 40px;
  }

  &__nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;

    &:hover,
    &.router-link-active {
      color: #0066FF;
    }
  }

  &__cta {
    display: inline-block;
    padding: 12px 24px;
    background: #0066FF;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background: #0052cc;
    }
  }
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 1200px) {
  .header {
    &__contacts {
      gap: 20px;
    }

    &__nav {
      gap: 30px;
    }
  }
}

@media (max-width: 992px) {
  .header {
    &__top {
      display: none;
    }

    &__nav {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .header {
    &__logo {
      width: 140px;
    }

    &__cta {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
}
</style>
