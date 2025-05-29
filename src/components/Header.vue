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
          <a href="/" class="logo">
            <img :src="logoIcon" alt="ЛОС-БИО" />
          </a>
          <nav class="nav">
            <ul class="nav__list">
              <li><a href="#" class="nav__link">О компании</a></li>
              <li><a href="#" class="nav__link">Проекты</a></li>
              <li><a href="#" class="nav__link">Каталог</a></li>
              <li><a href="#" class="nav__link">Контакты</a></li>
            </ul>
          </nav>
          <button class="contact-btn">Получить КП</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #0b0c10;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header__top {
  background-color: #0D0F14;
  padding: 10px 0;
  font-size: 14px;
  width: 100vw;
}

.header__top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__contacts {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__address,
.header__phone,
.header__email {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s;
}

.header__phone:hover,
.header__email:hover {
  color: #0066FF;
}

.header__icon {
  width: 16px;
  height: 16px;
  opacity: 0.8;
}

.header__callback {
  background: none;
  border: none;
  color: #0066FF;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
}

.header__callback::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url('@/assets/icons/callback.svg') no-repeat center;
  background-size: contain;
}

.header__main {
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100vw;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.logo {
  display: block;
  flex-shrink: 0;
}

.logo img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.nav {
  flex-grow: 1;
}

.nav__list {
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}

.nav__link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
  white-space: nowrap;
}

.nav__link:hover {
  color: #0066FF;
}

.contact-btn {
  background-color: #0066FF;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  white-space: nowrap;
  flex-shrink: 0;
}

.contact-btn:hover {
  background-color: #0052cc;
}

@media (max-width: 1200px) {
  .header__contacts {
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .header__top {
    display: none;
  }

  .header__content {
    gap: 20px;
  }

  .nav__list {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .header__main {
    padding: 15px 0;
  }

  .header__content {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .nav {
    order: 3;
    flex-basis: 100%;
  }

  .nav__list {
    justify-content: space-between;
  }

  .logo img {
    height: 35px;
  }
}

@media (max-width: 576px) {
  .header__content {
    gap: 15px;
  }

  .nav__list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .logo img {
    height: 30px;
  }

  .contact-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
