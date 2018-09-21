import React, { Component } from 'react';
import NextButton from './Buttons/NextButton';

class Saori extends Component {
  render() {
    return (
      <div>
      <header>
          <h2> Developer </h2>

              <h3> Javascript + Ruby on Rails </h3>
                    <a href = "https://github.com/SaoriKiiki"> My Github</a>
                    <a href = "https://www.linkedin.com/in/saori-tovar-64890b166/"> My Linkedin</a>

                    <h4> 3108557561 </h4>
                    <h5> saorikiiki@gmail.com </h5>

                  <p className= "saori"> Cuando entré a estudiar arte en Los Andes, la ciencia y la tecnología siempre me acompañaron hasta hoy que son mi oficio y mi vida. Desde que empecé a trabajar mi experiencia se ha destacado por mis resultados y mi espíritu colaborador. Mis primeros pasos en desarrollo de sistemas fueron con HTML y CSS, ahora me dedico a la integración de aplicaciones web que toman en cuenta la experiencia y la interacción del usuario para nutrir sus bases de datos SQL. Con Ruby on Rails, entiendo la lógica de la información. También puedo generar interfaces con formatos en Javascript editables, actuales, concretos y relevantes. Estoy acostumbrada a aprender de mis compañeros de trabajo y también a recibir sus comentarios sobre mis aplicaciones. Mis amigos me recuerdan porque soy comunicativa y me gusta aplicar la ciencia para que la vida sea más abundante y alegre.
                  Hablo inglés y francés, me gustan las obras de arte, amo leer y escribir.
                  </p>
                  <NextButton next= "gologros"/>
      </header>
      </div>
    )
  }
}

export default Saori;
