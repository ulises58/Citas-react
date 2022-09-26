const ListadoPacientes = () =>{
    return(
        <div className="w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
                
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">Solo vino</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">El cacas</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-normal normal-case">caca@gmasil.com</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
                    <span className="font-normal normal-case">10 1993</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                    <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellendus dolorum modi dolor, labore aliquid culpa iusto optio aliquam quaerat saepe fugiat ab necessitatibus explicabo veritatis, et officia? Cupiditate, unde.</span>
                </p>

            </div>
        </div>
    )
}

export default ListadoPacientes;