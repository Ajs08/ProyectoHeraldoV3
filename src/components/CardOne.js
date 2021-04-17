import React from 'react';

function CardOne(props) {

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://source.unsplash.com/user/erondu/300x300" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Sube porcentaje de barranquilleros dispuestos a vacunarse contra la covid</h5>
                            
                        <p className="card-text text-justify">Datos de la encuesta Pulso Social del Departamento Administrativo Nacional de Estadística (DANE) 
                        indican que de cada 100 personas en Barranquilla, 67 estarían dispuestas a vacunarse contra la covid-19. La capital del 
                        Atlántico es la cuarta del país con mayor disposición a recibir la vacunación, mientras que la primera es Riohacha con el 72,5% y 
                        la última Cali con 42,2%.</p>

                        <p className="card-text text-justify">A nivel nacional el aumento de personas dispuestas a recibir la vacuna es significativo y pasó de 59,9% 
                        en diciembre de 2020 a 64,8% enero de 2021. Cabe señalar que enero aún no habían llegado los primeros lotes de vacunas al país, 
                        pero ya el Gobierno había anunciado el inicio del Plan Nacional de Vacunación.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardOne;