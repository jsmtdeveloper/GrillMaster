import { GrillService } from '@app/core/services/utils/grill.service';
import { render, screen } from '@testing-library/angular';
import { GrillComponent } from './grill.component';

describe('GrillComponent', () => {
  it('Should create component', async () => {
    const component = await setupTest();

    expect(screen.getByText("Let's start grilling!"));
  });
});

async function setupTest() {
  const grillServiceMock = {} as GrillService;

  return await render(GrillComponent, {
    providers: [{ provide: GrillService, useValue: grillServiceMock }]
  });
}
