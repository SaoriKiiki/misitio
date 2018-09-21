import React, { Component } from 'react';
import NextButton from './Buttons/NextButton';

class Experiencia extends Component {
  render() {
    return (
      <div id="goexp">
          <article>
              <h4>BogoDev</h4>
                    <h5>Actual - Fulltime</h5>
                          <p className= "article">Elegí especializarme en desarrollo de sistemas web al ver mi necesidad de evolucionar como diseñadora. Hoy estoy escribiendo código en Javascript con eventos como que el usuario haga click sobre un elemento, lo arrastre y lo mueva dentro del board de la pantalla para posicionarlo en un nuevo lugar. También uso jQuery para crear campos editables, llenar formularios y actualizar los datos en tiempo real. En Bogodev aprendí Ruby on Rails para crear y administrar bases de datos SQL. Aquí se hace un trabajo intensivo donde simulamos recibir encargos de clientes con distintas necesidades. Desarrollé más de seis aplicaciones con usos distintos: algunos proyectos solucionan problemas de transporte, de redes sociales, crean refugios de mascotas, administran gimnasios, entre otros servicios cotidianos. Mi práctica involucra Git y Github para programar en equipo junto a otros ingenieros y científicos de datos.
                          </p>
              <h4>Human Capital</h4>
                  <h5>Diseñadora gráfica y web 2016-2017 - Tiempo completo</h5>
                        <p className= "article">Trabajé con la base de datos, con Wordpress y con la Creative Cloud Suite de Adobe para editar y publicar piezas referentes al sector de recursos humanos, en específico estuve a cargo de un proyecto sobre encuestas salariales que atraen y motivan a los colombianos del 2016.
                        </p>
              <h4> Laguna Libros SAS </h4>
                    <h5>Diseñadora gráfica y web 2011-2015 - Tiempo completo</h5>
                        <p className= "article">Mi primer acercamiento a HTML y CSS fue aquí porque desarrollé su sitio web de la época. En esta Startup Colombiana trabajamos en equipo para publicar las obras de escritores jóvenes en Bogotá. Yo me desenvolví en la parte de diseño gráfico, también aprendí a hablar en público en los lanzamientos de los libros.
                        </p>
                        <NextButton next = "goeduc" />
          </article>
      </div>
    )
  }
}
export default Experiencia;
