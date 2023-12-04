cc.Class({
  extends: cc.Component,

  properties: {
    loginForm: cc.Node,
    submitBtn: cc.Button,
  },

  onLoad() {},

  start() {},
  onPlay() {
    const data = this.loginForm.getComponent('LoginFormController').userData;
    cc.director.loadScene('GamePlay', function () {
      cc.director.getScene().emit('userData', data);
    });
  },
  // update (dt) {},
});
