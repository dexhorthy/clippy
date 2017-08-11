/*

Donut Tuesdays controllers for Replicated, Inc.
Contributed by: https://github.com/divolgin

*/

module.exports = function(controller) {

    controller.hears(['^(?!.*add).*flip a coin.*', '^(?!.*add).*flip a coin.*'], 'direct_message,direct_mention,mention', function(bot, message) {
        if (Math.random() < 0.5) {
            bot.reply(message, 'Its heads');
        } else {
            bot.reply(message, 'Its tails');
        }
    });

};

