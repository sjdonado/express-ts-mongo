import BaseSerializer from './Base';

class ErrorSerializer extends BaseSerializer {
  constructor(code, msg: string) {
    super(code, null, msg);
  }
}

export default ErrorSerializer;
