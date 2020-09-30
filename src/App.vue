<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <!-- MENU DE NAVEGACION -->
                <ul class="nav navbar-nav ml-auto" id="menu-v8">
                    <li class="nav-item" role="presentation">
                     <router-link to="/">Portada</router-link>
                      
                    </li>
                    <li class="nav-item" role="presentation">
                      <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                      <router-link :to="{name:'SobreMi'}">Sobre Mi</router-link>
                      
                    </li>
                    <li class="nav-item" role="presentation">
                      <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
                      <router-link to="/contacto">Contacto</router-link>
                      
                    </li>
                    <li class="nav-item" role="presentation">
                      <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
                      <router-link to="/post/1">Último post</router-link>
                      
                    </li>
                </ul>
        </div>
        </div>
    </nav>
    
    <transition name="router-anim" mode="out-in">
    <router-view/>
    </transition>
  </div>
  
</template>

<script>

export default {

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
#menu-v8 a{
  text-shadow: 1px 1px #000;
}
  a {
    font-weight: bold;
    color: #2c3e50;

    router-link-exact-active {
      color: #42b983;
    }
  }

.router-anim-enter-active{
animation:coming .3s;
animation-delay: .2s;
opacity:0;
}
.router-anim-leave-active{
  animation:going .3s;
}
@keyframes going{
0%{
  transform: translateX(0)
}
100%{
  transform: translateX(0px);
  opacity:0;
}
}
@keyframes coming{
  from{
    transform:translateX(0px);
    opacity:0;
  }
  to{
    transform:translateX(0px);
    opacity:1;
  }
}

</style>
