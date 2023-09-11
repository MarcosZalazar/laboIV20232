export class Usuario {

  nombreUsuario:string = '';
  passwordUsuario:string = '';

  constructor() { }

  public registrarUsuario(usuario:string, password:string){
    localStorage.setItem(usuario, password);
  }

  public loguearUsuario(usuario:string, password:string){
    let passBBDD = localStorage.getItem(usuario);
    let resultado: Boolean = false;

    if(passBBDD && (password === passBBDD)){
      resultado = true;
    }
    
    return resultado;
  }
}
