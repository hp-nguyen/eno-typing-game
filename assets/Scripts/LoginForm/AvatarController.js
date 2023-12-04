cc.Class({
  extends: cc.Component,

  properties: {
    avatarImg: cc.Sprite,
    avatarAtlas: cc.SpriteAtlas,
  },

  onLoad() {
    this.avatarSpriteFrames = this.avatarAtlas.getSpriteFrames();
    this.curAvatarIndex = 0;
    this.avatarImg.spriteFrame = this.avatarSpriteFrames[this.curAvatarIndex];
  },

  start() {
  },
  onNext() {
    if (this.curAvatarIndex === this.avatarSpriteFrames.length - 1) {
      this.curAvatarIndex = 0;
    } else {
      this.curAvatarIndex += 1;
    }
    this.avatarImg.spriteFrame = this.avatarSpriteFrames[this.curAvatarIndex];
  },
  onPrev() {
    if (this.curAvatarIndex === 0) {
      this.curAvatarIndex = this.avatarSpriteFrames.length - 1;
    } else {
      this.curAvatarIndex -= 1;
    }
    this.avatarImg.spriteFrame = this.avatarSpriteFrames[this.curAvatarIndex];
  },
  // update (dt) {},
});
