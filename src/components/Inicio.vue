<template>

  <div class="container perfil">


    <div class="datos">
      <div class="sobremi">
      <img id="imagen" src="../../img/v.png" alt="">
      <p id="nombre">Nicolas Figueredo</p>
      <p id="rol">Back-end Developer, Desinger</p>
      <p id="ciudad">Berazategui</p>
      <div class="botones">
      <button @click="abrirCorreo" id="contactar" type="button" class="btn btn-secondary">Contactar Email</button>
      <a href="https://github.com/NicolasFigueredoo" target="_blank"><button type="button" class="btn btn-secondary iconBrands"><font-awesome-icon icon="fa-brands fa-github" /></button></a>
      <a href="https://www.linkedin.com/in/nicolasfigueredo/" target="_blank"><button type="button" class="btn btn-secondary iconBrands"><font-awesome-icon icon="fa-brands fa-linkedin" /></button></a>

    </div>
      </div>

      <div class="skills">
        <p class="titulo">Skills</p>
        <div>
          <button type="button" class="btn btn-secondary skill">HTML</button>
          <button type="button" class="btn btn-secondary skill">CSS</button>
          <button type="button" class="btn btn-secondary skill">Bootstrap</button>
          <button type="button" class="btn btn-secondary skill">Javascript</button>
          <button type="button" class="btn btn-secondary skill">Jquery</button>
          <button type="button" class="btn btn-secondary skill">PHP</button>
          <button type="button" class="btn btn-secondary skill">Laravel</button>
          <button type="button" class="btn btn-secondary skill">Vue.Js</button>
          <button type="button" class="btn btn-secondary skill">ChartJs</button>
          <button type="button" class="btn btn-secondary skill">Mysql</button>
          <button type="button" class="btn btn-secondary skill">HeidiSql</button>
          <button type="button" class="btn btn-secondary skill">Photoshop</button>
          <button type="button" class="btn btn-secondary skill">Canvas</button>
        </div>
      </div>

      <div class="experiencias">
        <p class="titulo">Experiencia</p>
        <div class="row">
          <div class="col-lg-4 experenciaDate">
            <div>
              <a href="https://osole.com.ar/" target="_blank"><button type="button" class="btn btn-secondary botonIcono"><font-awesome-icon class="icon" icon="fa-solid fa-desktop" /></button></a>
              <p class="tituloExp">OSOLE</p>
              <p class="tiempoExp">Abril - Actualidad</p>
              <a href="https://osole.com.ar/" target="_blank" style="text-decoration: none;">Ver empresa</a>
            </div>
          </div>

          <div class="col-lg-4 experenciaDate">
            <div>
              <a href="https://mlplak.com/wordpress/" target="_blank"><button type="button" class="btn btn-secondary botonIcono"><font-awesome-icon class="icon" icon="fa-solid fa-desktop" /></button></a>
              <p class="tituloExp">MlPlak</p>
              <p class="tiempoExp">Noviembre - Abril 2022</p>
              <a href="https://mlplak.com/wordpress/" target="_blank" style="text-decoration: none;">Ver empresa</a>

            </div>
          </div>

          <div class="col-lg-4 experenciaDate">
            <div>

              <a href="https://cyberargsistemas.com.ar/" target="_blank"><button type="button" class="btn btn-secondary botonIcono"><font-awesome-icon class="icon" icon="fa-solid fa-desktop" /></button></a>
              <p class="tituloExp">CyberArg Systemas</p>
              <p class="tiempoExp">Abril - Octubre 2023</p>
              <a href="https://cyberargsistemas.com.ar/" target="_blank" style="text-decoration: none;">Ver empresa</a>
            </div>

          </div>
        </div>
      </div>

    </div>

 
    
  

    <div class="proyectosTerminados">
    <p>Proyectos</p>

    <div class="proyectos">
      <div v-for="proyecto in proyectos" :key="proyecto.nombre" class="proyecto">
        <img class="imgProyecto" :src="proyecto.imagen" :alt="proyecto.nombre">
        <p class="nombreProyecto">{{ proyecto.nombre }}</p>
        <div class="botones">
          <a v-if="proyecto.urlProyecto" :href="proyecto.urlProyecto" target="_blank">
            <button id="explorarProyectos" type="button" class="btn btn-secondary">Ver Proyecto</button>
          </a>
     
        </div>
      </div>
    </div>
  </div>

    
    
</div>

<div class="whatsapp-container">
      <a href="https://wa.me/+541150483561" class="whatsapp-btn" target="_blank">
      <img class='img-fluid' src="imagenes/wp-logo.png" alt="WhatsApp">
      </a>
    </div>
