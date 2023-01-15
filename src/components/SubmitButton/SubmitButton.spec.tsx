import { test, expect } from '@playwright/experimental-ct-react';
import { SubmitButton } from './SubmitButton';

test('should display component directly', async ({ mount }) => {
  const component = await mount(<SubmitButton />);
  await expect(component).toHaveText('Statista-Suche');
  // @todo Currently not covering tailwind. Must be adjusted asap. @see https://github.com/microsoft/playwright/issues/18883
  await expect(component).toHaveScreenshot();
});