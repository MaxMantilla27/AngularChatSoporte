import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulaVirtualRoutingModule } from './aula-virtual-routing.module';
import { AulaVirtualComponent } from './aula-virtual.component';
import { SharedModule } from '../Core/Shared/shared.module';
import { CuentaComponent } from './cuenta/cuenta.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../Public/Interceptor/interceptor.service';
import { CuentaMiPerfilComponent } from './cuenta/cuenta-mi-perfil/cuenta-mi-perfil.component';
import { CuentaMisPagosComponent } from './cuenta/cuenta-mis-pagos/cuenta-mis-pagos.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { CambiarContraComponent } from './cambiar-contra/cambiar-contra.component';
import { MyHttpInterceptor } from './http.interceptor';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AvatarComponent } from './avatar/avatar.component';
import { IndicacionesContentComponent } from './curso/indicaciones-content/indicaciones-content.component';
import { IndicacionesOptionsContentComponent } from './curso/indicaciones-options-content/indicaciones-options-content.component';
import { CursoModulosComponent } from './curso/curso-modulos/curso-modulos.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ModuloSesionesComponent } from './modulo/modulo-sesiones/modulo-sesiones.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { ModuloSilaboComponent } from './modulo/modulo-silabo/modulo-silabo.component';
import { ModuloForoComponent } from './modulo/modulo-foro/modulo-foro.component';
import { ModuloForoInsertComponent } from './modulo/modulo-foro/modulo-foro-insert/modulo-foro-insert/modulo-foro-insert.component';
import { SesionVideoComponent } from './sesiones/sesion-video/sesion-video.component';
import { ModuloForoContenidoComponent } from './modulo/modulo-foro/modulo-foro-contenido/modulo-foro-contenido.component';
import { SesionTareaComponent } from './sesiones/sesion-tarea/sesion-tarea.component';
import { CursoProyectoComponent } from './curso/curso-proyecto/curso-proyecto.component';
import { ModuloRecursoComponent } from './modulo/modulo-recurso/modulo-recurso.component';
import { ModuloCalificacionesComponent } from './modulo/modulo-calificaciones/modulo-calificaciones/modulo-calificaciones.component';
import { BeneficiosComponent } from './curso/beneficios/beneficios/beneficios.component';
import { ModuloWebinarsComponent } from './modulo/modulo-webinars/modulo-webinars/modulo-webinars.component';
import { SesionEncuestaComponent } from './sesiones/sesion-encuesta/sesion-encuesta.component';
import { CursoCertificadoComponent } from './curso/curso-certificado/curso-certificado.component';
import { CursoTramitesComponent } from './curso/curso-tramites/curso-tramites/curso-tramites.component';
import { CursoCertificadoDigitalComponent } from './curso/curso-certificado-digital/curso-certificado-digital.component';
import { SesionTareaCalificarComponent } from './sesiones/sesion-tarea-calificar/sesion-tarea-calificar.component';
import { CursoCertificadoFisicoComponent } from './curso/curso-certificado-fisico/curso-certificado-fisico.component';
import { DocenciaComponent } from './docencia/docencia.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DocenciaSesionesWebinarComponent } from './docencia/docencia-sesiones-webinar/docencia-sesiones-webinar.component';
import { DocenciaForosComponent } from './docencia/docencia-foros/docencia-foros.component';
import { DocenciaForosModalComponent } from './docencia/docencia-foros/docencia-foros-modal/docencia-foros-modal.component';
import { MisPagosComponent } from './mis-pagos/mis-pagos.component';
import { PagoComponent } from './pago/pago.component';
import { PagoTarjetaComponent } from './pago/pago-tarjeta/pago-tarjeta.component';
import { ConfirmacionPagoTarjetaComponent } from './confirmacion-pago-tarjeta/confirmacion-pago-tarjeta.component';
import { ConfirmacionPagoTarjetaVisaComponent } from './confirmacion-pago-tarjeta-visa/confirmacion-pago-tarjeta-visa.component';
import { ResultadoPagoComponent } from './resultado-pago/resultado-pago.component';
import { CursoPruebaComponent } from './curso-prueba/curso-prueba/curso-prueba.component';
import { CursoPruebaModulosComponent } from './curso-prueba/curso-prueba/curso-prueba-modulos/curso-prueba-modulos/curso-prueba-modulos.component';
import { ModuloPruebaComponent } from './modulo-prueba/modulo-prueba.component';
import { ModuloForoPruebaComponent } from './modulo-prueba/modulo-foro-prueba/modulo-foro-prueba/modulo-foro-prueba.component';
import { ModuloRecursoPruebaComponent } from './modulo-prueba/modulo-recurso-prueba/modulo-recurso-prueba/modulo-recurso-prueba.component';
import { ModuloSilaboPruebaComponent } from './modulo-prueba/modulo-silabo-prueba/modulo-silabo-prueba/modulo-silabo-prueba.component';
import { ModuloSesionesPruebaComponent } from './modulo-prueba/modulo-sesiones-prueba/modulo-sesiones-prueba/modulo-sesiones-prueba.component';
import { ModuloForoContenidoPruebaComponent } from './modulo-prueba/modulo-foro-prueba/modulo-foro-prueba/modulo-foro-contenido-prueba/modulo-foro-contenido-prueba/modulo-foro-contenido-prueba.component';
import { SesionesPruebaComponent } from './sesiones-prueba/sesiones-prueba.component';
import { SesionesVideoPruebaComponent } from './sesiones-prueba/sesiones-video-prueba/sesiones-video-prueba/sesiones-video-prueba.component';
import { ModuloAyudaComponent } from './modulo/modulo-ayuda/modulo-ayuda/modulo-ayuda.component';
import { ModuloAyudaPreguntasFrecuentesComponent } from './modulo/modulo-ayuda/modulo-ayuda/modulo-ayuda-preguntas-frecuentes/modulo-ayuda-preguntas-frecuentes/modulo-ayuda-preguntas-frecuentes.component';
import { ModuloAyudaQuejasSugerenciasComponent } from './modulo/modulo-ayuda/modulo-ayuda/modulo-ayuda-quejas-sugerencias/modulo-ayuda-quejas-sugerencias/modulo-ayuda-quejas-sugerencias.component';
import { RegistrarErrorComponent } from './sesiones/sesion-video/registrar-error/registrar-error/registrar-error.component';
import { VigenciaAccesoPruebaComponent } from './mis-cursos/vigencia-acceso-prueba/vigencia-acceso-prueba/vigencia-acceso-prueba.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico/soporte-tecnico.component';


