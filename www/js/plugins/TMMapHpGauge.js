//=============================================================================
// TMPlugin - マップＨＰゲージ
// バージョン: 1.3.0
// 最終更新日: 2017/02/02
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc マップシーンに顔グラフィックとＨＰゲージを表示します。
 * 必要に応じてＭＰや変数などをゲージで表示することもできます。
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param gaugeWindowX
 * @desc ＨＰゲージウィンドウのＸ座標
 * 初期値: 0
 * @default 0
 *
 * @param gaugeWindowY
 * @desc ＨＰゲージウィンドウのＹ座標
 * 初期値: 0
 * @default 0
 *
 * @param gaugeWindowWidth
 * @desc ＨＰゲージウィンドウの幅
 * 初期値: 288
 * @default 288
 *
 * @param gaugeWindowHeight
 * @desc ＨＰゲージウィンドウの高さ
 * 初期値: 64
 * @default 64
 *
 * @param gaugeAType
 * @desc ゲージＡのタイプ（HP / MP / TP / LV / VN）
 * 初期値: HP
 * @default HP
 *
 * @param gaugeAX
 * @desc ゲージＡのＸ座標（ウィンドウ内の左端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeAY
 * @desc ゲージＡのＹ座標（ウィンドウ内の上端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeAWidth
 * @desc ゲージＡの長さ
 * 初期値: 144
 * @default 144
 *
 * @param gaugeAHeight
 * @desc ゲージＡの表示領域（数値とゲージ合わせて）の高さ
 * 初期値: 36
 * @default 36
 *
 * @param gaugeAFontSize
 * @desc ゲージＡのフォントサイズ
 * 初期値: 28
 * @default 28
 *
 * @param gaugeAParam
 * @desc ゲージＡのタイプが VN のときに現在値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeAMax
 * @desc ゲージＡのタイプが VN のときに最大値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeAName
 * @desc ゲージＡのタイプが VN のときに表示するパラメータ名
 * 初期値: AP
 * @default AP
 *
 * @param gaugeAColor
 * @desc ゲージＡのタイプが LV / VN のときのゲージカラー
 * 初期値: #ff60c0 #ffa0e0
 * @default #ff60c0 #ffa0e0
 * 
 * @param gaugeBType
 * @desc ゲージＢのタイプ（HP / MP / TP / LV / VN）
 * 初期値: 
 * @default 
 *
 * @param gaugeBX
 * @desc ゲージＢのＸ座標（ウィンドウ内の左端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeBY
 * @desc ゲージＢのＹ座標（ウィンドウ内の上端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeBWidth
 * @desc ゲージＢの長さ
 * 初期値: 144
 * @default 144
 *
 * @param gaugeBHeight
 * @desc ゲージＢの表示領域（数値とゲージ合わせて）の高さ
 * 初期値: 36
 * @default 36
 *
 * @param gaugeBFontSize
 * @desc ゲージＢのフォントサイズ
 * 初期値: 28
 * @default 28
 *
 * @param gaugeBParam
 * @desc ゲージＢのタイプが VN のときに現在値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeBMax
 * @desc ゲージＢのタイプが VN のときに最大値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeBName
 * @desc ゲージＢのタイプが VN のときに表示するパラメータ名
 * 初期値: BP
 * @default BP
 *
 * @param gaugeBColor
 * @desc ゲージＢのタイプが LV / VN のときのゲージカラー
 * 初期値: #ff60c0 #ffa0e0
 * @default #ff60c0 #ffa0e0
 *
 * @param gaugeCType
 * @desc ゲージＣのタイプ（HP / MP / TP / LV / VN）
 * 初期値: 
 * @default 
 *
 * @param gaugeCX
 * @desc ゲージＣのＸ座標（ウィンドウ内の左端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeCY
 * @desc ゲージＣのＹ座標（ウィンドウ内の上端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeCWidth
 * @desc ゲージＣの長さ
 * 初期値: 144
 * @default 144
 *
 * @param gaugeCHeight
 * @desc ゲージＣの表示領域（数値とゲージ合わせて）の高さ
 * 初期値: 36
 * @default 36
 *
 * @param gaugeCFontSize
 * @desc ゲージＣのフォントサイズ
 * 初期値: 28
 * @default 28
 *
 * @param gaugeCParam
 * @desc ゲージＣのタイプが VN のときに現在値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeCMax
 * @desc ゲージＣのタイプが VN のときに最大値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeCName
 * @desc ゲージＣのタイプが VN のときに表示するパラメータ名
 * 初期値: CP
 * @default CP
 *
 * @param gaugeCColor
 * @desc ゲージＣのタイプが LV / VN のときのゲージカラー
 * 初期値: #ff60c0 #ffa0e0
 * @default #ff60c0 #ffa0e0
 *
 * @param gaugeDType
 * @desc ゲージＤのタイプ（HP / MP / TP / LV / VN）
 * 初期値: 
 * @default 
 *
 * @param gaugeDX
 * @desc ゲージＤのＸ座標（ウィンドウ内の左端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeDY
 * @desc ゲージＤのＹ座標（ウィンドウ内の上端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeDWidth
 * @desc ゲージＤの長さ
 * 初期値: 144
 * @default 144
 *
 * @param gaugeDHeight
 * @desc ゲージＤの表示領域（数値とゲージ合わせて）の高さ
 * 初期値: 36
 * @default 36
 *
 * @param gaugeDFontSize
 * @desc ゲージＤのフォントサイズ
 * 初期値: 28
 * @default 28
 *
 * @param gaugeDParam
 * @desc ゲージＤのタイプが VN のときに現在値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeDMax
 * @desc ゲージＤのタイプが VN のときに最大値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeDName
 * @desc ゲージＤのタイプが VN のときに表示するパラメータ名
 * 初期値: AP
 * @default AP
 *
 * @param gaugeDColor
 * @desc ゲージＤのタイプが LV / VN のときのゲージカラー
 * 初期値: #ff60c0 #ffa0e0
 * @default #ff60c0 #ffa0e0
 * 
 * @param faceOffsetX
 * @desc 顔グラフィックのＸ座標補正値
 * 初期値: -4
 * @default -4
 *
 * @param faceOffsetY
 * @desc 顔グラフィックのＹ座標補正値
 * 初期値: -4
 * @default -4
 *
 * @param stateIconMax
 * @desc ステートアイコンを表示する個数
 * 初期値: 4
 * @default 4
 *
 * @param stateIconX
 * @desc ステートアイコンのＸ座標
 * 初期値: 156
 * @default 156
 *
 * @param stateIconY
 * @desc ステートアイコンのＹ座標
 * 初期値: 24
 * @default 24
 *
 * @param goldWidth
 * @desc 所持金表示の幅
 * 初期値: 0 ( 0 で非表示 )
 * @default 0
 *
 * @param goldX
 * @desc 所持金表示のＸ座標
 * 初期値: 12
 * @default 12
 *
 * @param goldY
 * @desc 所持金表示のＹ座標
 * 初期値: 12
 * @default 12
 *
 * @param shakeTime
 * @desc ダメージを受けたときにウィンドウを揺らす時間（フレーム）
 * 初期値: 20 ( 0 で揺らさない )
 * @default 20
 *
 * @param startVisible
 * @desc ゲーム開始時の表示状態
 * 初期値: 1（ 0 で非表示 / 1 で表示）
 * @default 1
 *
 * @param windowOpacity
 * @desc ＨＰゲージウィンドウの不透明度
 * 初期値: 255
 * @default 255
 *
 * @param collideOpacity
 * @desc プレイヤーと重なったときの不透明度
 * 初期値: 128（ 0 ～ 255 ）
 * @default 128
 *
 * @param messageBusyHide
 * @desc メッセージウィンドウ表示中はログウィンドウを隠す
 * 初期値: 1（ 0 で隠さない / 1 で隠す）
 * @default 1
 *
 * @param eventBusyHide
 * @desc イベント起動中はログウィンドウを隠す
 * 初期値: 1（ 0 で隠さない / 1 で隠す）
 * @default 1
 * 
 * @param faceActorval
 * @desc 隊列の変数の値番目のアクターのフェイスを表示する。
 * @default 1
 *
 * @help
 * TMPlugin - マップＨＰゲージ ver1.3.0
 * 
 * 使い方:
 *
 *   プラグインパラメータをいじってお好みのＨＰゲージを表示してください。
 *
 *   このプラグインは RPGツクールMV Version 1.3.4 で動作確認をしています。
 *
 *
 * プラグインコマンド:
 *
 *   showHpGauge
 *     ＨＰゲージを表示します。プラグインパラメータ startVisible が 0 の場合、
 *     このコマンドが実行されるまでＨＰゲージは表示されません。
 *
 *   showHpGauge A
 *     ゲージＡを表示します。プラグインパラメータでタイプが設定されている場合、
 *     ゲーム開始時に自動的に表示状態になります。
 * 
 *   hideHpGauge
 *     ＨＰゲージを隠します。showHpGauge コマンドが実行されるまで
 *     表示されないままです。
 * 
 *   hideHpGauge B
 *     ゲージＢを隠します。showHpGauge B コマンドが実行されるまで
 *     表示されないままです。
 *
 *
 * プラグインパラメータ補足:
 *
 *   gaugeAParam / gaugeBParam / gaugeCParam
 *     ゲージのタイプが VN の場合に、ゲージの現在値として扱うゲーム変数番号を
 *     設定してください。
 *
 *   gaugeAMax / gaugeBMax / gaugeCMax
 *     ゲージのタイプが VN の場合に、ゲージの最大値として扱うゲーム変数番号を
 *     指定してください。 これらのパラメータに設定した番号のゲーム変数に
 *     値を代入することで、初めて最大値として機能します。
 * 
 *   windowOpacity / collideOpacity
 *     windowOpacity はウィンドウフレーム及び背景に影響し、collideOpacity
 *     はゲージや顔グラフィックにも影響します。
 *     windowOpacity の値が collideOpacity よりも低い場合、プレイヤーと
 *     重なった際の不透明度として windowOpacity の値が適用されます。
 *     ただし、ゲージと顔グラフィックに関しては通常どおり collideOpacity の
 *     値が適用されます。
 */

