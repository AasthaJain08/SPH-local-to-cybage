var keywordsArea = document.querySelector(".story-keywords");
if (document.querySelectorAll('.field-name-body div.field-item.odd > p').length > 8) {
keywordsArea = document.querySelector('.field-name-body div.field-item.odd p:nth-of-type(8)');
}
var cxDiv = document.createElement("div");
cxDiv.setAttribute('id', 'cx_1a35c2a15f2c8209e2ccdc40d98080c26c74b95a');
var textnode = document.createTextNode(" ");
cxDiv.appendChild(textnode);
if (keywordsArea) {
keywordsArea.parentNode.insertBefore(cxDiv, keywordsArea);
//keywordsArea.appendChild(cxDiv);
var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
//cX.callQueue.push(['setSiteId', '9222341479668257877']); var ctx = { context: { categories: { isSubscriber: 'n' } } };
//var cxpageContext = { "categories": {} };
//cxpageContext["categories"]["sph-visitorcat"] = _data.visitorcat.toString(10);
cX.callQueue.push(['invoke', function() {
cX.CCE.init(null, 'sph', '8ab0d3648952076495023cb6cb4678395a8640c8');
cX.CCE.run({
widgetId: '1a35c2a15f2c8209e2ccdc40d98080c26c74b95a',
targetElementId: 'cx_1a35c2a15f2c8209e2ccdc40d98080c26c74b95a'
});
}]);
}