import React from 'react';
import { render } from '@testing-library/react';
import { selectIconComponent } from '.';
import { IconEnum } from './icons.types';

describe('Icons', () => {
  it('renders user icon', () => {
    const Icon = selectIconComponent(IconEnum.User);
    const { container } = render(<Icon />);
    expect(container).toBeInTheDocument();
  });
});
