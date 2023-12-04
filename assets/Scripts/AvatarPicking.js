cc.Class({
  extends: cc.Component,

  properties: {
    avatarImg: cc.Sprite,
  },

  // onLoad () {},
  start() {},
  onPickAvatar() {
    this.avatarImg.spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
  },
  // update (dt) {},
});
