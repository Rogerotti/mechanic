import React from 'react';
import { render } from '@testing-library/react';
import { InputWithIcon } from '.';
import { IconEnum } from '../../utils/icons/icons.types';

describe('InputWithIcon', () => {
  it('renders InputWithIcon component', () => {
    const { container } = render(<InputWithIcon icon={IconEnum.User} placeholder="test" />);
    expect(container).toBeInTheDocument();
  });
});
