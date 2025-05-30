<script setup lang="ts">
import logoIcon from '@/assets/icons/logo.svg'
import phoneIcon from '@/assets/icons/footer-phone-icon.svg'
import emailIcon from '@/assets/icons/footer-email-icon.svg'
import locationIcon from '@/assets/icons/footer-location-icon.svg'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__column footer__column--logo">
          <img :src="logoIcon" alt="ЛОС-БИО" class="footer__logo" />
          <p class="footer__company-info">ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»</p>
          <p class="footer__copy">&copy; {{ new Date().getFullYear() }} Все права защищены</p>
        </div>

        <div class="footer__column footer__column--nav">
          <h4 class="footer__heading">КОМПАНИЯ</h4>
          <ul class="footer__nav-list">
            <li><router-link to="/">Главная</router-link></li>
            <li><router-link to="/#advantages">Преимущества</router-link></li>
            <li><router-link to="/#projects">Проекты</router-link></li>
            <li><router-link to="/#contacts">Контакты</router-link></li>
          </ul>
        </div>

        <div class="footer__column footer__column--catalog">
          <h4 class="footer__heading">КАТАЛОГ</h4>
          <ul class="footer__nav-list">
            <li><a href="#catalog-kns">КНС</a></li>
            <li><a href="#catalog-emkosti">Емкости</a></li>
            <li><a href="#catalog-ochistnie">Ливневые Очистные Сооружения</a></li>
            <li><a href="#catalog-zhirouloviteli">Жироуловители</a></li>
            <li><a href="#catalog-nasosnie">Насосные станции</a></li>
            <li><a href="#catalog-komplekt">Комплектующие</a></li>
          </ul>
        </div>

        <div class="footer__column footer__column--contacts">
          <h4 class="footer__heading">КОНТАКТЫ</h4>
          <ul class="footer__contact-list">
            <li>
              <img :src="phoneIcon" alt="Телефон" class="footer__contact-icon" />
              <a href="tel:+73912092557">+7 (391) 209 57-57</a>
            </li>
            <li>
              <img :src="phoneIcon" alt="Телефон" class="footer__contact-icon" />
              <a href="tel:+73912155433">+7 (391) 215 54-33</a>
            </li>
            <li>
              <img :src="emailIcon" alt="Email" class="footer__contact-icon" />
              <a href="mailto:los-bio@mail.ru">los-bio@mail.ru</a>
            </li>
            <li>
              <img :src="locationIcon" alt="Адрес" class="footer__contact-icon" />
              <span>г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204</span>
            </li>
          </ul>
          <button class="footer__callback-button" @click="scrollToTop">Заказать звонок</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #171A27;
  color: rgba(255, 255, 255, 0.7);
  padding: 4rem 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 3rem;
    align-items: start;
  }

  &__column {
    &--logo {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__logo {
    max-width: 240px;
    height: 60px;
    object-fit: contain;
  }

  &__company-info {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.4;
    max-width: 250px;
  }

  &__copy {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: auto;
  }

  &__heading {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  &__nav-list,
  &__contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  &__nav-list a,
  &__contact-list a,
  &__contact-list span {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease;

    &:hover {
      color: #0066FF;
    }
  }

  &__contact-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__contact-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  &__callback-button {
    background-color: #0066FF;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1.5rem;
    text-transform: uppercase;

    &:hover {
      background-color: #0052cc;
    }
  }
}

@media (max-width: 991px) {
  .footer {
    padding: 3rem 0;

    &__content {
      gap: 2rem;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    &__content {
      grid-template-columns: 1fr;
    }

    &__column {
      text-align: center;

      &--logo {
        align-items: center;
      }
    }

    &__company-info {
      max-width: 100%;
    }

    &__contact-list li {
      justify-content: center;
    }
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 2rem 0;

    &__contact-list li {
      flex-direction: column;
      gap: 0.3rem;
    }
  }
}
</style>