var Imported = Imported || {};
Imported.TMMapHpGauge = true;

var TMPlugin = TMPlugin || {};
TMPlugin.MapHpGauge = {};
TMPlugin.MapHpGauge.Parameters = PluginManager.parameters('TMMapHpGauge');
TMPlugin.MapHpGauge.WindowX = +(TMPlugin.MapHpGauge.Parameters['gaugeWindowX'] || 0);
TMPlugin.MapHpGauge.WindowY = +(TMPlugin.MapHpGauge.Parameters['gaugeWindowY'] || 0);
TMPlugin.MapHpGauge.WindowWidth = +(TMPlugin.MapHpGauge.Parameters['gaugeWindowWidth'] || 288);
TMPlugin.MapHpGauge.WindowHeight = +(TMPlugin.MapHpGauge.Parameters['gaugeWindowHeight'] || 64);
TMPlugin.MapHpGauge.Gauges = [];
['A', 'B', 'C', 'D'].forEach(function (code) {
  TMPlugin.MapHpGauge['Gauge' + code] = {
    type: TMPlugin.MapHpGauge.Parameters['gauge' + code + 'Type'],
    x: +(TMPlugin.MapHpGauge.Parameters['gauge' + code + 'X'] || 12),
    y: +(TMPlugin.MapHpGauge.Parameters['gauge' + code + 'Y'] || 12),
    width: +(TMPlugin.MapHpGauge.Parameters['gauge' + code + 'Width'] || 144),
    height: +(TMPlugin.MapHpGauge.Parameters['gauge' + code + 'Height'] || 36),
    fontSize: +(TMPlugin.MapHpGauge.Parameters['gauge' + code + 'FontSize'] || 28),
    param: +(TMPlugin.MapHpGauge.Parameters['gauge' + code + 'Param'] || 0),
    max: +(TMPlugin.MapHpGauge.Parameters['gauge' + code + 'Max'] || 0),
    name: TMPlugin.MapHpGauge.Parameters['gauge' + code + 'Name'],
    color: (TMPlugin.MapHpGauge.Parameters['gauge' + code + 'Color'] || '#ff60c0 #ffa0e0').split(' '),
  };
  TMPlugin.MapHpGauge.Gauges.push(TMPlugin.MapHpGauge['Gauge' + code]);
});
TMPlugin.MapHpGauge.FaceOffsetX = +(TMPlugin.MapHpGauge.Parameters['faceOffsetX'] || -4);
TMPlugin.MapHpGauge.FaceOffsetY = +(TMPlugin.MapHpGauge.Parameters['faceOffsetY'] || -4);
TMPlugin.MapHpGauge.StateIconMax = +(TMPlugin.MapHpGauge.Parameters['stateIconMax'] || 4);
TMPlugin.MapHpGauge.StateIconX = +(TMPlugin.MapHpGauge.Parameters['stateIconX'] || 156);
TMPlugin.MapHpGauge.StateIconY = +(TMPlugin.MapHpGauge.Parameters['stateIconY'] || 24);
TMPlugin.MapHpGauge.GoldWidth = +(TMPlugin.MapHpGauge.Parameters['goldWidth'] || 0);
TMPlugin.MapHpGauge.GoldX = +(TMPlugin.MapHpGauge.Parameters['goldX'] || 0);
TMPlugin.MapHpGauge.GoldY = +(TMPlugin.MapHpGauge.Parameters['goldY'] || 0);
TMPlugin.MapHpGauge.ShakeTime = +(TMPlugin.MapHpGauge.Parameters['shakeTime'] || 20);
TMPlugin.MapHpGauge.CollideOpacity = +(TMPlugin.MapHpGauge.Parameters['collideOpacity'] || 128);
TMPlugin.MapHpGauge.StartVisible = TMPlugin.MapHpGauge.Parameters['startVisible'] === '1';
TMPlugin.MapHpGauge.WindowOpacity = +(TMPlugin.MapHpGauge.Parameters['windowOpacity'] || 255);
TMPlugin.MapHpGauge.MessageBusyHide = TMPlugin.MapHpGauge.Parameters['messageBusyHide'] === '1';
TMPlugin.MapHpGauge.EventBusyHide = TMPlugin.MapHpGauge.Parameters['eventBusyHide'] === '1';

