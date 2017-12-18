<template>
  <!-- <div id="sidedrawer" class="mui--no-user-select">
    <div id="sidedrawer-brand" class="mui--appbar-line-height">
      <span class="mui--text-title">PWA Exchange</span>
    </div>
    <div class="mui-divider"></div>
    <ul>
      <li>
        <strong><router-link to="/" >Tableau de board</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/profile" >Profil</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/wallet" >Portefeuille</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/market" >Marché</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/order" >Ordre</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/history" >Mouvements</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/orderInProgress" >Ordres en cours</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/palmares" >Palmares</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/news" >News</router-link></strong>
      </li>
      <li>
        <strong><router-link to="/login">Logout</router-link></strong>
      </li>

    </ul>
  </div> -->
  <!-- <div class="two wide column"> 
            <div class="ui container">
                <div class="ui secondary large vertical pointing fluid menu">
                    <a class="ui simple dropdown item">
                        Achats
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <a class="item"><i class="file text icon"></i> Devis</a>
                            <a class="item"><i class="file text icon"></i> Commande</a>
                            <a class="item"><i class="file text icon"></i> Bon de livraison</a>
                            <a class="item"><i class="file text icon"></i> Avoir</a>
                        </div>
                    </a>
                    <a class="ui simple dropdown item">
                        Ventes
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <a class="item"><i class="file text icon"></i> Devis</a>
                            <a class="item"><i class="file text icon"></i> Commande</a>
                            <a class="item"><i class="file text icon"></i> Bon de livraison</a>
                            <a class="item"><i class="file text icon"></i> Avoir</a>
                        </div>
                    </a>
                    <a class="item">
                        Réglements
                    </a>
                    <a class="item">
                        Inventaire
                    </a>
                    <a class="item">
                        Clôture
                    </a>
                </div>
            </div>
        </div>-->
  <div>
    <a class="item"><router-link to="/" >Tableau de board</router-link></a>
    <a class="item"><router-link to="/profile" >Profil</router-link></a>
    <a class="item"><router-link to="/wallet" >Portefeuille</router-link></a>
    <a class="item"><router-link to="/market" >Marché</router-link></a>
    <a class="item"><router-link to="/order" >Ordre</router-link></a>
    <a class="item"><router-link to="/history" >Mouvements</router-link></a>
    <a class="item"><router-link to="/orderInProgress" >Ordres en cours</router-link></a>
    <a class="item"><router-link to="/palmares" >Palmares</router-link></a>
    <a class="item"><router-link to="/news" >News</router-link></a>
    <a class="item"><router-link to="/login">Logout</router-link></a>
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  name: "sidebar",
  methods: {
    ...Vuex.mapActions(["logout"])
  },
  computed: {
    ...Vuex.mapGetters(["isLoggedIn"])
  }
};
</script>
<style scoped>
/**
   * Side drawer CSS
   */
#sidedrawer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 200px;
  left: -200px;
  overflow: auto;
  z-index: 2;
  background-color: #fff;
  transition: transform 0.2s;
}

#sidedrawer-brand {
  padding-left: 20px;
}

#sidedrawer ul {
  list-style: none;
}

#sidedrawer > ul {
  padding-left: 0px;
}

#sidedrawer > ul > li:first-child {
  padding-top: 15px;
}

#sidedrawer strong {
  display: block;
  padding: 15px 22px;
  cursor: pointer;
}

#sidedrawer strong:hover {
  background-color: #e0e0e0;
}

#sidedrawer strong + ul > li {
  padding: 6px 0px;
}

/**
       * Toggle Side drawer
   */
#sidedrawer.active {
  transform: translate(200px);
}

@media (min-width: 768px) {
  #sidedrawer {
    transform: translate(200px);
  }
  body.hide-sidedrawer #sidedrawer {
    transform: translate(0px);
  }
}
</style>
