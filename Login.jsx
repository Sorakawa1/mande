import React, { useState, useEffect } from "react";


const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const imagen1 = {
        backgroundImage: "url(https://cdn1.epicgames.com/offer/d2d162953fec40e381867d7af8371362/EGS_HonkaiImpact3rd_miHoYoLimited_S1_2560x1440-a6e1564d1ae4816e191b1848c94ab718)",
        width: "2560px",
        height: "1440px"
    };

    return(
        <section className="vh-100 gradient-custom">
            <div style={imagen1}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card-body p-3 text-center card bg-dark text-white">
                            <form className="">
                                <h1 className="fw-bold mb-2 text-uppercase">Login</h1>
                                <div className="">
                                    <label className="col-sm-2 col-form-label">Usuario</label>
                                    <div className="form-control-lg">
                                        <input
                                            type="text"
                                            className="input"
                                            value={usuario}
                                            onChange={(e) => setUsuario(e.target.value)}
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <label className="col-sm-3 col-form-label">Contraseña</label>
                                    <div className="form-control-lg">
                                        <input
                                            type="password"
                                            className="input"
                                            value={clave}
                                            onChange={(e) => setClave(e.target.value)}
                                            placeholder="******"
                                        />
                                    </div>
                                </div>
                                <div className="pt-3"> 
                                    <input
                                    type="submit"
                                    className="btn btn-outline-light btn-lg px-5"
                                    value="Ingresar"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Login;