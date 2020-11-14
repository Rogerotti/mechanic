import React from 'react';
import { render } from '@testing-library/react';
import { InputWithIcon } from '.';
import { IconEnum } from '../../utils/icons/icons.types';

describe('LoginPanel', () => {
  it('renders LoginPanel component', () => {
    const { container } = render(<InputWithIcon icon={IconEnum.User} />);
    expect(container).toBeInTheDocument();
  });
});
