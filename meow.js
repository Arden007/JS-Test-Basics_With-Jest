// the reason we doing this is cause coverage will only pickup the meow test if there is something in it being exported
const meow = () => "some string";

module.exports = meow;