</template>


<script>
export default {
  name: 'InicioPage',
  data() {
    return {
      proyectos: []
    };
  },
  methods: {
    async cargarProyectos() {
      try {
        const response = await fetch('/proyectos.json');  // Asegúrate de que la ruta sea correcta
        const data = await response.json();
        this.proyectos = data;
      } catch (error) {
        console.error('Error al cargar los proyectos:', error);
      }
    },
    abrirCorreo() {
      const destinatario = 'nicofigueredo02@outlook.com';
      const asunto = 'Portafolio';
      const cuerpo = 'Hola buenas me comunico desde la web';
      const enlaceCorreo = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
      window.location.href = enlaceCorreo;
    }
  },
  mounted() {
    this.cargarProyectos();
  }
}
</script>

<style scoped>

.whatsapp-btn img {
  width: 45px;
  height: 45px;
  padding: 5px;
}

.whatsapp-container {
position: fixed;
bottom: 55px;
right: 33px;
z-index: 99;
}

.whatsapp-btn {
  position: absolute;
  bottom: 10px;
  right: -10px;
  width: 70px;
  height: 70px;
  background-color: #22BE4A;
  color: #FFF;
  border-radius: 50%;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

/* .whatsapp-btn {
  display: inline-block;
  background-color: #25D366;
  color: #fff;
  padding: 10px 15px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s ease;
} */

.whatsapp-btn:hover {
  background-color: #128C7E;
}

.perfil {
margin-left: 200px;
margin-top: 50px;
padding-top: 30px;
padding-left: 30px;
height: 50vh;
background-color: white;
}

.sobremi{
background-color: white;
width: 300px;

}

#imagen{
width: 150px;
height: 150px;
border-radius: 10px;
}

#nombre{
  font-size: 22px;
  font-weight: bold;
  color: #121417;
  margin-top: 10px;
  margin-bottom: 0px;
}

#rol{
  font-size: 16px;
  font-weight: 500;
  color: #637587;
  margin-bottom: 0px;

}

#ciudad{
font-size: 16px;
  font-weight: 500;
  color: #637587;
  margin-bottom: 0px;
}

.botones {
display: flex;
margin-bottom: 0px;
margin-top: 20px;
}

.btn {
margin-right: 10px; 
}

#explorarProyectos{
background-color: #F0F2F5; 
font-weight: bold;
font-size: 14px;
color: #121417;
border: none;
border-radius: 10px;
height: 40px;

}

#contactar{
font-weight: bold;
font-size: 14px;
border: none;
border-radius: 10px;
height: 40px;
}

.proyectosTerminados{
margin-top: 40px;
font-weight: bold;
font-size: 18px;
}

.proyectos{
display: flex;
}
.proyecto{
margin-right: 20px;
}

.imgProyecto{
width: 300px;
height: 150px;
border-radius: 15px;
}

.nombreProyecto{
margin-top: 20px;
font-size: 15px;
color: #637587;
}

.datos{
display: flex;
}

.skills{
width: 40%;

}
.skill{
margin-right: 20px;
margin-bottom: 20px;
background-color: #F0F2F5; 
font-weight: 600;
font-size: 14px;
color: #121417;
border: none;
border-radius: 10px;
height: 40px;

}

.titulo{
font-weight: bold;
font-size: 18px;
color: #121417;
}

.icon{

background-color: #F0F2F5;
font-size: 30px;
}
.botonIcono{
width: 70px;
height: 70px;
background-color: #F0F2F5;
}

.experenciaDate{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 600;
}

.tituloExp{
margin-top: 10px;
margin-bottom: 0px;
color: #121417;
}
.experiencia{
display: flex;

}
.puestoExp{
margin-bottom: 0px;
}
.tiempoExp{
margin-bottom: 0px;
color: #637587;
}
.iconBrands{
background-color: #F0F2F5;
border: none;
color: #121417;
font-size: 20px;
}


.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.whatsapp-button img {
  width: 60px; 
  height: auto;
}

.botonWhatssap{
background-color: #01F45E;
border: none;
border-radius: 50px;
width: 80px;
height: 80px;
font-size: 40px;
}

@media only screen and (max-width: 760px) {
.perfil{
  margin-left: 0px;

}
.datos{
  display: flex;
  flex-direction: column;
}

.skills{
  width: 100%;
  margin-top: 20px;
}

.experiencia{
  display: flex;
  flex-direction: column;
  margin-left: 0px;
 }


.proyectos{
  display: flex;
  flex-direction: column;
}

.experenciaDate{
  margin-top: 10px;
}


}
</style>

