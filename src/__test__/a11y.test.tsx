import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Checkbox } from '..';

const noop = (): void => {
  // nothing to do here
};

describe('Checkbox a11y', () => {
  it('checked', async () => {
    render(<Checkbox toggle={noop} checked="true" />);
    const checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes.length).toBe(1);
    const [checkbox] = checkboxes;
    expect(checkbox.ariaChecked).toBe('true');
  });
});
