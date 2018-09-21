import { Injectable } from '@angular/core';

@Injectable()
export class ListaAudiosService {

/*
/ agregar nuevo audio o nueva lista
*/
	eSolutions = [
    {displayName:'Marteeen', src:'marteeen'},
	{displayName:'Invente!', src:'invente'},
	{displayName:'Invente Román!', src:'inventeRoman'},
	{displayName:'Caso cerrado 1!', src:'yvo_casocerrado'},
	{displayName:'Caso cerrado 2!', src:'yvo_casocerrado1'},
	{displayName:'He dicho!', src:'yvo_hedicho'},
	{displayName:'Votamos?', src:'votamos'},
	{displayName:'Nadamá', src:'adam_nadama'},
	{displayName:'Chauchiques', src:'adam_chau'}
  ];
  
  biancho = [
    {displayName:'Anoder Birdei', src:'agu_anoder_birdei'},
	{displayName:'Friendcito1', src:'agu_friendcito'},
	{displayName:'Friendcito2', src:'agu_friendcito1'},
	{displayName:'Ayyy Agustin', src:'agu_ay_agustin'},
	{displayName:'Vida de mier', src:'agu_vida_de_mier'},
	{displayName:'Qué ganas ..', src:'agu_que_ganas'},
	{displayName:'Está rompido', src:'agu_esta_rompido'},
	{displayName:'Boludo', src:'agu_boludo'}
  ];

  clasicos = [
    {src: 'gemido', displayName:'gemido'},
	{src: 'choro_loreventas', displayName:'lo reventas'},
    {src: 'choro_zapateas', displayName:'lo zapateas'},
    {src: 'choro_granflauta', displayName:'gran flauta'},
    {src: 'choro_inimputable', displayName:'inimputable'},
    {src: 'volo', displayName:'y voló'},
	{src: 'sabersubirybajar', displayName:'subí y bajá'},
    {src: 'cocosily', displayName:'iiihhh'},
    {src: 'delfin_nopuedeser', displayName:'No puede ser!'},
	{src: 'ysihijo', displayName:'Y si hijo!'},
  ];

/*
/ Agregar hot-key
*/
public hotKeys = {
  '81': 'gemido',
  '87': 'choro_loreventas',
  '69': 'choro_zapateas',
  '82': 'choro_granflauta',
  '84': 'choro_inimputable',
  '89': 'volo',
  '85': 'sabersubirybajar',
  '73': 'cocosily',
  '79': 'delfin_nopuedeser',
  '80': 'ysihijo',
  '65': 'marteeen',
  '83': 'invente',
  '68': 'inventeRoman',
  '70': 'yvo_casocerrado',
  '71': 'yvo_casocerrado1',
  '72': 'yvo_hedicho',
  '74': 'votamos',
  '75': 'adam_nadama',
  '76': 'adam_chau',
  '90': 'agu_anoder_birdei',
  '88': 'agu_friendcito',
  '67': 'agu_friendcito1',
  '86': 'agu_ay_agustin',
  '66': 'agu_vida_de_mier',
  '78': 'agu_que_ganas',
  '77': 'agu_esta_rompido',
  '188': 'agu_boludo',
  '97': 'adam_eee',
  '98': 'adam_em',
  '103': 'yvo_casocerrado2',
  '104': 'votamos1',
  '105': 'agu_ay_agustin1',
};

 public combinedHotKeys = {

};

  public getObjetoHotKeys(){
    return this.hotKeys;
  }
  public getObjetoHotKeysCombinadas(){
    return this.combinedHotKeys;
  }
 
  public getListaESolutions(){
    return this.eSolutions;
  }

  public getListaClasicos(){
    return this.clasicos;
  }
  
  public getListaBiancho(){
    return this.biancho;
  }


}
