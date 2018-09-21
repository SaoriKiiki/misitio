import React, { Component } from 'react';
import NextButton from './Buttons/NextButton';

class Educacion extends Component {
  render() {
    return (
      <div id="goeduc">
          <hgroup>
                <h5>Universidad de los Andes - Artes visuales 2007-2013</h5>
                <h5>Gimnasio Fontana 1998-2007</h5>

                <h4> Idiomas </h4>
                        <h5>Inglés - nivel avanzado</h5>
                        <h5>Francés - nivel conversacional</h5>
                        <h5>Alemán - nivel básico</h5>

                <h4> Diplomados </h4>
                        <h5> Edx Online para Javascript UI UX - JS 2018</h5>
                        <h5>Codepen HTML - CSS 2017</h5>
                        <h5> Ruta emprendedora - Cámara de Comercio 2017</h5>
                        <h5> Zona Cinco - Fotografía Análoga y Digital 2015</h5>
                        <NextButton next="gorefer" />
          </hgroup>
      </div>
    )
  }
}

export default Educacion;