TMPlugin.MapHpGauge.FaceActorval = +(TMPlugin.MapHpGauge.Parameters['faceActorval'] || 1);

(function () {

  //-----------------------------------------------------------------------------
  // Game_System
  //

  Game_System.prototype.isVisibleMapHpGauge = function () {
    if (this._visibleMapHpGauge == null) {
      this._visibleMapHpGauge = TMPlugin.MapHpGauge.StartVisible;
    }
    return this._visibleMapHpGauge;
  };

  Game_System.prototype.setVisibleMapHpGauge = function (flag) {
    this._visibleMapHpGauge = flag;
  };

  Game_System.prototype.isVisibleMapHpGauges = function (gaugeId) {
    if (this._visibleMapHpGauges == null) {
      this._visibleMapHpGauges = [];
      for (var i = 0; i < TMPlugin.MapHpGauge.Gauges.length; i++) {
        this._visibleMapHpGauges[i] = TMPlugin.MapHpGauge.Gauges[i].type !== '';
      }
    }
    return this._visibleMapHpGauges[gaugeId];
  };

  Game_System.prototype.setVisibleMapHpGauges = function (gaugeId, flag) {
    this._visibleMapHpGauges[gaugeId] = flag;
  };

  //-----------------------------------------------------------------------------
  // Game_Interpreter
  //

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'showHpGauge') {
      if (args[0]) {
        var gaugeId = ['A', 'B', 'C', 'D'].indexOf(args[0]);
        $gameSystem.setVisibleMapHpGauges(gaugeId, true);
      } else {
        $gameSystem.setVisibleMapHpGauge(true);
      }
    } else if (command === 'hideHpGauge') {
      if (args[0]) {
        var gaugeId = ['A', 'B', 'C', 'D'].indexOf(args[0]);
        $gameSystem.setVisibleMapHpGauges(gaugeId, false);
      } else {
        $gameSystem.setVisibleMapHpGauge(false);
      }
    }
  };

  //-----------------------------------------------------------------------------
  // Window_MapHpGauge
  //

  function Window_MapHpGauge() {
    this.initialize.apply(this, arguments);
  }

  Window_MapHpGauge.prototype = Object.create(Window_Base.prototype);
  Window_MapHpGauge.prototype.constructor = Window_MapHpGauge;

  Window_MapHpGauge.prototype.initialize = function () {
    var x = TMPlugin.MapHpGauge.WindowX;
    var y = TMPlugin.MapHpGauge.WindowY;
    var wight = TMPlugin.MapHpGauge.WindowWidth;
    var height = TMPlugin.MapHpGauge.WindowHeight;
    Window_Base.prototype.initialize.call(this, x, y, wight, height);
    this.openness = $gameSystem.isVisibleMapHpGauge() ? 255 : 0;
    this.opacity = TMPlugin.MapHpGauge.WindowOpacity;
    this._gaugeParams = [];
    this._gaugeVisible = [];
    for (var i = 0; i < TMPlugin.MapHpGauge.Gauges.length; i++) {
      this._gaugeParams.push({ param: -1, max: -1 });
      this._gaugeVisible[i] = $gameSystem.isVisibleMapHpGauges(i);
    }
    this._icons = [];
    this._gold = 0;
    this._actorId = -1;
    this._shakeDuration = 0;
    this._baseX = x;
    this._needFaceRefresh = false;
    this._hideCount = 0;
  };

  Window_MapHpGauge.prototype.lineHeight = function () {
    return this._lineHeight || 36;
  };

  Window_MapHpGauge.prototype.standardPadding = function () {
    return 0;
  };

  Window_MapHpGauge.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (this.updateVisibility()) {
      this.open();
      var needRefresh = this.isNeedRefresh()
      if (this._needFaceRefresh) {
        this.refreshFace();
        if (!this._needFaceRefresh) needRefresh = true;
      }
      if (needRefresh) {
        var actor = $gameParty.leader();
        if (needRefresh === 'SHAKE') this._shakeDuration = TMPlugin.MapHpGauge.ShakeTime;
        for (var i = 0; i < TMPlugin.MapHpGauge.Gauges.length; i++) {
          this._gaugeVisible[i] = $gameSystem.isVisibleMapHpGauges(i);
          var gauge = TMPlugin.MapHpGauge.Gauges[i];
          if (gauge.type === 'HP') {
            this._gaugeParams[i].param = actor.hp;
            this._gaugeParams[i].max = actor.mhp;
          } else if (gauge.type === 'MP') {
            this._gaugeParams[i].param = actor.mp;
            this._gaugeParams[i].max = actor.mmp;
          } else if (gauge.type === 'TP') {
            this._gaugeParams[i].param = actor.tp;
            this._gaugeParams[i].max = actor.maxTp();
          } else if (gauge.type === 'LV') {
            this._gaugeParams[i].param = actor.currentExp();
            this._gaugeParams[i].max = actor.nextLevelExp();
            this._gaugeParams[i].subParam = actor.level;
          } else if (gauge.type === 'VN') {
            this._gaugeParams[i].param = $gameVariables.value(gauge.param);
            this._gaugeParams[i].max = $gameVariables.value(gauge.max);
          }
        }
        this._icons = actor.stateIcons().concat(actor.buffIcons());
        this._gold = $gameParty.gold();
        this._actorId = actor.actorId();
        this.refresh();
      }
      this.updateShake();
      this.updateOpacity();
    } else {
      this.close();
    }
  };

  Window_MapHpGauge.prototype.updateVisibility = function () {
    if (!$gameSystem.isVisibleMapHpGauge()) return false;
    if ((TMPlugin.MapHpGauge.EventBusyHide && $gameMap.isEventRunning()) ||
      (TMPlugin.MapHpGauge.MessageBusyHide && $gameMessage.isBusy())) {
      this._hideCount++;
    } else {
      this._hideCount = 0;
    }
    return this._hideCount < 10 && $gameParty.leader();
  };

  Window_MapHpGauge.prototype.isNeedRefresh = function () {
    var actor = $gameParty.leader();
    if (actor) {
      if (this._actorId !== actor.actorId()) return true;
      for (var i = 0; i < TMPlugin.MapHpGauge.Gauges.length; i++) {
        if (this._gaugeVisible[i] !== $gameSystem.isVisibleMapHpGauges(i)) return true;
        var gauge = TMPlugin.MapHpGauge.Gauges[i];
        var gaugeParam = this._gaugeParams[i];
        if (gauge.type === 'HP') {
          if (gaugeParam.param !== actor.hp || gaugeParam.max !== actor.mhp) {
            return gaugeParam.param > actor.hp ? 'SHAKE' : true;
          }
        } else if (gauge.type === 'MP') {
          if (gaugeParam.param !== actor.mp || gaugeParam.max !== actor.mmp) return true;
        } else if (gauge.type === 'TP') {
          if (gaugeParam.param !== actor.tp || gaugeParam.max !== actor.maxTp()) return true;
        } else if (gauge.type === 'LV') {
          if (gaugeParam.param !== actor.currentExp() || gaugeParam.max !== actor.nextLevelExp() ||
            gaugeParam.subParam !== actor.level) return true;
        } else if (gauge.type === 'VN') {
          if (gaugeParam.param !== $gameVariables.value(gauge.param) ||
            gaugeParam.max !== $gameVariables.value(gauge.max)) return true;
        }
      }
      if (TMPlugin.MapHpGauge.StateIconMax > 0) {
        var icons = actor.stateIcons().concat(actor.buffIcons());
        if (this._icons.toString() !== icons.toString()) return true;
      }
      if (TMPlugin.MapHpGauge.GoldWidth > 0 &&
        this._gold !== $gameParty.gold()) return true;
    }
    return false;
  };

  Window_MapHpGauge.prototype.updateShake = function () {
    if (this._shakeDuration > 0) {
      this._shakeDuration--;
      this.x = this._baseX;
      if (this._shakeDuration > 0) {
        this.x += Math.floor(Math.sin((this._shakeDuration % 10) * Math.PI / 5) * 8);
      }
    }
  };

  Window_MapHpGauge.prototype.updateOpacity = function () {
    if (this.x < $gamePlayer.screenX() + 24 &&
      this.x + TMPlugin.MapHpGauge.WindowWidth > $gamePlayer.screenX() - 24 &&
      this.y < $gamePlayer.screenY() &&
      this.y + TMPlugin.MapHpGauge.WindowHeight > $gamePlayer.screenY() - 48) {
      this.opacity = Math.min(TMPlugin.MapHpGauge.CollideOpacity,
        TMPlugin.MapHpGauge.WindowOpacity);
      this.contentsOpacity = TMPlugin.MapHpGauge.CollideOpacity;
    } else {
      this.opacity = TMPlugin.MapHpGauge.WindowOpacity;
      this.contentsOpacity = 255;
    }
  };

  Window_MapHpGauge.prototype.refresh = function () {
    this.contents.clear();
    var actor = $gameParty.leader();
    if (actor) {
      this.refreshFace();
      for (var i = 0; i < TMPlugin.MapHpGauge.Gauges.length; i++) {
        if (!$gameSystem.isVisibleMapHpGauges(i)) continue;
        var gauge = TMPlugin.MapHpGauge.Gauges[i];
        this._lineHeight = gauge.height;
        this.contents.fontSize = gauge.fontSize;
        if (gauge.type === 'HP') {
          this.drawActorHp(actor, gauge.x, gauge.y, gauge.width);
        } else if (gauge.type === 'MP') {
          this.drawActorMp(actor, gauge.x, gauge.y, gauge.width);
        } else if (gauge.type === 'TP') {
          this.drawActorTp(actor, gauge.x, gauge.y, gauge.width);
        } else if (gauge.type === 'LV') {
          this.drawLvGauge(actor, gauge);
        } else if (gauge.type === 'VN') {
          this.drawVnGauge(this._gaugeParams[i], gauge);
        }
      }
      for (var i = 0; i < TMPlugin.MapHpGauge.StateIconMax; i++) {
        if (!this._icons[i]) break;
        var x = TMPlugin.MapHpGauge.StateIconX + i * Window_Base._iconWidth;
        this.drawIcon(this._icons[i], x, TMPlugin.MapHpGauge.StateIconY);
      }
      if (TMPlugin.MapHpGauge.GoldWidth > 0) {
        this.drawCurrencyValue(this._gold, TextManager.currencyUnit, TMPlugin.MapHpGauge.GoldX,
          TMPlugin.MapHpGauge.GoldY, TMPlugin.MapHpGauge.GoldWidth);
      }
      this._lineHeight = 36;
    }
  };

  Window_MapHpGauge.prototype.drawLvGauge = function (actor, gauge) {
    if (actor.isMaxLevel()) {
      var value1 = '-------';
      var value2 = '-------';
      var rate = 1;
    } else {
      var n = actor.currentLevelExp();
      var value1 = actor.currentExp() - n;
      var value2 = actor.nextLevelExp() - n;
      var rate = value1 / value2;
    }
    this.drawGauge(gauge.x, gauge.y, gauge.width, rate, gauge.color[0], gauge.color[1]);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, gauge.x, gauge.y, 44);
    var color = this.normalColor();
    this.changeTextColor(color);
    var width = this.textWidth(TextManager.levelA) + 4;
    this.drawText(actor.level, gauge.x + width, gauge.y, 44)
    width = gauge.width - width - this.textWidth('' + actor.level);
    this.drawCurrentAndMax(value1, value2, gauge.x + gauge.width - width, gauge.y, width,
      color, color);
  };

  Window_MapHpGauge.prototype.drawVnGauge = function (params, gauge) {
    var rate = params.max === 0 ? 0 : params.param / params.max;
    this.drawGauge(gauge.x, gauge.y, gauge.width, rate, gauge.color[0], gauge.color[1]);
    this.changeTextColor(this.systemColor());
    this.drawText(gauge.name, gauge.x, gauge.y, 44);
    this.changeTextColor(this.normalColor());
    this.drawText(params.param, gauge.x + gauge.width - 64, gauge.y, 64, 'right');
  };

  //追加
  Window_MapHpGauge.prototype.refreshFace = function () {
    var val = $gameVariables.value(TMPlugin.MapHpGauge.FaceActorval);
    if (val < $gameParty.members().length && val > 0) {
      var actor = $gameParty.members()[val];
    } else {
      var actor = $gameParty.leader();
    }
    var bitmap = ImageManager.loadFace(actor.faceName());
    this._needFaceRefresh = bitmap.width === 0;
    if (!this._needFaceRefresh) {
      var x = TMPlugin.MapHpGauge.WindowWidth - 144 + TMPlugin.MapHpGauge.FaceOffsetX;
      var y = TMPlugin.MapHpGauge.FaceOffsetY;
      var height = Math.min(TMPlugin.MapHpGauge.WindowHeight, 144);
      this.drawFace(actor.faceName(), actor.faceIndex(), x, y, 144, height);
    }
  };

  //-----------------------------------------------------------------------------
  // Scene_Map
  //

  var _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
  Scene_Map.prototype.createDisplayObjects = function () {
    _Scene_Map_createDisplayObjects.call(this);
    this.createMapHpGaugeWindow();
  };

  Scene_Map.prototype.createMapHpGaugeWindow = function () {
    this._mapHpGaugeWindow = new Window_MapHpGauge();
    this.addChild(this._mapHpGaugeWindow);
  };

  var _Scene_Map_terminate = Scene_Map.prototype.terminate;
  Scene_Map.prototype.terminate = function () {
    if (!SceneManager.isNextScene(Scene_Battle)) {
      this._mapHpGaugeWindow.hide();
    }
    _Scene_Map_terminate.call(this);
    this.removeChild(this._mapHpGaugeWindow);
  };

  var _Scene_Map_launchBattle = Scene_Map.prototype.launchBattle;
  Scene_Map.prototype.launchBattle = function () {
    this._mapHpGaugeWindow.hide();
    _Scene_Map_launchBattle.call(this);
  };

})();