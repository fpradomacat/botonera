import { Injectable } from '@angular/core';
import { Hotkey } from '../classes/Hotkey';
import { Sound } from '../classes/Sound';

@Injectable()
export class SoundListService {

  private eSolutions = [
    new Sound('marteeen', 'Marteeen', 'a'),
    new Sound('invente', 'Invente!', 's'),
    new Sound('inventeRoman', 'Invente Román!', 'd'),
    new Sound('yvo_casocerrado', 'Caso cerrado 1!', 'f'),
    new Sound('yvo_casocerrado1', 'Caso cerrado 2!', 'g'),
    new Sound('yvo_hedicho', 'He dicho!', 'h'),
    new Sound('votamos', 'Votamos?', 'j'),
    new Sound('adam_nadama', 'Nadamá', 'k'),
    new Sound('adam_chau', 'Chauchiques', 'l'),
  ];

  private biancho = [
    new Sound('agu_anoder_birdei', 'Anoder Birdei', 'z'),
    new Sound('agu_friendcito', 'Friendcito1', 'x'),
    new Sound('agu_friendcito1', 'Friendcito2', 'c'),
    new Sound('agu_ay_agustin', 'Ayyy Agustin', 'v'),
    new Sound('agu_vida_de_mier', 'Vida de mier', 'b'),
    new Sound('agu_que_ganas', 'Qué ganas ..', 'n'),
    new Sound('agu_esta_rompido', 'Está rompido', 'm'),
    new Sound('agu_boludo', 'Boludo', ','),
  ];

  private classics = [
    new Sound('gemido', 'Gemido', 'q'),
    new Sound('choro_loreventas', 'Lo reventas', 'w'),
    new Sound('choro_zapateas', 'Lo zapateas', 'e'),
    new Sound('choro_granflauta', 'Gran flauta', 'r'),
    new Sound('choro_inimputable', 'Inimputable', 't'),
    new Sound('volo', 'Y voló', 'y'),
    new Sound('sabersubirybajar', 'Subí y bajá', 'u'),
    new Sound('cocosily', 'Iiihhh', 'i'),
    new Sound('delfin_nopuedeser', 'No puede ser!', 'o'),
    new Sound('ysihijo', 'Y si hijo!', 'p'),
    new Sound('el-taco-no_ampli', 'El taco no!', 'a', true),
    new Sound('relato-gol_ampli', 'Relato 3-1', '1'),
    new Sound('river-3-boca-1_amplificado', 'River 3-1 Boca', '1', true),
    new Sound('va-el-tercero_loop', 'Y va el tercero!', ''),
  ];

  get eSolutionsSounds(): Sound[] {
    return this.eSolutions;
  }

  get classicsSounds(): Sound[] {
    return this.classics;
  }

  get bianchoSounds(): Sound[] {
    return this.biancho;
  }

  getSoundByHotkey(hotkey: Hotkey): Sound | undefined {
    return this.allSounds.find(x => x.isSameHotkey(hotkey));
  }

  private get allSounds() {
    return this.eSolutions.concat(this.classics).concat(this.biancho);
  }

}
