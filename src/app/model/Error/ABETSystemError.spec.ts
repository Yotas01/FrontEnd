import { ABETSystemError } from './ABETSystemError';

describe('Error', () => {
  it('should create an instance', () => {
    expect(new ABETSystemError()).toBeTruthy();
  });
});
