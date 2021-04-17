import React from 'react';

function Accordion(props) {

    return (
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                            Contenido no apto para cardiacos
                        </button>
                    </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                     data-parent="#accordionExample">
                    <div className="card-body">
                    El alcalde Jaime Pumarejo aseguró que la nueva estrategia de seguridad, que comenzó como un piloto, contempla el funcionamiento de doce drones de alta tecnología para vigilar 
                    los puntos más calientes de las cinco localidades.Los equipos son de alta tecnología, con mirada nocturna, movimiento silencioso y con comunicación directa con la central de la 
                    Policía para tener una reacción más rápida de la Policía para atender los casos.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;