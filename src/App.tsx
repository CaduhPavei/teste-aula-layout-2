import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { BottomNavigation, Button, Dialog, DialogActions, DialogContent, DialogTitle, Pagination, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function App() {
  const [openCadastro, setOpenCadastro]= useState<boolean>(false);
  const [id, setId] = useState<string>();
  const [nome, setNome] = useState<string>();
  const [linha, setLinha] = useState<any[]>([]);
  const navigate = useNavigate();

  const colunas: GridColDef[] = [{field: 'id', headerName: 'ID', width: 20,}, {field: 'nome', headerName: 'NOME', width: 150,},]

  const linhas = [{id: 1, nome: 'Ricardo'}, {id:2, nome: 'Caduh'}]

  const closeCadastro = () =>{ setOpenCadastro(false);}

  const onSalvarCliente = () => {
    const _linha: any[] = [...linha];
    _linha.push({id: Number (id), nome: nome|| ''});
    setLinha(_linha);
    setOpenCadastro(false);
  }

  return (
    <div style={{maxWidth: "100%"}}>
      <header style={{display: "flex"}}>
        <div style={{display: "flex", width: "100%", padding: "27px"}}>
        <h1>
      <img style={{display: "block", width: "100px", height: "59px"}} src="./minilogo-senac.png"/>
        </h1>
      <div style={{display: "flex", alignItems: "center", justifyContent:"center", width: "100%"}}>
        <p style={{fontSize: "35px", color: "#004587"}}>App Layout</p>
      </div>
      </div>
      </header>
      <div style={{display: "flex", backgroundImage:"url(http://localhost:3000/slide_senac.jpg)", height: "295px", backgroundSize: "cover", alignItems: "center", padding: "0 40px"}}>
        <p style={{color: "white", fontSize: "42px"}}>Senac</p>
      </div>
      <div style={{display: 'flex', padding: '5px'}}>
        <Button variant='contained' 
          onClick={()=> {setOpenCadastro(true);}}> Adicionar </Button>
      </div>
      <div style={{display: 'flex'}}>
        <DataGrid rows={linha} columns={colunas} checkboxSelection initialState={{
          pagination: {paginationModel:{pageSize: 5}}
        }} onRowDoubleClick={(t) => {navigate(`/atualizarCliente/${t.id}`);}}/> 
      </div>
      <Dialog open={openCadastro} onClose={closeCadastro}>
        <DialogTitle>Tela de Cadastro</DialogTitle>
        <DialogContent>
            <div style={{width: '100%'}}>
              <TextField margin='dense' fullWidth variant='outlined' label='ID' 
                onChange={(texto) =>{ setId(texto.target.value)}} />
            </div>
            <div style={{width: '100%'}}>
              <TextField fullWidth variant='outlined' label='NOME'
              onChange={(texto) =>{ setNome(texto.target.value)}}/>
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' 
              onClick={() =>{onSalvarCliente()}}>Salvar</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;