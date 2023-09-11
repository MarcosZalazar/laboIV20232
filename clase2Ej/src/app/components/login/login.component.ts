import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../../classes/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  txtNombre:string = '';
  txtPassword:string = '';
  txtNombreARegistrar:string = '';
  txtPasswordARegistrar:string = '';
  txtPassword2ARegistrar:string = '';

  constructor(private router: Router){}
  
  public registrarUsuario(){
    let usuario = new Usuario();
    let formValido= this.validarFormulario(this.txtNombreARegistrar, this.txtPasswordARegistrar,this.txtPassword2ARegistrar);

    if(formValido){
      usuario.registrarUsuario(this.txtNombreARegistrar, this.txtPasswordARegistrar);
      Swal.fire('Usuario registrado correctamente');
      this.limpiarFormulario();
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Alguno de los datos es incorrecto. Verifíquelos e intente nuevamente'
      })
    }
  }

  private validarFormulario(nombreAValidar:string, passwordAValidar:string, password2AValidar:string): Boolean{

    let resultValidacion : Boolean = false;

    if(nombreAValidar != '' && passwordAValidar != '' && password2AValidar != '' && (passwordAValidar===password2AValidar)){
      resultValidacion = true;
    }

    return resultValidacion;
  }

  private limpiarFormulario(){
    this.txtNombreARegistrar = '';
    this.txtPasswordARegistrar = '';
    this.txtPassword2ARegistrar = '';
  }

  public loguearUsuario(){
    let usuario = new Usuario();
    let loginDatosValidos = this.validarDatosLogueo(this.txtNombre, this.txtPassword);

    if(loginDatosValidos){
      let loginValido = usuario.loguearUsuario(this.txtNombre, this.txtPassword);
      
      if(loginValido){
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido!',
          text: 'Usuario logueado correctamente'
        })
        this.limpiarLogin();
        this.router.navigateByUrl("bienvenido");
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña inválidos. Verifíquelos e intente nuevamente'
        })
      }
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incompletos. Verifíquelos e intente nuevamente'
      })
    }
  }

  private validarDatosLogueo(nombreAValidar:string, passwordAValidar:string): Boolean{

    let resultValLogin : Boolean = false;

    if(nombreAValidar != '' && passwordAValidar != ''){
      resultValLogin = true;
    }

    return resultValLogin;
  }

  private limpiarLogin(){
    this.txtNombre = '';
    this.txtPassword = '';
  }
}
