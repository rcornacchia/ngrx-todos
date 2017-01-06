import { RouterModule, Routes } from '@angular/router';

import { SimpleTodosComponent } from './simpleTodos/simpleTodos.component';

const routes: Routes = [
  { path: '', component: SimpleTodosComponent }
];

export const routing = RouterModule.forRoot(routes);
