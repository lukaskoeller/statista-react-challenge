import { test, expect } from '@playwright/experimental-ct-react';
import { SubmitButton } from './SubmitButton';

test('should display component directly', async ({ mount }) => {
  const component = await mount(<SubmitButton />);
  await expect(component).toHaveText('Statista-Suche');
  await expect(component).toHaveScreenshot();
});