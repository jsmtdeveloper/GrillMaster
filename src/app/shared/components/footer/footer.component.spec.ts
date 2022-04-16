import { render, screen } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('should create', async () => {
    const component = await render(FooterComponent, {});
    expect(component).toBeTruthy();
  });

  it(`should have the author's name and the current year`, async () => {
    await render(FooterComponent);
    const author = `©JsmtDeveloper - ${new Date().getFullYear()}`;
    expect(document.querySelector('.author')?.textContent).toEqual(author);
  });
});
