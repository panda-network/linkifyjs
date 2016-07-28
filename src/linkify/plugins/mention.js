'use strict';

exports.__esModule = true;
exports.default = mention;
/**
 Quick Mention parser plugin for linkify
 */
function mention(linkify) {
	var TT = linkify.scanner.TOKENS,
	// Text tokens
		MT = linkify.parser.TOKENS,
	// Multi tokens
		MultiToken = MT.Base,
		S_START = linkify.parser.start,
		S_MENTION = void 0,
		S_MENTIONTAG = void 0;

	function MENTION(value) {
		this.v = value;
	}

	linkify.inherits(MultiToken, MENTION, {
		type: 'mention',
		isLink: true
	});

	S_MENTION = new linkify.parser.State();
	S_MENTIONTAG = new linkify.parser.State(MENTION);

	S_START.on(TT.AT, S_MENTION);
	S_MENTION.on(TT.DOMAIN, S_MENTIONTAG);
	S_MENTION.on(TT.TLD, S_MENTIONTAG);
}
