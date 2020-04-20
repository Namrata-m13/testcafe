import { Selector } from 'testcafe';

fixture `Sample  TestCafe test`
    .page `https://devexpress.github.io/testcafe/example`;
    



test('My test', async t => {
    await t
    	.wait(30000)
        .typeText('#developer-name','John Smith')
        .click('#submit-button');
});
