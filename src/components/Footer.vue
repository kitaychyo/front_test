<script>
import logoIcon from '@/assets/icons/logo.svg'

export default {
  setup() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return {
      logoIcon,
      scrollToTop
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <!-- Left Column -->
        <div class="footer__left">
          <div class="footer__company">
            <router-link to="/" class="footer__logo">
              <img :src="logoIcon" alt="ЛОС-БИО">
            </router-link>
            <p class="footer__company-name">ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»</p>
            <div class="footer__company-details">
              <p>ИНН: 246312379 КПП: 246301001</p>
              <p>ОГРН: 1215900008088</p>
            </div>
          </div>
        </div>

        <!-- Center Column -->
        <div class="footer__center">
          <div class="footer__nav-column">
            <h3 class="footer__nav-title">КОМПАНИЯ</h3>
            <nav class="footer__nav-list">
              <router-link to="/about" class="footer__nav-link">О компании</router-link>
              <router-link to="/projects" class="footer__nav-link">Проекты</router-link>
              <router-link to="/catalog" class="footer__nav-link">Каталог</router-link>
              <router-link to="/contacts" class="footer__nav-link">Контакты</router-link>
            </nav>
          </div>
        </div>

        <!-- Right Column -->
        <div class="footer__right">
          <div class="footer__nav-column">
            <h3 class="footer__nav-title">КАТАЛОГ</h3>
            <nav class="footer__nav-list">
              <router-link to="/catalog/kns" class="footer__nav-link">КНС</router-link>
              <router-link to="/catalog/tanks" class="footer__nav-link">Емкости</router-link>
              <router-link to="/catalog/treatment" class="footer__nav-link">Ливневые очистные сооружения</router-link>
              <router-link to="/catalog/household" class="footer__nav-link">Хозяйственно-бытовые очистные сооружения</router-link>
              <router-link to="/catalog/components" class="footer__nav-link">Комплектующие</router-link>
            </nav>
          </div>
        </div>

        <!-- Contact Column -->
        <div class="footer__contact">
          <h3 class="footer__nav-title">КОНТАКТЫ</h3>
          <div class="footer__phones">
            <a href="tel:+73912295757" class="footer__contact-link">
              <span class="material-icons">phone</span>
              +7 (391) 229-57-57
            </a>
            <a href="tel:+73912095757" class="footer__contact-link">
              <span class="material-icons">phone</span>
              +7 (391) 209-57-57
            </a>
          </div>
          <a href="mailto:los-bio@mail.ru" class="footer__contact-link">
            <span class="material-icons">mail</span>
            los-bio@mail.ru
          </a>
          <a href="#" class="footer__callback">
            <span class="material-icons">phone_callback</span>
            Заказать звонок
          </a>
          <a href="#" class="footer__cta">Получить КП</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: #02040D;
  padding: 60px 0;
  color: #fff;

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }

  &__left {
    grid-column: 1;
  }

  &__center {
    grid-column: 2;
  }

  &__right {
    grid-column: 3;
  }

  &__contact {
    grid-column: 4;
  }

  &__company {
    &-name {
      font-size: 14px;
      color: #fff;
      margin: 24px 0 16px;
    }

    &-details {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.5;

      p {
        margin: 0;
      }
    }
  }

  &__logo {
    display: block;
    width: 180px;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__nav-title {
    font-size: 14px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
    line-height: 1.4;

    &:hover {
      color: #0066FF;
    }
  }

  &__phones {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  &__contact-link {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;

    .material-icons {
      font-size: 20px;
      color: #0066FF;
    }

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  &__callback {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    transition: color 0.3s;
    margin: 0 0 16px;

    .material-icons {
      font-size: 20px;
      color: #0066FF;
    }

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  &__cta {
    display: inline-block;
    padding: 12px 24px;
    background: #0066FF;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    transition: background-color 0.3s;
    min-width: 160px;

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
  .footer {
    &__content {
      grid-template-columns: repeat(2, 1fr);
    }

    &__left {
      grid-column: 1;
      grid-row: 1;
    }

    &__center {
      grid-column: 1;
      grid-row: 2;
    }

    &__right {
      grid-column: 2;
      grid-row: 2;
    }

    &__contact {
      grid-column: 2;
      grid-row: 1;
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .footer {
    padding: 40px 0;

    &__content {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    &__left,
    &__center,
    &__right,
    &__contact {
      grid-column: 1;
    }

    &__left {
      grid-row: 1;
      text-align: center;
    }

    &__center {
      grid-row: 2;
    }

    &__right {
      grid-row: 3;
    }

    &__contact {
      grid-row: 4;
    }

    &__logo {
      margin: 0 auto;
    }

    &__nav-title {
      margin-bottom: 16px;
    }

    &__nav-list {
      gap: 12px;
    }
  }
}
</style>