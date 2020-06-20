import { $qs, $qsa, $on } from './helpers';

export default class Language {
  constructor() {
    this.toEng = $qs('#toeng');
    this.toRu = $qs('#toru');
    this.active;

    this.active = localStorage.getItem('active');
    if (this.active === 'toru') {
      this.changeLanguage(ru, this.toRu, this.toEng)();
    }

    this.changeLanguage = this.changeLanguage.bind(this);

    $on(this.toEng, 'click', this.changeLanguage(eng, this.toEng, this.toRu));
    $on(this.toRu, 'click', this.changeLanguage(ru, this.toRu, this.toEng));
  }

  changeLanguage(lan, newLan, oldLan) {
    return (e) => {
      if (newLan.className !== 'active') {
        localStorage.setItem('active', newLan.id);
        newLan.className = 'active';
        oldLan.className = '';
        if (e) e.preventDefault();
        for (const attr in lan) {
          const els = $qsa(`[data-${attr}]`);
          els.forEach((el) => (el.innerHTML = lan[attr]));
        }
      }
    };
  }
}

const eng = {
  home: 'Home',
  aboutme: 'About me',
  skills: 'Skills',
  portfolio: 'Portfolio',
  contacts: 'Contacts',
  name: 'Denis Novik',
  smallinf: 'UX | UI designer 24 years old, Minsk',
  aboutme1: `Hi, I'm Denis – UX/UI designer from Minsk.<br />
    I'm interested in design and everything connected with it.<br />`,
  aboutme2: `I'm studying at courses "Web and mobile design interfaces"<br />
    in IT-Academy.`,
  aboutme3: `Ready to implement excellent projects<br />
    with wonderful people.`,
  workprog: 'I work in such programs as',
  work1: 'Online fashion store - Homepage',
  work2: 'Reebok Store - Concept',
  work3: 'Braun Landing Page - Concepte',
  chat: `Want to know more or just chat?<br />
    You are welcome!`,
  send: 'Send message',
  like: `Like me on<br />
    LinkedIn, Instagram, Behance, Dribble`,
};
const ru = {
  home: 'Главная',
  aboutme: 'О мне',
  skills: 'Навыки',
  portfolio: 'Портфолио',
  contacts: 'Контакты',
  name: 'Денис Новик',
  smallinf: 'UX | UI дизайнер 24 года, Минск',
  aboutme1: `Привет, Меня зовут Денис, я UX/UI дизайнер из Минска.<br />
    Мне интересен дизайн и все что с ним связано.<br />`,
  aboutme2: `Я учусь на курсах "Web and mobile design interfaces"<br />
    в IT-Academy.`,
  aboutme3: `Готов реализовать отличные проекты<br />
    с замечательными людьми.`,
  workprog: 'Я работаю в таких программах, как:',
  work1: 'Интернет магазин модной одежды - домашняя страница',
  work2: 'Reebok Store - Концепция',
  work3: 'Braun Landing Page - Концепция',
  chat: `Хотите узнать больше или просто пообщаться? <br /> Добро пожаловать!`,
  send: 'Отправить сообщение',
  like: `Я в<br />
    LinkedIn, Instagram, Behance, Dribble`,
};
