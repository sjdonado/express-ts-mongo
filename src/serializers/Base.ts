class BaseSerializer {
  private code: number;

  private records: Object;

  private msg: string;

  constructor(code: number, records, msg: string = null) {
    this.code = code;
    this.records = records;
    this.msg = msg;
  }

  toJSON() {
    return {
      code: this.code,
      msg: this.msg,
      records: this.records,
    };
  }
}

export default BaseSerializer;
