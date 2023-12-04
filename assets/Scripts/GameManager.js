cc.Class({
  extends: cc.Component,

  properties: {
    playerInput: cc.EditBox,
    paragraphLayout: cc.Layout,
    wordPrefab: cc.Prefab,
  },

  onLoad() {
    this.paragraph =
      'army beautiful became if actually army beautiful became if actually army beautiful became if actually army beautiful became if actually army beautiful became if actually army beautiful became if actually';
    this.words = this.paragraph.split(' ');
    this.wordLabels = [];
    for (let word of this.words) {
      this.generateNewLabel(word);
    }
    this.curWordIndex = 0;
    this.curWord = this.words[this.curWordIndex];
    this.trueWords = 0;
    // curWord
    // if user press space => check input vs curWord
    // if true => ++trueWords, curWord to next word
  },

  start() {},
  onTextInput() {
    if (this.playerInput.string.at(-1) === ' ') {
      this.checkCurTyping();
    }
  },
  checkCurTyping() {
    if (this.playerInput.string.trim() === this.curWord) {
      this.trueWords += 1;
      this.wordLabels[this.curWordIndex].getComponent(cc.Label).node.color = cc.Color.GREEN;
    } else {
      this.wordLabels[this.curWordIndex].getComponent(cc.Label).node.color = cc.Color.RED;
    }
    this.playerInput.string = '';
    this.playerInput.blur();
    this.playerInput.focus();
    this.curWordIndex += 1;
    this.curWord = this.words[this.curWordIndex];
  },
  generateNewLabel(text) {
    const newLabel = cc.instantiate(this.wordPrefab);
    newLabel.getComponent(cc.Label).string = text;
    this.paragraphLayout.node.addChild(newLabel);
    this.wordLabels.push(newLabel);
  },
  // update (dt) {},
});
