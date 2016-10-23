import * as express from 'express';
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import View from '../client/views/view';
import {ViewModel} from '../client/models/viewModel';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    const viewModel = new ViewModel('test');
    const reactViewHTML = ReactDOMServer.renderToString(
        <View Model={viewModel} />);
    res.send(`<html>
        <head>
            <script src="react.js"></script>
            <script src="react-dom.js"></script>
            <script src="bundle.js"></script>
        </head>
        <body>
            <div id="react-view">${reactViewHTML}</div> <!--leave no whitespace to avoid client warning -->            
            <script>
                ReactDOM.render(
                    React.createElement(View.default,${JSON.stringify({Model:viewModel})}),
                    document.getElementById('react-view'));
            </script>
        </body>
    </html>`);
});

export default router;