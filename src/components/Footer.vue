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
  <footer class="site-footer">
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
            <li><a href="#about">О компании</a></li>
            <li><a href="#projects">Проекты</a></li>
            <li><a href="#catalog">Каталог</a></li>
            <li><a href="#contacts">Контакты</a></li>
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
              <a href="tel:+79992124212">+7 (999) 212-42-12</a>
            </li>
            <li>
              <img :src="phoneIcon" alt="Телефон" class="footer__contact-icon" />
              <a href="tel:+79991231245">+7 (999) 123-12-45</a>
            </li>
            <li>
              <img :src="emailIcon" alt="Email" class="footer__contact-icon" />
              <a href="mailto:info@los-bio.ru">info@los-bio.ru</a>
            </li>
             <li>
              <img :src="locationIcon" alt="Адрес" class="footer__contact-icon" />
              <span>г. Санкт-Петербург, ул. Промышленная д.5</span>
            </li>
          </ul>
          <button class="footer__callback-button">Заказать звонок</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #171A27;
  color: rgba(255, 255, 255, 0.7);
  padding-top: clamp(2.5rem, 6vh, 4rem);
  padding-bottom: clamp(2.5rem, 6vh, 4rem);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: start;
}

.footer__column--logo {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__logo {
  max-width: 150px;
  height: auto;
  margin-bottom: 0.5rem;
}

.footer__company-info {
  font-size: clamp(0.8rem, 1.8vw, 0.85rem);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.4;
  max-width: 250px;
}

.footer__copy {
  font-size: clamp(0.75rem, 1.6vw, 0.8rem);
  color: rgba(255, 255, 255, 0.5);
  margin-top: auto;
}

.footer__heading {
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  font-weight: 600;
  color: #fff;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.footer__nav-list,
.footer__contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer__nav-list a,
.footer__contact-list a,
.footer__contact-list span {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  transition: color 0.3s ease;
}

.footer__nav-list a:hover,
.footer__contact-list a:hover {
  color: #0066FF;
}

.footer__contact-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer__contact-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.footer__callback-button {
  background-color: #0066FF;
  color: #fff;
  border: none;
  padding: clamp(0.6rem, 1.2vw, 0.75rem) clamp(1.2rem, 2.5vw, 1.5rem);
  border-radius: 4px;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1.5rem;
  text-transform: uppercase;
  display: inline-block;
}

.footer__callback-button:hover {
  background-color: #0052cc;
}

@media (max-width: 768px) {
  .footer__content {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }
  
  .footer__column--logo {
    grid-column: 1 / -1;
    align-items: center;
    text-align: center;
  }
  
  .footer__copy {
    margin-top: 1rem;
  }
  .footer__column--contacts {
    align-items: center;
    text-align: center;
  }
  .footer__contact-list li {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer__content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer__column {
    align-items: center;
  }
  .footer__nav-list,
  .footer__contact-list {
    align-items: center;
  }
  .footer__contact-list li {
    flex-direction: column;
    gap: 0.3rem;
  }
  .footer__heading {
    margin-bottom: 0.75rem;
  }
}
</style>