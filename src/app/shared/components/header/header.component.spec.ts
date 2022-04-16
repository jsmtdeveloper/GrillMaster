import { render, screen } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should create', async () => {
    const component = await render(HeaderComponent);
    expect(component).toBeTruthy();
  });

  it(`should have the header menu buttons`, async () => {
    const component = await render(HeaderComponent);
    expect(screen.getByText('Home'));
    expect(screen.getByText('Grill'));
    expect(screen.getByText('Documentation'));
  });
});
