import React from 'react';

function TabList(props) {
    return (
        <div className="row my-3">
            <div className="col-4">
                <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
                       href="#list-home" role="tab" aria-controls="home">Economia</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                       href="#list-profile" role="tab" aria-controls="profile">General</a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                       href="#list-messages" role="tab" aria-controls="messages">Administración</a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                       href="#list-settings" role="tab" aria-controls="settings">Politica</a>
                </div>
            </div>
            <div className="col-8">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                         aria-labelledby="list-home-list"> 1. Tristes y preocupados. Así amanecieron los artesanos que resultaron 
                         afectados por la fuerte brisa que viene golpeando a Barranquilla y el resto de la región Caribe, 
                         y que arrasó la noche del miércoles con las carpas habilitadas para la feria ubicada en el 
                         Gran Malecón del Río. El valor de las pérdidas ocasionadas aún se desconoce, pero los afectados 
                         calculan que son millonarias, ya que algunos de ellos perdieron toda su mercancía, por ejemplo, 
                         los vendedores de dulces tradicionales.
                    </div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel"
                         aria-labelledby="list-profile-list"> 2. Edmond Feris Cure es un barranquillero de 32 años de origen libanés, que se encuentra 
                         trabajando en Estados Unidos en una iniciativa que busca revolucionar los tratamientos contra el cáncer. 
                         Su labor se concentra específicamente en una terapia que tiene como fin inhibir el gen que hace que las 
                         células cancerígenas evadan al sistema inmune del ser humano.
                    </div>
                    <div className="tab-pane fade" id="list-messages" role="tabpanel"
                         aria-labelledby="list-messages-list"> 3. Tristes y preocupados. Así amanecieron los artesanos que resultaron 
                         afectados por la fuerte brisa que viene golpeando a Barranquilla y el resto de la región Caribe, 
                         y que arrasó la noche del miércoles con las carpas habilitadas para la feria ubicada en el 
                         Gran Malecón del Río. El valor de las pérdidas ocasionadas aún se desconoce, pero los afectados 
                         calculan que son millonarias, ya que algunos de ellos perdieron toda su mercancía, por ejemplo, 
                         los vendedores de dulces tradicionales.
                    </div>
                    <div className="tab-pane fade" id="list-settings" role="tabpanel"
                         aria-labelledby="list-settings-list"> 4. Edmond Feris Cure es un barranquillero de 32 años de origen libanés, que se encuentra 
                         trabajando en Estados Unidos en una iniciativa que busca revolucionar los tratamientos contra el cáncer. 
                         Su labor se concentra específicamente en una terapia que tiene como fin inhibir el gen que hace que las 
                         células cancerígenas evadan al sistema inmune del ser humano.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabList;