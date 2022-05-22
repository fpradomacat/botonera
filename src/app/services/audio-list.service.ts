import { Injectable } from '@angular/core';
import { Sound } from '../classes/Sound';

@Injectable()
export class AudioListService {

  private eSolutions = [
    new Sound('marteeen', 'Marteeen'),
    new Sound('invente', 'Invente!'),
    new Sound('inventeRoman', 'Invente Román!'),
    new Sound('yvo_casocerrado', 'Caso cerrado 1!'),
    new Sound('yvo_casocerrado1', 'Caso cerrado 2!'),
    new Sound('yvo_hedicho', 'He dicho!'),
    new Sound('votamos', 'Votamos?'),
    new Sound('adam_nadama', 'Nadamá'),
    new Sound('adam_chau', 'Chauchiques'),
  ];

  private biancho = [
    new Sound('agu_anoder_birdei', 'Anoder Birdei'),
    new Sound('agu_friendcito', 'Friendcito1'),
    new Sound('agu_friendcito1', 'Friendcito2'),
    new Sound('agu_ay_agustin', 'Ayyy Agustin'),
    new Sound('agu_vida_de_mier', 'Vida de mier'),
    new Sound('agu_que_ganas', 'Qué ganas ..'),
    new Sound('agu_esta_rompido', 'Está rompido'),
    new Sound('agu_boludo', 'Boludo'),
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
