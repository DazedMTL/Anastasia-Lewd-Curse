//===================================================================
//EventInformation.js
//イベントの頭上に文字を表示するプラグイン
//===================================================================
//Copyright (c) 2018 蔦森くいな
//Released under the MIT license.
//http://opensource.org/licenses/mit-license.php
//-------------------------------------------------------------------
//blog   : http://paradre.com/
//Twitter: https://twitter.com/Kuina_T
//===================================================================
//＜更新情報＞
//  ver1.1.0 2018/06/04 不具合修正、変数を使用可能にしました
//  ver1.0.0 2018/01/14 初版
//===================================================================

/*:
 * @plugindesc イベントの頭上に文字を表示したい時に使います
 * @author 蔦森くいな
 *
 * @help このプラグインはイベントのページ毎に異なる設定が可能です。
 * 設定したいイベントページの実行内容１行目に
 * 「注釈」コマンドを設定し、以下のように入力します。
 * 
 * info:ハロルド
 * 
 * これでイベントの頭上に「ハロルド」と表示されます。
 * 文字列の中に\V[n]で変数の値を表示する事もできます。
 * また、以下のように入力すると文字の大きさを変更できます。
 * 
 * info:ハロルド,40
 * 
 * さらに、行を変えて以下のように入力すると
 * 文字を表示する位置を調整できます
 * 
 * info:ハロルド,40
 * infoMove:50,-20
 * 
 * ※infoMoveは１つ目の数字がX座標、２つ目がY座標を調整します。
 * ※infoMoveは必ずinfoより後に入力する必要があります。
 * ※行を変えずにスペースで区切ってもOKです。
 * ※仕様上、表示する文字列に「：」や「　」は含められません
 * 
 *
 * 利用規約：
 * このプラグインは商用・非商用を問わず無料でご利用いただけます。
 * 使用報告やクレジット表記も必要ありません。
 * どのようなゲームに使っても、どのように加工していただいても構いません。
 * MIT Licenseにつき著作権表示とライセンスURLは残しておいて下さい。
 */

function _PD_EventInfomation() {
    throw new Error('This is a static class');
}

_PD_EventInfomation.infoSprite = [];
_PD_EventInfomation.changeVariables = [];

_PD_EventInfomation.infoInitialize = function (eventId) {
    var infoSprite = this.infoSprite[eventId];
    if (infoSprite && infoSprite.parent) {
        infoSprite.parent.removeChild(infoSprite);
    }
    infoSprite = null;
    this.changeVariables[eventId] = null;
};

_PD_EventInfomation.setupCommand = function (event) {
    _PD_EventInfomation.infoInitialize(event._eventId);
    var list = event.page().list;
    var index = 0;
    while (list[index].code === 108 || list[index].code === 408) {
        var command = list[index].parameters[0].toLowerCase().replace(/　/g, " ").split(' ');
        for (var i = 0, len = command.length; i < len; i++) {
            var param = command[i].replace(/:/g, ',').replace(/：/g, ',').split(',');
            switch (param[0]) {
                case 'info':
                    var preText = param[1];
                    var newText = _PD_EventInfomation.convertEscapeCharacters(param[1]);
                    if (newText !== preText) _PD_EventInfomation.changeVariables[event._eventId] = true;
                    _PD_EventInfomation.setInformation(event._eventId, newText, parseInt(param[2]));
                    break;
                case 'infomove':
                    var infoSprite = _PD_EventInfomation.infoSprite[event._eventId];
                    if (infoSprite) {
                        infoSprite.x += parseInt(param[1]);
                        infoSprite.y += parseInt(param[2]);
                    }
                    break;
            }
        }
        index = index + 1;
    }
};

_PD_EventInfomation.setInformation = function (eventId, text, fontSize) {
    var charCount = 0;
    for (var i = 0, len = text.length; i < len; i++) {
        var code = text.charCodeAt(i);
        if ((code >= 0x0 && code < 0x81) || (code == 0xf8f0) || (code >= 0xff61 && code < 0xffa0) || (code >= 0xf8f1 && code < 0xf8f4)) {
            charCount += 1;
        } else {
            charCount += 2;
        }
    }
    fontSize = fontSize ? fontSize : 21;
    var infoWidth = (charCount + 1) * Math.ceil(fontSize / 2);
    var infoHeight = fontSize + 2;
    this.infoSprite[eventId] = new Sprite(new Bitmap(infoWidth, infoHeight));
    var infoSprite = this.infoSprite[eventId];
    infoSprite.anchor = new Point(0.5, 1);
    infoSprite.move(0, -48);
    var bitmap = infoSprite.bitmap;
    bitmap.fillRect(0, 0, infoWidth, infoHeight, 'rgba(0,0,0,0.5)');
    bitmap.fontSize = fontSize;
    bitmap.drawText(text, 0, 0, infoWidth, infoHeight, 'center');
    _PD_EventInfomation.addInfoSprite(eventId);
};

_PD_EventInfomation.addInfoSpriteAll = function () {
    if (!SceneManager._scene._spriteset) return;
    for (var i = 0, len = $gameMap._events.length; i < len; i++) {
        _PD_EventInfomation.addInfoSprite(i);
    }
};

_PD_EventInfomation.addInfoSprite = function (eventId) {
    if (!SceneManager._scene._spriteset) return;
    var infoSprite = _PD_EventInfomation.infoSprite;
    var characterSprite = SceneManager._scene._spriteset._characterSprites;
    if (infoSprite[eventId] && infoSprite[eventId].constructor === Sprite) {
        for (var v = 0, len = characterSprite.length; v < len; v++) {
            if (characterSprite[v]._character === $gameMap._events[eventId]) {
                characterSprite[v].addChild(infoSprite[eventId]);
            }
        }
    }
};

_PD_EventInfomation.convertEscapeCharacters = function (text) {
    text = text.replace(/\\/g, '\x1b');
    text = text.replace(/\x1b\x1b/g, '\\');
    text = text.replace(/\x1bV\[(\d+)\]/gi, function () {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bV\[(\d+)\]/gi, function () {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    return text;
};

(function () {
    'use strict';
    var pd_EI_Game_Map_setupEvents = Game_Map.prototype.setupEvents;
    Game_Map.prototype.setupEvents = function () {
        _PD_EventInfomation.infoSprite = [];
        _PD_EventInfomation.changeVariables = [];
        pd_EI_Game_Map_setupEvents.call(this);
    };

    var pd_EI_Game_Event_clearPageSettings = Game_Event.prototype.clearPageSettings;
    Game_Event.prototype.clearPageSettings = function () {
        pd_EI_Game_Event_clearPageSettings.call(this);
        _PD_EventInfomation.infoInitialize(this._eventId);
    };

    var pd_EI_Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
    Game_Event.prototype.setupPageSettings = function () {
        pd_EI_Game_Event_setupPageSettings.call(this);
        _PD_EventInfomation.setupCommand(this);
    };

    var pd_EI_Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
    Scene_Map.prototype.createSpriteset = function () {
        pd_EI_Scene_Map_createSpriteset.call(this);
        _PD_EventInfomation.addInfoSpriteAll();
    };

    var pd_EI_Game_Event_refresh = Game_Event.prototype.refresh;
    Game_Event.prototype.refresh = function () {
        pd_EI_Game_Event_refresh.call(this);
        if (_PD_EventInfomation.changeVariables[this._eventId] &&
            _PD_EventInfomation.changeVariables[this._eventId] === true) {
            _PD_EventInfomation.setupCommand(this);
        }
    };
})();