<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <div class="logo">
          <a href="/">
            <img src="./images/logo.png" alt="logo"/>
          </a>
        </div>
        <div class="menu">
          <ul>
            <li><a href="/#about-us" class="menu-link">About us</a></li>
            <li><a href="/#write-comment" class="menu-link">Write comment</a></li>
            <li><router-link to="/comments"
                   class="menu-link"
                   id = "menu-link"
            >
              Comments
            </router-link></li>
          </ul>
        </div>
      </div >
      <router-link to="/" tag="span"></router-link>
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import footerComp from './components/Footer';

export default {
  components:{
    appFooter: footerComp
  },
  methods:{

    }
  }
</script>

<style lang="scss">
  @import './css/style.css';
  @import './css/normalize.css';
</style>
