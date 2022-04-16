import { render, screen } from '@testing-library/angular';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  it('Should create componente', async () => {
    await render(HomeComponent);
    expect(screen.getByText('Assessment Grill Master'));
  });

  it('Should have the docs and swagger links ', async () => {
    await render(HomeComponent);
    const docsLink =
      'http://isol-grillassessment.azurewebsites.net/swagger/docs/v1';
    expect(screen.getByText(docsLink).getAttribute('href')).toBe(docsLink);

    const swaggerLink =
      'http://isol-grillassessment.azurewebsites.net/swagger/ui/index';
    expect(screen.getByText(swaggerLink).getAttribute('href')).toBe(
      swaggerLink
    );
  });
});
