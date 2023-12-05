import { Button, TextField } from "@mui/material"
import './index.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const AtualizarCliente = () => {
    const { id } = useParams();

    useEffect(() => {
        alert(`Parâmentro recebido ${id}`)
    }, [])

    return <>
        <div className="body">
            <div className="box">
                <div className="box-input">
                    <TextField fullWidth variant="outlined" label='ID' />
                </div>
                <div className="box-input">
                    <TextField fullWidth variant="outlined" label='NOME' />
                </div>
                <div className="box-input">
                    <Button fullWidth variant="contained">Teste</Button>
                </div>
            </div>
        </div>
    </>
}

export default AtualizarCliente