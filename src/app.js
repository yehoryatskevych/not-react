import { createRoot } from './lib';
import Copyright from './components/Copyright';
import App from './components/App';

const appRoot = createRoot('#app');
appRoot.render(App);

const copyrightRoot = createRoot('#copyright');
copyrightRoot.render(Copyright);
