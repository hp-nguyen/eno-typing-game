cc.Class({
  extends: cc.Component,

  properties: {
    usernameInput: cc.EditBox,
    submitBtn: cc.Button,
    avatarImg: cc.Sprite,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.userData = { username: null, avatar: null };
  },

  start() {
  },
  onInputUsername() {
    this.setUserData();
    this.checkSubmitBtn();
  },
  checkSubmitBtn() {
    if (this.usernameInput.string.trim()) {
      this.submitBtn.interactable = true;
    } else {
      this.submitBtn.interactable = false;
    }
  },
  setUserData() {
    this.userData.username = this.usernameInput.string;
    this.userData.avatar = this.avatarImg.spriteFrame;
  },
  // update (dt) {},
});
