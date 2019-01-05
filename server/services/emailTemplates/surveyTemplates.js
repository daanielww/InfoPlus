const keys = require('../../config/keys')

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Answer this survey</h3>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">no</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};