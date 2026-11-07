import { expect, test } from '@playwright/test';

test('documentation retains generated prop descriptions and controls', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=example-tree--docs&viewMode=docs');
  const docs = page.locator('.sbdocs-content');
  await expect(docs).toBeVisible();
  const color = docs.getByRole('row').filter({ hasText: 'lineColor' });
  await expect(color).toContainText('The color of the line');
  await expect(color.locator('input').first()).toBeVisible();
});

for (const story of [
  'basic',
  'siblings',
  'uneven-labels',
  'styled-nodes',
  'styled',
]) {
  test(`${story}: connectors and labels retain their layout`, async ({
    page,
  }, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`/iframe.html?id=example-tree--${story}&viewMode=story`);
    const root = page.locator('#storybook-root > ul');
    await expect(root).toBeVisible();
    await expect(root.locator(':scope > li > ul > li')).toHaveCount(3);
    const geometry = await root.evaluate((tree) => {
      const parent = tree.querySelector('li > ul')!;
      const nodes = Array.from(parent.children) as HTMLElement[];
      const rect = (element: Element) => {
        const { x, y, width, height } = element.getBoundingClientRect();
        return { x, y, width, height };
      };
      return {
        root: rect(tree),
        parent: rect(parent),
        trunk: {
          height: getComputedStyle(parent, '::before').height,
          border: getComputedStyle(parent, '::before').borderLeftWidth,
        },
        nodes: nodes.map((node) => ({
          box: rect(node),
          label: rect(node.firstElementChild!),
          before: {
            borderTop: getComputedStyle(node, '::before').borderTopWidth,
            borderRight: getComputedStyle(node, '::before').borderRightWidth,
            width: getComputedStyle(node, '::before').width,
          },
          after: {
            borderTop: getComputedStyle(node, '::after').borderTopWidth,
            width: getComputedStyle(node, '::after').width,
          },
        })),
        singleChildConnectors: Array.from(
          tree.querySelectorAll('li:only-of-type'),
          (node) => getComputedStyle(node, '::after').display,
        ),
      };
    });
    const lineWidth = story === 'styled' ? '3px' : '1px';
    const lineHeight = story === 'styled' ? 30 : 20;
    expect(geometry.trunk).toEqual({
      height: `${lineHeight}px`,
      border: lineWidth,
    });
    expect(geometry.nodes[0].before.borderTop).toBe('0px');
    expect(geometry.nodes[0].after.borderTop).toBe(lineWidth);
    expect(geometry.nodes[1].before.borderTop).toBe(lineWidth);
    expect(geometry.nodes[1].after.borderTop).toBe(lineWidth);
    expect(geometry.nodes[2].before.borderRight).toBe(lineWidth);
    expect(geometry.nodes[2].after.borderTop).toBe('0px');
    for (const [index, node] of geometry.nodes.entries()) {
      expect(node.label.y - node.box.y).toBeCloseTo(lineHeight, 1);
      expect(node.label.x + node.label.width / 2).toBeCloseTo(
        node.box.x + node.box.width / 2,
        1,
      );
      expect(parseFloat(node.after.width)).toBeCloseTo(node.box.width / 2, 1);
      if (index > 0) {
        const previous = geometry.nodes[index - 1];
        expect(node.box.x).toBeCloseTo(previous.box.x + previous.box.width, 1);
        expect(node.label.y).toBeCloseTo(previous.label.y, 1);
        expect(previous.label.x + previous.label.width).toBeLessThan(
          node.label.x,
        );
      }
    }
    expect(
      geometry.singleChildConnectors.every((value) => value === 'none'),
    ).toBe(true);
    if (story === 'uneven-labels') {
      expect(geometry.nodes[1].label.height).toBeGreaterThan(
        geometry.nodes[0].label.height,
      );
      const nested = root.locator(':scope > li > ul > li:nth-child(2) > ul');
      await expect(nested.locator(':scope > li')).toHaveCount(2);
      const nestedBox = await nested.boundingBox();
      expect(nestedBox!.y).toBeCloseTo(
        geometry.nodes[1].label.y + geometry.nodes[1].label.height,
        1,
      );
    }
    await expect(root).toHaveScreenshot(`${story}.png`);
    await testInfo.attach('layout', {
      body: await root.screenshot(),
      contentType: 'image/png',
    });
    expect(errors).toEqual([]);
  });
}
