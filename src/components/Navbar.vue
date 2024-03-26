<template>
    <nav class="navbar navbar-expand-lg style= background-color: white;">
  <div class="container-fluid">
    <router-link id="logo" class="navbar-brand" to="/"><font-awesome-icon style="margin-right: 5px;" icon="fa-solid fa-diamond"/>Portafolio</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="opciones" class="navbar-nav me-auto mb-2 mb-lg-0 ml-5">

        <li class="nav-item">
            <router-link class="nav-link" to="/"></router-link>
        </li>
      </ul>
      <form class="d-flex iconos">
        <!-- <button @click="clickCambioColor" type="button" class="btn btn-primary botonIcono"><font-awesome-icon class="icon" icon="fa-regular fa-moon" /></button> -->
      </form>
    </div>
  </div>
</nav>

  </template>
  
 
  <script>
  export default {
    name: 'NavbarPage',

  }
  
  </script>
   <style>
    @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');
   </style>

  <style>
  .navbar{
    border-bottom: 2px solid #E5E8EB;
  }
  #opciones{
    font-size: 14px;
    font-weight: 500;
    color: #121417;
  }
  #logo{
    margin-left: 50px;
    font-size: 18px;
    font-weight: bold;
    color: #121417;
  }

  .iconos{
    margin-right: 50px;
  }
  .botonIcono{
    background-color: #F0F2F5 !important;
    border: none !important;
    color: #121417 !important;
    height: 35px;
    width: 40px;
    }
    .icon{
      font-size: 18px;
    }

    @media only screen and (max-width: 760px) {

      #logo{
        margin-left: 0px;

      }
    }
  </style>
