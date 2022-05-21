import { Injectable } from '@angular/core';
import { Sound } from '../classes/Sound';

@Injectable()
export class AudioListService {

  private eSolutions = [
    new Sound('Marteeen', 'marteeen'),
    new Sound('Invente!', 'invente'),
    new Sound('Invente Román!', 'inventeRoman'),
    new Sound('Caso cerrado 1!', 'yvo_casocerrado'),
    new Sound('Caso cerrado 2!', 'yvo_casocerrado1'),
    new Sound('He dicho!', 'yvo_hedicho'),
    new Sound('Votamos?', 'votamos'),
    new Sound('Nadamá', 'adam_nadama'),
    new Sound('Chauchiques', 'adam_chau'),
  ];

  private biancho = [
    new Sound('Anoder Birdei', 'agu_anoder_birdei'),
    new Sound('Friendcito1', 'agu_friendcito'),
    new Sound('Friendcito2', 'agu_friendcito1'),
    new Sound('Ayyy Agustin', 'agu_ay_agustin'),
    new Sound('Vida de mier', 'agu_vida_de_mier'),
    new Sound('Qué ganas ..', 'agu_que_ganas'),
    new Sound('Está rompido', 'agu_esta_rompido'),
    new Sound('Boludo', 'agu_boludo'),
  ];

  private classics = [
    new Sound('gemido', 'gemido'),
    new Sound('choro_loreventas', 'lo reventas'),
    new Sound('choro_zapateas', 'lo zapateas'),
    new Sound('choro_granflauta', 'gran flauta'),
    new Sound('choro_inimputable', 'inimputable'),
    new Sound('volo', 'y voló'),
    new Sound('sabersubirybajar', 'subí y bajá'),
    new Sound('cocosily', 'iiihhh'),
    new Sound('delfin_nopuedeser', 'No puede ser!'),
    new Sound('ysihijo', 'Y si hijo!'),
    new Sound('el-taco-no_ampli', 'El taco no!'),
    new Sound('relato-gol_ampli', 'Relato 3-1'),
    new Sound('river-3-boca-1_amplificado', 'River 3-1 Boca'),
    new Sound('va-el-tercero_loop', 'Y va el tercero!'),
  ];

  private _hotKeys = {
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

  public _hotkeysWithCtrlPressed = {};

  get hotkeys() {
    return this._hotKeys;
  }

  get hotkeysWithCtrlPressed() {
    return this._hotkeysWithCtrlPressed;
  }

  get eSolutionsSounds() {
    return this.eSolutions;
  }

  get classicsSounds() {
    return this.classics;
  }

  get bianchoSounds() {
    return this.biancho;
  }


}
