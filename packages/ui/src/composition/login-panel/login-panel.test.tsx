import { render } from '@testing-library/react';
import { LoginPanel } from '.';

describe('LoginPanel', () => {
  it('renders LoginPanel component', () => {
      const { container} = render(<LoginPanel password="ble" username="ble" />);
      expect(container.toBeInDocument();
  });
});