import React from 'react';

/* en vez de usar Function se puede definir como funcion flecha a componentes que no requieran de
    mucha funcionalidad
*/
const Screen = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Screen;