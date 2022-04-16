import { render, screen } from '@testing-library/angular';
import { GrillMenuApiService } from './grill-menu-api.service';

describe('GrillMenuApiService', () => {
  it('should create', async () => {
    const grillMenuApiService = await render(GrillMenuApiService);
    expect(grillMenuApiService).toBeTruthy();
  });
});