@NgModule({
  declarations: [
    AulaVirtualComponent,
    CuentaComponent,
    CuentaMiPerfilComponent,
    CuentaMisPagosComponent,
    MiPerfilComponent,
    CambiarContraComponent,
    MisCursosComponent,
    CursoComponent,
    IndicacionesContentComponent,
    IndicacionesOptionsContentComponent,
    CursoModulosComponent,
    AvatarComponent,
    ModuloComponent,
    ModuloSesionesComponent,
    SesionesComponent,
    ModuloSilaboComponent,
    ModuloForoComponent,
    ModuloForoInsertComponent,
    SesionVideoComponent,
    ModuloForoContenidoComponent,
    SesionTareaComponent,
    CursoProyectoComponent,
    ModuloRecursoComponent,
    ModuloCalificacionesComponent,
    BeneficiosComponent,
    ModuloWebinarsComponent,
    SesionEncuestaComponent,
    CursoCertificadoComponent,
    CursoTramitesComponent,
    CursoCertificadoDigitalComponent,
    SesionTareaCalificarComponent,
    CursoCertificadoFisicoComponent,
    DocenciaComponent,
    ErrorPageComponent,
    DocenciaSesionesWebinarComponent,
    DocenciaForosComponent,
    DocenciaForosModalComponent,
    MisPagosComponent,
    PagoComponent,
    PagoTarjetaComponent,
    ConfirmacionPagoTarjetaComponent,
    ConfirmacionPagoTarjetaVisaComponent,
    ResultadoPagoComponent,
    CursoPruebaComponent,
    CursoPruebaModulosComponent,
    ModuloPruebaComponent,
    ModuloForoPruebaComponent,
    ModuloRecursoPruebaComponent,
    ModuloSilaboPruebaComponent,
    ModuloSesionesPruebaComponent,
    ModuloForoContenidoPruebaComponent,
    SesionesPruebaComponent,
    SesionesVideoPruebaComponent,
    ModuloAyudaComponent,
    ModuloAyudaPreguntasFrecuentesComponent,
    ModuloAyudaQuejasSugerenciasComponent,
    RegistrarErrorComponent,
    VigenciaAccesoPruebaComponent,
    CategoriaComponent,
    SoporteTecnicoComponent,

  ],
  imports: [
    CommonModule,
    AulaVirtualRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
  ],
  exports:[
    VigenciaAccesoPruebaComponent
  ]
})
export class AulaVirtualModule { }
