import { default as Button } from '../src/app/components/Button';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Example test suite', () => {
  it('should pass', () => {
    const { container } = render(
      <Button
        variant="primary"
        onClick={jest.fn()}
        size="regular" />
    );

    expect(container).not.toBeEmptyDOMElement();
  });
});
