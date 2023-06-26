//============================================================================
// MOG_SceneMenu_FileRename.js
//----------------------------------------------------------------------------
// (C) 2018 astral
// This software is released under the MIT License.
// https://opensource.org/licenses/mit-license.php
//----------------------------------------------------------------------------
// Version
// 1.0 2018/10/22 初版

/*:
 * @plugindesc  MOG SceneMenu / BattleCommandsでファイル名を変更します
 * @author astral
 *
 * @param changeFileList
 * @text 変更するファイル名一覧
 * @desc 変更するファイル名一覧
 * @type  struct<fileNameList>[]
 * @default ["{\"menuCommand\":\"アイテム\",\"loadFile\":\"Item\"}","{\"menuCommand\":\"装備\",\"loadFile\":\"Equip\"}","{\"menuCommand\":\"スキル\",\"loadFile\":\"Skill\"}","{\"menuCommand\":\"ステータス\",\"loadFile\":\"Status\"}","{\"menuCommand\":\"並び替え\",\"loadFile\":\"Formation\"}","{\"menuCommand\":\"オプション\",\"loadFile\":\"Options\"}","{\"menuCommand\":\"セーブ\",\"loadFile\":\"Save\"}","{\"menuCommand\":\"ゲーム終了\",\"loadFile\":\"GameEnd\"}","{\"menuCommand\":\"Com_攻撃\",\"loadFile\":\"Com_Attack\"}","{\"menuCommand\":\"Com_防御\",\"loadFile\":\"Com_Guard\"}","{\"menuCommand\":\"Com_アイテム\",\"loadFile\":\"Com_Item\"}","{\"menuCommand\":\"Com_魔法\",\"loadFile\":\"Com_Magic\"}","{\"menuCommand\":\"Com_必殺技\",\"loadFile\":\"Com_Special\"}"]
 *
 *
 * @help
 *
 * https://forum.tkool.jp/index.php?threads/2806/
 *
 * 下記プラグインで日本語等のコマンド名を使用した場合に、
 * 読み込まれるファイルを別のファイル名へ置き換えます。
 *
 * MOG_SceneMenu.js v1.2
 * MOG_BattleCommands.js v1.2
 *
 *
 * RPGツクールMV ver1.5.0以降対応です。
 *
 * プラグイン登録
 *  MOG_BattleCommands.js
 *  MOG_SceneMenu.js
 *  の下になるよう配置してください。
 *  どちらかのプラグインのみでも動作します。
 *
 * プラグインパラメータ
 *  変更前のファイル名と変更後のファイル名を指定してください。
 *  基本的に大文字小文字は区別されます。
 *
 *  .pngなどの拡張子は不要です。
 *
 * 新規プロジェクトで使用されるものは設定済みなので、
 * コマンドを追加される場合に追加してください。
 *
 * 例：
 *  変更前のファイル名：アイテム
 *  変更後のファイル名：Item
 *
 *
 *
 *
 * MOG - Scene Menu (v1.2)について
 * https://atelierrgss.wordpress.com/
 *
 *
 */
/*~struct~fileNameList:
* @param menuCommand
* @text 変更前のファイル名
* @type string
* @desc このファイルが呼び出された時を対象とします。大文字小文字も区別されます。
*
* @param loadFile
* @text 変更後のファイル名
* @type string
* @desc 実在するファイル名を指定します。Windows以外では大文字小文字が区別されます。
*/


(function () {
    'use strict';

    var parameters = PluginManager.parameters('MOG_SceneMenu_FileRename');

    var param = JSON.parse(JSON.stringify(parameters, function (key, value) {
        try {
            return JSON.parse(value);
        } catch (e) {
            try {
                return eval(value);
            } catch (e) {
                return value;
            }
        }
    }));

    var changeFileList = param.changeFileList || [];

    var replaceLoadFile = function (filename) {
        var fileList;
        var len = changeFileList.length;
        for (var i = 0; i < len; i++) {
            fileList = changeFileList[i];
            if (fileList && fileList.menuCommand === filename && fileList.loadFile) {
                return fileList.loadFile;
            }
        }
        return filename;
    };

    //============================================================================
    // ** ImageManager
    //============================================================================

    //==============================
    // * Main Commands
    //==============================
    var _ImageManager_loadMenusMainCommands = ImageManager.loadMenusMainCommands;
    ImageManager.loadMenusMainCommands = function (filename) {
        return _ImageManager_loadMenusMainCommands.call(this, replaceLoadFile(filename));
    };

    //==============================
    // * BHud
    //==============================

    var _ImageManager_loadBcom = ImageManager.loadBcom;
    ImageManager.loadBcom = function (filename) {
        return _ImageManager_loadBcom.call(this, replaceLoadFile(filename));
    };

})();