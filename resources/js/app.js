import './bootstrap';
import {TitleBar, Button} from '@shopify/app-bridge/actions';

const titleBarOptions = {
    title: 'My App',
};

const titleBar = TitleBar.create(app, titleBarOptions);

window.axios.get('/me').then(response => {
    console.log(response.data);
})
