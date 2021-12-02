export default class GameSaving {
  constructor(saving) {
    const {
      id, created, userInfo:
      {
        id: id2, name, level, points,
      },
    } = saving;
    this.id = id;
    this.created = created;
    this.userInfo = {};
    this.userInfo.id = id2;
    this.userInfo.name = name;
    this.userInfo.points = points;
    this.userInfo.level = level;
  }
}
