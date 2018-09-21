import React, { Component } from 'react';
import NextButton from './Buttons/NextButton';

class Logros extends Component {
  render() {
    return (
      <div id="gologros">
          <section>
                      <p className = "logros"> Soy una mujer independiente de espíritu joven. Desde pequeña me ha gustado mucho trabajar por lo mío y ayudar a los demás a conseguir lo que necesitan. Cuando empecé a aprender a conocer a las personas, sentí la gratitud más grande cuando me di cuenta que en realidad no somos tan distintos como parecemos sino que todos tenemos cosas afines.
                      </p>
          <NextButton next= "goexp" />
          </section>
      </div>
    )
  }
}
export default Logros;
